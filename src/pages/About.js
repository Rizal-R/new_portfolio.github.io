import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
// import testing3 from 'asset/Untitled-13.svg';
// import { ReactComponent as Superman } from 'asset/vector.svg';
import SvgTes from './Svg_tes';
import SvgTes2 from './Svg_tes2';
import SvgCode from './Svg_code'

const { Content } = Layout;
function About() {

  return (
    <>

      <Content id="About" className='responsive'>
        <Row >
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="img-code">
            <SvgCode />
          </Col>
        </Row>
        <br />
        <div>
          <Row >
            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Developer
                </div>
                <br />
                <SvgTes2 className="show-mobile" />
                <div className="card-list-item">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </Card>

            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={10}>
              <Card className="card-about" style={{ width: "100%" }}>
                <SvgTes2 className="hide-mobile" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={10}>
              <Card className="card-about" style={{ width: "100%" }}>
                <SvgTes className="hide-mobile" />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Freelance
                </div>
                <br />
                <SvgTes className="show-mobile" />
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
