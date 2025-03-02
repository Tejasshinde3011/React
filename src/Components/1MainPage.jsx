import { useState } from "react";
import Block from "./1Block";

function Main(params) {
    let [view, setView] = useState("main");
    function handleMainPage() {
        setView("block");
    }
    if (view === "block") {
        return <Block />;
    }
    
 return(
    <>
    <div className="container-fluid p-2">
        <div className="row bg-black px-1 ">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3  text-start textsize ">
                <i className="bi bi-envelope-fill" style={{color:"white"}}></i>{" "}
                : <a href="" style={{color:"white"}}>techstore@gmail.com</a> 
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 text-center textsize">TECH STORE</div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-3 text-end textsize">
                <i className="bi bi-telephone-fill" style={{color:"white"}}></i>{" "}
                : 65748-638-5355
            </div>
        </div>
        <div style={{ lineHeight: "1.1", margin:"10px", paddingTop:"40px" }}>
            <span style={{fontSize:"2em", fontWeight:"300"}}>Smart Shopping  For Smarter Living</span><br />
            <span style={{fontSize:"3em", fontWeight:"800"}}>Only At</span><br />
               <span className="titleName" style={{fontSize:"5.5em", fontWeight:"800", color:"white", 
                            WebkitTextStroke: "2px black", textShadow:"4px 2px 4px rgba(0, 0, 0, 0.5)",
                            lineHeight:"1.5", fontFamily:"sans-serif", letterSpacing:"7px"}} >
                                T E C H S T O R E
                </span>
        </div>
        <div className="techstore-container ">
            <div className="row justify-content-center ">
                {/* First Box */}
                <div className="col-md-3 m-3 box">
                  <h3 style={{fontWeight:"700"}}>🚀 Explore the Best Tech</h3>
                  <p>
                    Stay ahead with the latest smartphones, smartwatches, laptops, and
                    accessories—all in one place. Discover top brands and exclusive
                    deals that make upgrading your gadgets effortless.
                  </p>
                </div>
    
                {/* Second Box */}
                <div className="col-md-3 m-3 box">
                  <h3 style={{fontWeight:"700"}}>🛒 Seamless Shopping Experience</h3>
                  <p>
                    Built with modern technology, <strong>TechStore</strong> offers a
                    fast, secure, and hassle-free shopping journey. Enjoy smooth
                    navigation, quick checkouts, and real-time updates on the hottest
                    tech trends.
                  </p>
                </div>
    
                {/* Third Box */}
                <div className="col-md-3 m-3 box">
                  <h3 style={{fontWeight:"700"}}>🎁 Best Deals, Just for You</h3>
                  <p>
                    Get unbeatable prices, special discounts, and exciting offers on
                    your favorite tech products. At <strong>TechStore</strong>,
                    innovation meets affordability—because great technology should be
                    within everyone's reach!
                  </p>
                </div>
            </div>
        </div>
        <div className="btncont m-3 text-center">
            <div className="px-5">
                <p>
                    At <strong>TechStore</strong>, we deliver 100% original, brand-certified gadgets straight from manufacturers, ensuring top quality and performance. 
                    Every product undergoes rigorous checks and comes with official warranties, so you can shop with confidence. <strong> No Fakes, No Compromises—just
                     Premium Tech</strong>, the way it’s meant to be!
                </p>
            </div>
            <div>
                <button className="button" style={{color:"white", backgroundColor:"black", fontSize:"1.3em"}} onClick={handleMainPage}>Start Shopping</button>
            </div>
        </div>
        <div className="banner my-3">
                <img src="/Images/Products/Graffiti.jpg" alt="" className="banner-img" />
                <span className="banner-txt">TEchIEs TrEAt</span>
        </div>
        <div className="row text-center m-3 my-5">
            <span style={{ fontWeight: '800', fontSize: '2em', marginBottom:"30px"}}>
                <u>Products Available</u>
                </span>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-phone "></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Mobiles</p>
                </div>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-laptop"></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Laptops</p>
                </div>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-speaker"></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Speakers</p>
                </div>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-smartwatch"></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Watches</p>
                </div>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-camera2"></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Cameras</p>
                </div>
                <div className="col-2 iconDisplay">
                    <h1><i class="bi bi-headphones"></i></h1>
                    <p style={{fontSize:"1.3em", fontWeight:"600"}}>Headphones</p>
                </div>
        </div>
        <div className="about m-4 text-center">
            <div className="p-3">
                <span style={{ fontWeight: '800', fontSize: '2em', borderBottom:"solid grey 3px" }}>
                    About Us
                </span>
                <p className="py-3">
                    At TechStore, we bring you the latest, 100% authentic, brand-certified gadgets straight from the source, 
                    ensuring top quality, official warranties, and no compromises. What started as a small tech hub has grown
                     into a trusted destination for smartphones, smartwatches, laptops, and accessories—all at unbeatable prices.
                      With a fast, secure, and user-friendly shopping experience, we make it easy to browse, buy, and upgrade your 
                      tech hassle-free. Enjoy exclusive discounts, real-time updates on the hottest trends, and top-tier customer support. 
                      At TechStore, innovation meets affordability—because great technology should be within everyone’s reach! 
                </p>
            </div>    
        </div>
        <div className="text-center m-3" style={{backgroundColor:"lightgrey", lineHeight:"1.1", borderRadius:"3px"}}>
            <div className="row m-3">
                <div className="offset-2 col-4 my-3 text-start" style={{borderRight:"solid grey 1px"}}>
                    <h6 style={{fontWeight:"800" }}>Company</h6><br />
                    <p>techstore001.netlify.app</p>
                    <p>Office Address : 23/A6 Tel Aviv Annexe, Baner, Pune 411041. </p>
                </div>
                <div className="offset-2 col-4 my-3 text-start">
                    <h6 style={{fontWeight:"800"}}>Contact Us</h6><br />
                    <p> <i className="bi bi-telephone-fill"></i>{" "}
                        : 65748-638-5355</p>
                    <p><i className="bi bi-envelope-fill"></i>{" "}
                        :   <a  href="https://accounts.google.com/v3/signin/identifier?ifkv=ASSHykrrYaAl8_Nc9btuyBXcNGfqqUK9YU9BnQa1sCRuiA788FMoUxZTwuqU-mE-J6b9eWA175Qbcg&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1160781350%3A1740566388460938&ddm=1" 
                                style={{color:"black"}}>techstore@gmail.com
                            </a>
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <div className="offset-4 col-4">
                    <button className="symbolBtn"><h3><i class="bi bi-whatsapp"></i></h3></button>
                    <button className="symbolBtn"><a href="https://www.instagram.com/accounts/login/" style={{color:"black"}}><h3><i class="bi bi-instagram"></i></h3></a></button>
                    <button className="symbolBtn"><a href="https://www.linkedin.com/login" style={{color:"black"}}><h3><i class="bi bi-linkedin"></i></h3></a></button>
                    <button className="symbolBtn"><a href="https://x.com/i/flow/login" style={{color:"black"}}><h3><i class="bi bi-twitter-x"></i></h3></a></button>
                </div>
                
            </div>
        </div>
        <div>
            <p style={{fontSize:"0.8em"}}>© 2025 techstore001.netlify.app. All Rights Reserved.</p>
        </div>
    </div>
    </>
 )   
}
export default Main; 