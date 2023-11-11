import { Col, Layout, Row, Avatar } from "antd";
import "./Header.scss";

function HeaderComponent() {
  const { Header } = Layout;
  return (
    <Header className="header">
      <Row
        justify={"center"}
        className="headerItem"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col span={8} className="Logo">
          <Avatar
            shape="square"
            size={64}
            src="https://images.careerbuilder.vn/content/news/20161014/uyxw-hcd_1476417070.png"
          />
          <a href="/" className="title">
            {" "}
            This Is My Code
          </a>
        </Col>
        <Col span={8} className="blog">
          BLOG
        </Col>
        <Col span={8} className="user">
          <Avatar
            size={50}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVECzTdH_vdN6kNatGLQiEc4ocSFdbcWqztQ&usqp=CAU"
          />
          <span className="username">HoangMinhDuc</span>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
