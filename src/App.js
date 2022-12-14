import React, { useEffect } from 'react';
import './App.less';
import { Layout, Anchor } from 'antd';
import About from 'pages/About'
import Contact from 'pages/Contact'
// import Portofolio from 'pages/Portofolio'

const { Header, Footer } = Layout;
const { Link } = Anchor;

function App() {
  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }, []);
  return (
    <div className='container'>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Anchor targetOffset="50" >
            <Link href="#Contact" title="Contact" />
            <Link href="#About" title="About" />
            {/* <Link href="#Portofolio" title="Portofolio" /> */}
          </Anchor>
        </Header>
        <Contact />
        <About />
        {/* <Portofolio /> */}
        <Footer style={{ textAlign: 'center' }}>Rizal Rudiantoro Portofolio ©2021</Footer>
      </Layout>
    </div>
  )
}
export default App;
