import { Link } from "react-router-dom";
import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () =>
      makeRequest.get("/likes?postId=" + post.id).then((res) => {
        return res.data;
      }),
  });

  // console.log(data);

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleLike = (e) => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDeletePost = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            {post.profilePic ? (
              <img src={"/upload/" + post.profilePic} alt="" />
            ) : (
              <AccountCircleIcon className="iconUserDefault" />
            )}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                <span className="username">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <div className="more">
            <MoreHorizIcon
              className="menu"
              onClick={(e) => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
              </ul>
            )}
            {post.userId === currentUser.id && (
              <CloseIcon className="close" onClick={handleDeletePost} />
            )}
          </div>
        </div>
        <div className="content">
          <p className="caption">{post.desc}</p>
          <img src={"/upload/" + post.img} alt="" />
          <div className="actions"></div>
        </div>
        <div className="info">
          <div className="item">
            {isLoading ? (
              "Loading..."
            ) : error ? (
              <div>{error.message}</div>
            ) : data.includes(currentUser.id) ? (
              <FavoriteIcon style={{ color: "red" }} onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            <span>{data?.length} likes</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatOutlinedIcon />
            <span>10 Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>20 Shares</span>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
}

export default Post;
