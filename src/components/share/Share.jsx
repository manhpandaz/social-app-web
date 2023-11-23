/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.scss";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { makeRequest } from "../../axios";
import { ErrorBoundary } from "react-error-boundary";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await makeRequest.post("/upload", formData);

      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  async function handleClick(e) {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  }
  return (
    <ErrorBoundary>
      <div className="share">
        <div className="shareContent">
          <div className="left">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`what's on your mind ${currentUser.name}`}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="right">
            {file && <img className="file" src={URL.createObjectURL(file)} />}
          </div>
        </div>
        <hr />
        <div className="shareActions">
          <div className="listActions">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <AddPhotoAlternateOutlinedIcon />
                <span>Add image</span>
              </div>
            </label>
            <div className="item">
              <RoomOutlinedIcon />
              <span>Add place</span>
            </div>
            <div className="item">
              <LocalOfferIcon />
              <span>Tag friends</span>
            </div>
          </div>

          <button onClick={handleClick}>Share</button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Share;
