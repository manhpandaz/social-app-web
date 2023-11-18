import "./leftbar.scss";
// import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

import Friends from "../../assets/images/1.png";
import Groups from "../../assets/images/2.png";
import Market from "../../assets/images/3.png";
import Watch from "../../assets/images/4.png";
import Memories from "../../assets/images/5.png";
import Events from "../../assets/images/6.png";
import Gaming from "../../assets/images/7.png";
import Gallery from "../../assets/images/8.png";
import Videos from "../../assets/images/9.png";
import Messages from "../../assets/images/10.png";
import Tutorials from "../../assets/images/11.png";
import Courses from "../../assets/images/12.png";
import Fund from "../../assets/images/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LeftBar(props) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="Market" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span className="title">Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span className="title">Others</span>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="Courses" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="Fund" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
