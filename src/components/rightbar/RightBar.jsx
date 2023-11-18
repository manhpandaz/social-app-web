// import { useContext } from "react";
import "./rightbar.scss";
// import { AuthContext } from "../../context/AuthContext";

function RightBar(props) {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span> Suggestions For You </span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span> Username </span>
            </div>
            <div className="buttons">
              <button> follow </button> <button> dismiss </button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span> Username </span>
            </div>
            <div className="buttons">
              <button> follow </button> <button> dismiss </button>
            </div>
          </div>
        </div>
        <div className="item">
          <span> Latest Activities </span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                {" "}
                <span> Username </span>
                changed their cover picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                {" "}
                <span> Username </span>
                changed their cover picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                {" "}
                <span> Username </span>
                changed their cover picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                {" "}
                <span> Username </span>
                changed their cover picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span> Username </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span> Username </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online"></div>
              <span> Username </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
