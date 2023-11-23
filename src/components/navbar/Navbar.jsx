import { Link } from "react-router-dom";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
function Navbar({ user }) {
  const { toggleTheme, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["users", currentUser.id],
  //   queryFn: () =>
  //     makeRequest.get("/users/find?userId=" + currentUser.id).then((res) => {
  //       return res.data;
  //     }),
  // });

  // console.log(data);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social App</span>
        </Link>
        <Link to="/">
          <HomeOutlinedIcon className="lefIcon" />
        </Link>
        {darkMode ? (
          <WbSunnyIcon className="lefIcon" onClick={toggleTheme} />
        ) : (
          <NightlightOutlinedIcon className="lefIcon" onClick={toggleTheme} />
        )}
        <GridViewOutlinedIcon className="lefIcon" />
        <div className="search">
          <SearchOutlinedIcon className="lefIcon" />
          <input type="text" placeholder="Seach..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
