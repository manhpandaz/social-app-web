import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Comment from "../comment/Comment";
import "./comments.scss";
import SendIcon from "@mui/icons-material/Send";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function Comments({ postId }) {
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      }),
  });

  // console.log({ data });

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="comments">
      <div className="commentInput">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a comment"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <SendIcon className="sendIcon" onClick={handleClick} />
      </div>
      {isLoading
        ? "Loading..."
        : data?.map((comment) => {
            return <Comment comment={comment} key={comment.id} />;
          })}
    </div>
  );
}

export default Comments;
// const comments = [
//   {
//     id: 1,
//     name: "tran manh",
//     userId: 1,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 2,
//     name: "tran manh",
//     userId: 2,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 3,
//     name: "tran manh",
//     userId: 3,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 4,
//     name: "tran manh",
//     userId: 4,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 5,
//     name: "tran manh",
//     userId: 5,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];
