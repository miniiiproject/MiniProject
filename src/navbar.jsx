import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';
// import logo from './public/images/logo.png';
const Navbar = () => {
  useEffect(() => {
    const test = () => {
      var tabsNewAnim = $('#navbarSupportedContent');
      var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top": itemPosNewAnimTop.top + "px",
          "left": itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
    }

    setTimeout(() => { test(); }, 0);
    $(window).on('resize', function () {
      setTimeout(() => { test(); }, 500);
    });
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => { test(); });
    });

    let path = window.location.pathname.split("/").pop();
    if (path === '') {
      path = 'index.html';
    }
    let target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass('active');
  }, []);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
          <li className="nav-item">
            <Link className="nav-link" to="/"><i className="fas fa-tachometer-alt"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Guidelines"><i className="far fa-chart-bar">Guidelines</i></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/TeamForm"><i className="far fa-address-book">TeamForm</i></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documents"><i className="far fa-copy"></i>Documents</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications"><i className="far fa-copy"></i>Notifications</Link>
          </li>
        </ul>
        {/* Add the logo here */}
        <div className="navbar-logo">
        {/* <img src={`${process.env.PUBLIC_URL}./public/images/logo.png`} /> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
