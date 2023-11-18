import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
function Stories(props) {
  const stories = [
    {
      id: 1,
      name: "Tran Van Manh",
      img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Tran Van Manh",
      img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Tran Van Manh",
      img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Tran Van Manh",
      img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // {
    //   id: 5,
    //   name: "Tran Van Manh",
    //   img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
    // {
    //   id: 6,
    //   name: "Tran Van Manh",
    //   img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
    // {
    //   id: 7,
    //   name: "Tran Van Manh",
    //   img: "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
  ];

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>
          <AddIcon></AddIcon>
        </button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
