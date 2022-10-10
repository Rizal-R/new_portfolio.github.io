import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
// import testing3 from 'asset/Untitled-13.svg';
// import { ReactComponent as Superman } from 'asset/vector.svg';
import SvgTes from './Svg_tes';
import SvgTes2 from './Svg_tes2';
import dnet from 'asset/dnet1.png';
import sma from 'asset/sma1.png';
import kuliah from 'asset/kuliah1.png';
import triv from 'asset/triv1.png';
import freelance from 'asset/freelance1.png';
// import SvgCode from './Svg_code'

const { Content } = Layout;
function About() {

  return (
    <>
      <Content id="About" className='responsive'>
        <br />
        <div>
          <Row justify='center'>
            <Col xs={24} >
              <div className="textHeight1">
                History
              </div>

            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4} >
              <img src={sma} className="img-list" alt="Img" id="logo" />
              <div className='text-mobile-history'>
                2009-2013
              </div>
              <div className='text-mobile-history'>
                <b> Senior High School 1 Karangan</b>
              </div>
              <div className='text-mobile-history'>
                IPA
              </div>
              <div className='text-mobile-history'>
                Trenggalek
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>
              <img src={kuliah} className="img-list" alt="Img" id="logo" />
              <div className='text-mobile-history'>
                2013-2019
              </div>
              <div className='text-mobile-history'>
                <b>Brawijaya University</b>
              </div>
              <div className='text-mobile-history'>
                Informatics Engineering
              </div>
              <div className='text-mobile-history'>
                Malang
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>
              <img src={freelance} className="img-list" alt="Img" id="logo" />
              <div className='text-mobile-history'>
                2016-Present
              </div>
              <div className='text-mobile-history'><b>Freelance</b></div>
              <div className='text-mobile-history'>
                Work From Anywhere
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>
              <img src={dnet} className="img-list" alt="Img" id="logo" />
              <div className='text-mobile-history'>
                Nov 2020-Jun 2022
              </div>
              <div className='text-mobile-history'>
                <b>D~Net</b>
              </div>
              <div className='text-mobile-history'>
                <b>Frontend</b>
              </div>
              <div className='text-mobile-history'>
                Surabaya
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>
              <img src={triv} className="img-list" alt="Img" id="logo" />
              <div className='text-mobile-history'>
                Jun 2022-Present
              </div>
              <div className='text-mobile-history'>
                <b>TRIV Indonesia</b>
              </div>
              <div className='text-mobile-history'>
                <b>Full Stack</b>
              </div>
              <div className='text-mobile-history'>
                Surabaya
              </div>
            </Col>
          </Row>
          {/* <Row style={{ paddingTop: 100 }}>
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
                <div className="card-list-item" style={{ background: "rgb(253 147 112)" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </Card>
            </Col>
          </Row> */}

        </div>
      </Content>

    </>
  )
}
export default About;
