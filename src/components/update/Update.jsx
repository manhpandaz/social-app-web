import React, { useState } from "react";
import "./update.scss";
import { makeRequest } from "../../axios";
// import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
function Update({ setOpenUpdate, user }) {
  const [text, setText] = useState({
    email: "",
    name: "",
    city: "",
    website: "",
  });
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);

  function handleChange(e) {
    setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await makeRequest.post("/upload", formData);

      return res.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  // const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (user) => {
      return makeRequest.put("/users", user);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  async function handleClick(e) {
    e.preventDefault();
    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;
    mutation.mutate({ ...text, coverPic: coverUrl, profilePic: profileUrl });

    setOpenUpdate(false);
  }

  return (
    <div className="update">
      <div className="container">
        <form action="">
          <div>
            <label htmlFor="coverpic">Cover picture</label>
            <input
              type="file"
              name="coverpic"
              id="coverpic"
              onChange={(e) => setCover(e.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="profilepic">Profile picture</label>

            <input
              type="file"
              name="profilepic"
              id="profilepic"
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            id="city"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Website"
            name="website"
            id="website"
            onChange={handleChange}
          />

          <button className="updateBtn" onClick={handleClick}>
            Update
          </button>
        </form>
        <button className="closeBtn" onClick={() => setOpenUpdate(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Update;
