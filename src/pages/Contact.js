import React from 'react';
import { Layout, Row, Col, Progress } from 'antd';
import rizal from 'asset/rizal6.png';

import { LinkedinFilled } from '@ant-design/icons';
const { Content } = Layout;

function Contact() {

  return (
    <>
      <Content id="Contact" className="bg-1 responsive">
        <div className="site-layout-content">
          <Row >
            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
              <img className="img" src={rizal} alt="Img" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={10} className='pd-font-1'>
              <div className="font-1">HY! I AM</div>
              <div className='font-2'>RIZAL RUDIANTORO</div>
              <div className="font-3" >FRONTEND DEVELOPER</div>
              <br />
              <div className='card-font font-1-1'>
                <div>My name is Rizal and I was born in Trenggalek.</div>
                <div>I have never been married and are Muslim.</div>
                <div>I is a person who likes to pursue information technology especially in the field of Artificial intelligence (AI) and
                  also often implement in a programming language.
                </div>
              </div>


              <Row>
                {/* <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=6282229355560" rel="noreferrer noopener" target="_blank"><WhatsAppOutlined style={{ color: "#fff", padding: 12 }} /></a>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon facebook">
                    <a href="https://id-id.facebook.com/bajoel.icul" rel="noreferrer noopener" target="_blank"> <FacebookFilled style={{ color: "#fff", padding: 12 }} /></a>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon instagram">
                    <a href="https://www.instagram.com/rizal_rudiantoro/" rel="noreferrer noopener" target="_blank"> <InstagramOutlined style={{ color: "#fff", padding: 12 }} /></a>
                  </div>
                </Col> */}
                <Col span={24}>
                  <div className="icon linked">
                    <a href="https://www.linkedin.com/in/rizal-rudiantoro-27595b141" rel="noreferrer noopener" target="_blank"> <LinkedinFilled style={{ color: "#fff", padding: 12 }} /></a>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
export default Contact;
