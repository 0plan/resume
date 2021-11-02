import React from 'react';

const ContextMe = (props) => {
  return (

      <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
        <div className="w3-display-container">
          <img src="/img/avatar.jfif" alt="Avatar"/>
          <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2 className="w3-text-gray">이충호 <small>[Lee,Chungho]</small></h2>
          </div>
        </div>
        <div className="w3-container">
          <h4 id="contact">Contact Me</h4>
          <p><i className="fa-fw w3-margin-right w3-large w3-text-teal fa fa-briefcase"></i>Full Stack
            Developer</p>
          <p><i className="fa-fw w3-margin-right w3-large w3-text-teal fa fa-envelope"></i>chlee125@gmail.com
          </p>
          <p><a href="https://github.com/chlee125" target="_blank" className="w3-hover-opacity">
            <i className="fa-fw w3-margin-right w3-large w3-text-teal fab fa-github"></i>
            chlee125</a></p>
          <p><a href="https://blog.heybi.shop/" target="_blank" className="w3-hover-opacity">
            <i className="fa-fw w3-margin-right w3-large w3-text-teal fa fa-rss"></i>
            blog.heybi.shop</a></p>
        </div>
      </div>
  );
};

export default ContextMe;