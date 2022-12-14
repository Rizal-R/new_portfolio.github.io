import React from 'react';
import { Layout, Row, Col } from 'antd';
import rizal from 'asset/rizal9.png';
import SvgHai from './Svg_hai'
import { LinkedinFilled } from '@ant-design/icons';
const { Content } = Layout;

function Contact() {

  return (
    <>
      <Col xs={24} sm={24} md={24} lg={24} xl={14} className='show-mobile'>
        <img className="img" src={rizal} alt="Img" />
      </Col>
      <Content id="Contact" className="bg-1 responsive">
        <div className="site-layout-content ">
          <Row >
            <Col xs={24} sm={24} md={24} lg={24} xl={14} className='hide-mobile'>
              <img className="img" src={rizal} alt="Img" />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={10}>
              <div className='card-font pd-font-1'>
                <div className="img-code">
                  <SvgHai />
                </div>
                <div className='font-2'>RIZAL RUDIANTORO</div>
                <div className="font-3" >FRONTEND DEVELOPER</div>
                <br />
                <div className=' font-1-1'>
                  <div>My name is Rizal.</div>
                  <div>I'm singgle and are Muslim.</div>
                  <div>I'm a person who likes to pursue information technology especially in the field of Artificial intelligence (AI) and
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
                    <a href="https://www.linkedin.com/in/rizal-rudiantoro-27595b141" rel="noreferrer noopener" target="_blank">
                      <div className="icon linked">
                        <LinkedinFilled style={{ color: "#fff", padding: 12 }} />
                      </div>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
export default Contact;
