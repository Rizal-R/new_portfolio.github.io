import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
import testing3 from 'asset/Untitled-13.svg';
// import { ReactComponent as Superman } from 'asset/vector.svg';
import Svg_tes from './Svg_tes';
import Svg_tes2 from './Svg_tes2';

const { Content } = Layout;
function About() {

  return (
    <>

      <Content id="About" className='responsive'>
        <div>
          <Row >
            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Developer
                </div>
                <br />
                <div className="card-list-item">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </Card>

            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={10}>
              <Card className="card-about" style={{ width: "100%" }}>
                <Svg_tes2 />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={10}>
              <Card className="card-about" style={{ width: "100%" }}>
                <Svg_tes />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Freelance
                </div>
                <br />
                <div className="card-list-item" style={{ background: "rgb(160 122 122)" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </Card>
            </Col>
          </Row>

        </div>
      </Content>

    </>
  )
}
export default About;
