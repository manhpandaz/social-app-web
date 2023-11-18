import { ErrorBoundary } from "react-error-boundary";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";

import { makeRequest } from "../../axios";
import "./posts.scss";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Posts({ userId }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get("/posts?userId=" + userId).then((res) => res.data),
  });

  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ErrorBoundary>
      <div className="posts">
        {data?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default Posts;

// const posts = [
//   {
//     id: 1,
//     name: "tran manh",
//     userId: 1,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 2,
//     name: "tran manh",
//     userId: 2,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 3,
//     name: "tran manh",
//     userId: 3,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 4,
//     name: "tran manh",
//     userId: 4,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },

//   {
//     id: 5,
//     name: "tran manh",
//     userId: 5,
//     profilePicture:
//       "https://images.pexels.com/photos/7414078/pexels-photo-7414078.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem non id hic distinctio accusamus perferendis eum aut impedit est. Illum repellendus illo ab, accusantium odit perspiciatis suscipit dolor earum.",
//     img: "https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];
