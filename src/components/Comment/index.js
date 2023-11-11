import { Col, Row, Avatar,  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import './Comment.scss'


function Comment(props) {
  return (
    <Row gutter={16} className="wrapper">
      <Col span={2} className="avatar">
        <Avatar icon={<UserOutlined />} />
      </Col>
      <Col span={14}>
        <Row className="name">{props.name}</Row>
        <Row className="body">{props.content}</Row>
      </Col>
    </Row>
  );
}

export default Comment;
