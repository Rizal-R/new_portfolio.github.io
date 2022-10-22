import React from 'react';
import { Layout, Row, Col } from 'antd';

import dnet from 'asset/dnet1.png';
import sma from 'asset/sma1.png';
import kuliah from 'asset/kuliah1.png';
import triv from 'asset/triv1.png';
import freelance from 'asset/freelance1.png';
import experience from 'asset/experience.png';
import teknologi from 'asset/teknologi.png';


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
        </div>
        <Row justify='center' style={{ paddingTop: 70 }}>
          <div className='textHeight1' style={{ paddingBottom: 30 }}>Experience</div>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ paddingBottom: 20 }} >
            <img src={teknologi} className="img-experience" alt="Img" />
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24} >
            <img src={experience} className="img-experience" alt="Img" />
          </Col>

        </Row>
      </Content>
      <br />
      <br />
      <br />
    </>
  )
}
export default About;
