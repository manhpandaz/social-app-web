import React, { useContext } from "react";
import "./profile.scss";
import { AuthContext } from "../../context/AuthContext";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Posts from "../../components/posts/Posts";
function Profile(props) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="profileImg">
        <img className="profileCover" src={currentUser.coverPic} alt="" />
        <div className="info">
          <img
            className="infoPicture"
            src={currentUser.profilePicture}
            alt=""
          />
          <span className="username">{currentUser.name}</span>
        </div>
      </div>
      <div className="profileContainer">
        <div className="left">
          <div className="Links">
            <a href="https://facebook.com">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
        </div>

        <div className="center">
          <div className="info">
            <div className="item">
              <PlaceIcon />
              <span>USA</span>
            </div>
            <div className="item">
              <LanguageIcon />
              <span>English</span>
            </div>
          </div>
          <button className="followButton">follow</button>
        </div>

        <div className="right">
          <button>
            <EditNoteOutlinedIcon />
            Edit profile
          </button>
          <EmailOutlinedIcon fontSize="large" />
          <MoreVertOutlinedIcon fontSize="large" />
        </div>
      </div>
      <Posts />
    </div>
  );
}

export default Profile;
