import { Layout, Flex, Pagination, Collapse } from "antd";
import "./Home.scss";
import HeaderComponent from "~/components/HeaderComponent";
import PostItem from "~/components/PostItem";
import Comment from "~/components/Comment";
import { useEffect, useState } from "react";

function HomePage() {
  const { Content } = Layout;

  const [page, setPage] = useState(1);

  const [postsData, setPostsData] = useState([]); // State to hold the JSON array
  const [usersData, setUsersData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  // Fetch the JSON data of POST
  useEffect(() => {
    //API call
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => setPostsData(jsonData));
  }, []);

  // Fetch the JSON data of USER
  useEffect(() => {
    //API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonData) => setUsersData(jsonData));
  }, []);


  // Fetch the JSON data of COMMENTS
  useEffect(() => {
    //API call
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((jsonData) => setCommentsData(jsonData));
  }, []);

  // Find Post by ID
  const renderPostById = (id) => {
    const post = postsData.find((item) => item.id === id); 

    if (!post) {
      return <p>No element found with ID {id}</p>;
    } else {
      return post;
    }
  };

  // Find User by ID 
  const renderUserById = () => {
    const user = usersData.find(
      (item) => item.id === renderPostById(page).userId
    ); // Find the element by ID

    if (!user) {
      return <p>No element found</p>;
    } else {
      return user;
    }
  };

  // const renderUserByEmail = (param) => {
  //   const user = usersData.find(
  //     (item) => item.email === param
  //   ); // Find the element by Email

  //   if (!user) {
  //     return <p>No element found</p>;
  //   } else {
  //     return user;
  //   }
  // };

  // Find Comments by post ID
  const renderCommentInPost = () => {
    const comments = commentsData.filter((item) => item.postId === page);

    if (!comments) {
      return console.log("can not find");
    } else {
      return comments;
    }
  };

  const items = [
    {
      key: "1",
      label: renderCommentInPost().length + " replies",
      children: renderCommentInPost().map((item) => (
        <Comment key={item.id} name={item.email} content={item.body} />
      )),
    },
  ];

  return (
    <Layout>
      <HeaderComponent />
      <Content className="content">
        <PostItem
          title={renderPostById(page).title}
          author={renderUserById().name}
          createdAt={renderPostById(page).created_at}
          content={renderPostById(page).body}
        />

        <Collapse defaultActiveKey={["1"]} ghost items={items} />
      </Content>
      <Flex justify="center">
        <Pagination
          defaultCurrent={1}
          total={Object.keys(postsData).length * 10}
          current={page}
          onChange={(page) => setPage(page)}
        />
      </Flex>
    </Layout>
  );
}
export default HomePage;
