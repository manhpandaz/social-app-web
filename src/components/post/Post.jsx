import { Link } from "react-router-dom";
import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Comments from "../comments/Comments";

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [countLiked, setCountLiked] = useState(0);

  const [commentOpen, setCommentOpen] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(!liked);
      setCountLiked(countLiked - 1);
    }
    setLiked(liked);
    setCountLiked(countLiked + 1);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            {post.profilePic ? (
              <img src={post.profilePic} alt="" />
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
              <span className="date">1 min ago</span>
            </div>
          </div>
          <div className="more">
            <MoreHorizIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="content">
          <p className="caption">{post.desc}</p>
          <img src={post.img} alt="" />

          <div className="actions"></div>
        </div>
        <div className="info">
          <div className="item" onClick={handleLike}>
            {liked ? (
              <FavoriteIcon className="liked" />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <span>{countLiked} likes</span>
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
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;
