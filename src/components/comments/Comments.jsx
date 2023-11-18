import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Comment from "../comment/Comment";
import "./comments.scss";
import SendIcon from "@mui/icons-material/Send";
function Comments(props) {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "tran manh",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
      img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 2,
      name: "tran manh",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
      img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 3,
      name: "tran manh",
      userId: 3,
      profilePicture:
        "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
      img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 4,
      name: "tran manh",
      userId: 4,
      profilePicture:
        "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
      img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 5,
      name: "tran manh",
      userId: 5,
      profilePicture:
        "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
      img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="comments">
      <div className="commentInput">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment" />
        <SendIcon className="sendIcon" />
      </div>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.userId} />;
      })}
    </div>
  );
}

export default Comments;
