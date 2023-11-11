import { Layout, Col, Row, Flex } from "antd";
import './PostItem.scss'

function PostItem(props) {
    return ( 
        <Layout>
            <Row justify={"center"}>
          <h1>{props.title}</h1>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Flex vertical={true}>
              <span className="info">Author: {props.author}</span>
              <span className="info">Created at: {props.createdAt}</span>
            </Flex>
          </Col>
          <Col span={8} className="color"></Col>
        </Row>
        <Row>
          <p className="post-content">
            {props.content}
          </p>
        </Row>
        </Layout>
     );
}

export default PostItem;