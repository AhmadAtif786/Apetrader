import React from "react";
import "./css/dashboard.css";
import Header from "./Header";
import Footer from "./Footer";
import banner from "./image/banner.jpg";
import fig_one from "./image/fig_one.png";
import fig_two from "./image/fig_two.png";
import fig_three from "./image/fig_three.png";
import fig_four from "./image/fig_four.png";

import mystery_ape from "./image/mystery-ape.webp";
import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";
import icon4 from "./image/icon4.png";
import icon5 from "./image/icon5.png";
import toilet from "./image/toilet.png";
import shirt from "./image/shirt.png";
import one from "./image/one.png";
import two from "./image/two.png";
import three from "./image/three.png";
import four from "./image/four.png";

const Home = () => {

  return (
    <>
   
       <Header />
       <section class="banner">
    <div class="custom_container">
   <div class="banner_figure"><img src={banner} /></div>
   </div>
</section>

<section class="home_section_one">
    <div class="custom_container">
     <div class="home_section_one_box">
         <div class="home_section_one_box_one">
             <h1>WELCOME TO THE
                BORED APE YACHT CLUB</h1>
             <p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain.
                  Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM,
                   a collaborative graffiti board. 
                 Future areas and perks can be unlocked by the community through roadmap activation.</p>
         </div>
         <div class="home_section_one_box_two">
             <figure><img src={fig_one} /></figure>
             <figure><img src={fig_two} /></figure>
             <figure><img src={fig_three} /></figure>
             <figure><img src={fig_four} /></figure>
         </div>
     </div>

    </div>
</section>

<section class="home_section_two">
    <div class="custom_container">
        <div class="home_section_two_header">
            <h1>FAIR DISTRIBUTION</h1>
            <small>(BONDING CURVES ARE A PONZI)</small>
        </div>
     <div class="home_section_two_box">
         <div class="home_section_two_box_one">
             <p>There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
         </div>
         <div class="home_section_two_box_two">
             <p>Note: Thirty apes are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.</p>
         </div>
     </div>

    </div>
</section>

<section class="home_section_three">
    <div class="custom_container">
        <div class="home_section_three_box">
           <h3>BUY AN APE</h3>
           <p>The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
           <div class="home_section_three_box_btn"><a>BUY AN APE ON <p>OPENSEA</p></a></div>
        </div>
    </div>
</section>


<section class="home_section_four" id="buy_an_app">
    <div class="custom_container">
     <div class="home_section_four_box">
         <div class="home_section_four_box_one">
             <h1>THE SPECS</h1>
             <p>Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.
            </p>
            <p>The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) Purchasing an ape costs 0.08 ETH.</p>
            <p>To access members-only areas such as THE BATHROOM, Apeholders will need to be signed into their Metamask Wallet.</p>
         </div>
         <div class="home_section_four_box_two">
             <figure><img src={mystery_ape} /></figure>
         </div>
     </div>

    </div>
</section>


<section class="home_section_five">
    <div class="custom_container">
     <div class="home_section_five_box">
         <div class="home_section_five_box_one">
             <h1>WELCOME TO THE CLUB</h1>
             <p>When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you.
            </p>
         </div>
         <div class="home_section_five_box_two">
             <figure>
                 <div class="home_section_five_box_two_img"><img src={icon1} /></div>
                 <p>10,000 Provably-rare Bored Ape tokens</p>
                </figure>
             <figure>   <div class="home_section_five_box_two_img"><img src={icon2} /></div>
                <p>Fair Launch, fair distribution: All apes cost 0.08 ETH</p></figure>
             <figure>   <div class="home_section_five_box_two_img"><img src={icon3} /></div>
                <p>Ownership and commercial usage rights given to the consumer over their NFT</p></figure>
             <figure>   <div class="home_section_five_box_two_img"><img src={icon4} /></div>
                <p>The Bathroom: A member's-only graffiti board</p></figure>
                <figure>   <div class="home_section_five_box_two_img"><img src={icon5} /></div>
                    <p>Gain additional benefits through roadmap activations</p></figure>
         </div>
     </div>

    </div>
</section>

<section class="home_section_six">
    <div class="custom_container">
     <div class="home_section_six_box">
         <div class="home_section_six_box_one">
             <h1>THE BATHROOM</h1>
             <p>The BAYC Bathroom will become operational once the presale period is over. It contains a canvas accessible only to wallets containing at least one ape. Like any good dive bar bathroom, this is the place to draw, scrawl, or write expletives.
            </p>
            <p>Each ape-holder will be able to paint a pixel on the bathroom wall every fifteen minutes. Think of it as a collaborative art experiment for the cryptosphere. A members-only canvas for the discerning minds of crypto twitter.</p>
            <p>We're pretty sure it's going to be full of dicks.</p>
         </div>
         <div class="home_section_six_box_two">
             <figure><img src={toilet} /></figure>
         </div>
     </div>

    </div>
</section>

<section class="home_section_seven" id="road_map_activation">
    <div class="custom_container">
        <div class="home_section_seven_header">
            <h1>ROADMAP ACTIVATIONS</h1>
            <p>We’re in this for the long haul.</p>
            <p>We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal.</p>
        </div>
     <div class="home_section_seven_box">
         <div class="home_section_seven_box_one">
             <div class="home_section_seven_box_one_data">
              <span>10%</span>   
             <p>We pay back our moms.</p>
             </div>
             <div class="home_section_seven_box_one_data">
                <span>20%</span>   
               <p>We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders.</p>
               </div>
               <div class="home_section_seven_box_one_data">
                <span>40%</span>   
               <p>BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To.</p>
               </div>
               <div class="home_section_seven_box_one_data">
                <span>60%</span>   
               <p>Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.</p>
               </div>
               <div class="home_section_seven_box_one_data">
                <span>80%</span>   
               <p>The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape.</p>
               </div>
               <div class="home_section_seven_box_one_data">
                <span>90%</span>   
               <p>The Bored Ape liquidity pool is initiated.</p>
               </div>
               <div class="home_section_seven_box_one_data">
                <span>100%</span>   
               <p>The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends.</p>
               </div>
            </div>
         <div class="home_section_seven_box_two">
            <figure><img src={shirt} /></figure>
         </div>
     </div>

    </div>
</section>


<section class="home_section_eight">
    <div class="custom_container">
     <div class="home_section_eight_box">
         <div class="home_section_eight_box_one">
             <h1>COMMUNITY TOOLS</h1>
             <p>Here are some helpful tools created by the Bored Ape Yacht Club community. Please note that these are unofficial in nature. Every assignment of an ape's overall value or rarity is inherently subjective.
            </p>
         </div>
         <div class="home_section_eight_box_two">
             <div class="home_section_eight_box_two_btn"><a>NFTEXP.IO</a></div>
             <div class="home_section_eight_box_two_btn"><a>RARITY.TOOLS</a></div>
         </div>
     </div>

    </div>
</section>


<section class="home_section_nine" id="he_team">
    <div class="custom_container">
     <div class="home_section_nine_box">
         <div class="home_section_nine_box_one">
             <h1>THE TEAM</h1>
             <p>BAYC was created by four friends who set out to make some dope apes, test our skills, and try to build something (ridiculous).</p>
             <p><span>GARGAMEL.</span> STARCRAFT OBSESSED. EATS SMURFS.</p>
             <p><span>GORDON GONER.</span> REFORMED LEVERAGE ADDICT.</p>
             <p><span>EMPEROR TOMATO KETCHUP.</span> SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.</p>
             <p><span>NO SASS.</span> HERE FOR THE APES. NOT FOR THE SASS.</p>
         </div>
         <div class="home_section_nine_box_two">
             <figure><img src={one} /></figure>
             <figure><img src={two} /></figure>
             <figure><img src={three} /></figure>
             <figure><img src={four} /></figure>
         </div>
     </div>
      <div class="home_section_nine_box_link"><p>VERIFIED SMART CONTRACT ADDRESS:</p><a> 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a></div>
    </div>
</section>
     <Footer />

    </>
  );
};

export default Home;
