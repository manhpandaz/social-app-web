import "./comment.scss";
import CloseIcon from "@mui/icons-material/Close";
function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="info">
        <div className="userInfo">
          <div>
            <img src={comment.profilePicture} alt="" />
            <span>{comment.name}</span>
          </div>
          <span className="date">1 hour ago</span>
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
