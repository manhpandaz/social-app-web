import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.scss";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const Share = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="shareContent">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a status" />
      </div>
      <div className="shareActions">
        <div className="listActions">
          <div className="item">
            <AddPhotoAlternateOutlinedIcon />
            <span>Add image</span>
          </div>
          <div className="item">
            <RoomOutlinedIcon />
            <span>Add place</span>
          </div>
          <div className="item">
            <LocalOfferIcon />
            <span>Tag friends</span>
          </div>
        </div>

        <button>Share</button>
      </div>
    </div>
  );
};

export default Share;
