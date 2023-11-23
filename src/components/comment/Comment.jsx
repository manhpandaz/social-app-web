import moment from "moment";
import "./comment.scss";
import CloseIcon from "@mui/icons-material/Close";
function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="info">
        <div className="userInfo">
          <div>
            <img src={comment.profilePic} alt="" />
            <span>{comment.name}</span>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
        <div className="actions">
          <CloseIcon />
        </div>
      </div>
      <p>{comment.desc}</p>
    </div>
  );
}

export default Comment;
