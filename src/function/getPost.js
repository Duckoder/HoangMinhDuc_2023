import { useEffect, useState } from "react";

const GetPost = (param) => {

  const [postsData, setPostsData] = useState([]); // State to hold the JSON array

  useEffect(() => {
    //API call
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => setPostsData(jsonData));
  }, []);

  const renderPostById = () => {
    const post = postsData.find((item) => item.id === param); // Find the element by ID

    if (!post) {
      return <p>No element found with ID {param}</p>;
    } else {
      return post;
    }
  };
  return renderPostById;
};

export default GetPost;