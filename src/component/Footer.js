import React from "react";
import bayc_footer from "./image/bayc-footer.png";
const Footer = () => {
  return (
    <>
 <footer>
<div class="custom_container">
   <div class="footer_section">
       <div class="footer_section_one">
           <h6>GET ON THE LIST</h6>
           <form>
             <div class="footer_form_field">
                 <input type="text" placeholder="Email address" />
                  <button>→</button>
             </div>
       </form>
    </div>
       <div class="footer_section_two"><figure><img src={bayc_footer} /></figure></div>
       <div class="footer_section_three">
          
           <div class="footer_section_three_social_links">
            <a ><i class="fab fa-youtube"></i></a>
            <a ><i class="fab fa-instagram"></i></a>
            <a ><i class="fab fa-discord"></i></a>
            <a ><i class="fab fa-twitter"></i></a>
        </div>
            <p>© 2021 Yuga Labs LLC</p>
            <a>BAYC Terms & Conditions</a>
            <a>MAYC Terms & Conditions</a> 
       </div>
   </div>
</div>

</footer>
<div class="footer_two"></div>
    </>
    
    );
  };
  
  export default Footer;