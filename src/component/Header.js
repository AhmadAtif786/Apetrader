import React from "react";
import logo from "./image/logo.png";
import $ from "jquery";
const Header = () => {

  React.useEffect(() => {
    $('.open_close_nav').click(function(){

      $('.responsive_nav_bar').toggleClass('responsive_bar');
      });
      

},[])

  return (
    <>
       <header>
        <div class="custom_container">
            <div class="header_bar">
                <div class="logo">
                <a href="index.html"><img src={logo} /></a>
                </div>
                <button class="nav_btn open_close_nav" type="button">
                      <i class="fas fa-bars"></i>
                  </button>
                <div class="nav_bar">
                    <ul>
                        <li><a href="#buy_an_app">BUY AN APE</a></li>
                        <li><a href="#road_map_activation">ROADMAP</a></li>
                        <li><a href="#the_team">TEAM</a></li>
                        <li><a >GALLERY</a></li>
                        <li><a >PROVENANCE</a></li>
                        <li><a>MEMBERS</a></li>
                    </ul>
                    <div class="call_us">
                        <a ><i class="fab fa-youtube"></i></a>
                        <a ><i class="fab fa-instagram"></i></a>
                        <a ><i class="fab fa-discord"></i></a>
                        <a ><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    </header> 

<section class="responsive_nav_bar">
    <div class="cancle_nav"><a class="open_close_nav"><i class="fas fa-times"></i></a></div>
    <div class="responsive_nav">
        <ul>
            <li><a href="#buy_an_app">BUY AN APE</a></li>
                        <li><a href="#road_map_activation">ROADMAP</a></li>
                        <li><a href="#the_team">TEAM</a></li>
                        <li><a>GALLERY</a></li>
                        <li><a >PROVENANCE</a></li>
                        <li><a>MEMBERS</a></li>
        </ul>
    </div>
    <div class="responsive_call_us">
        <a><i class="fab fa-youtube"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-discord"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
    </div>
</section>

    </>
  );
};

export default Header;
