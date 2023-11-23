import React, { useContext, useState } from "react";
import "./profile.scss";
import { AuthContext } from "../../context/AuthContext";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Posts from "../../components/posts/Posts";
import { makeRequest } from "../../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router";
import Update from "../../components/update/Update";
function Profile(props) {
  const [openUpdate, setOpenUpdate] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
      }),
  });

  const { isLoading: rIsLoading, data: relationshipData } = useQuery({
    queryKey: ["relationship"],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["relationship"] });
    },
  });

  // console.log({
  //   currrentUser: currentUser.id,
  //   userId: userId,
  // });

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };
  // console.log(currentUser.id);
  // console.log("relationshipData:", relationshipData);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="profile">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {" "}
          <div className="profileImg">
            <img className="coverPic" src={"/upload/" + data.coverPic} alt="" />
            <img
              className="profilePic"
              src={"/upload/" + data.profilePic}
              alt=""
            />
            <div className="info">
              <span className="username">{data.name}</span>
            </div>
          </div>
          <div className="profileContainer">
            <div className="left">
              <div className="links">
                <a href="https://facebook.com">
                  <FacebookOutlinedIcon fontSize="large" />
                </a>
                <a href="https://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>

                <a href="https://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                {/* <a href="https://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a> */}

                {/* <a href="https://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a> */}
              </div>
            </div>

            <div className="center">
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span>{data?.city}</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>{data.website}</span>
                </div>
              </div>
              {rIsLoading ? (
                "Loading..."
              ) : userId === currentUser.id ? (
                <button onClick={() => setOpenUpdate(true)}>
                  <EditNoteOutlinedIcon />
                  Edit profile
                </button>
              ) : (
                <button onClick={handleFollow}>
                  {relationshipData?.includes(currentUser.id)
                    ? "Following"
                    : "Follow"}
                </button>
              )}
            </div>

            <div className="right">
              <EmailOutlinedIcon fontSize="large" />
              <MoreVertOutlinedIcon fontSize="large" />
            </div>
          </div>
          <Posts userId={userId} />{" "}
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
}

export default Profile;
