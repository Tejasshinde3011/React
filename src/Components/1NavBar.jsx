import { useState } from "react"
import { Modal } from "@mui/material"; 
import { useEffect } from "react";
function NavBar(props){
       
        let {totalprice} = props;
        let {cnt} = props;
        let {user, loginStatus} = props;
        console.log(user);
        console.log(loginStatus);
        
        

     function handleOpenLogIn() {
      props.onOpenLogIn();
    }

    function handleOpenSignUp() {
      props.onOpenSignUp();
    }

    function handleHomeButtonClick(view) {
      props.onHomeButtonClick(view);
    }    

    function handleCartButton() {
    console.log("Cart button clicked"); 
    props.onCartButton();
    }

    function handleLogoutBtn() {
      props.onLogoutBtn();
    }

    return(
        <>
        <div className="container-fluid">
        <div className="row bg-black px-1">
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


        <div className="row text-end mx-1">
            {loginStatus == "success" && (
                <div>
                  <span style={{fontSize:"0.7em"}}>Welcome{" "}</span>
                  <a href="#" style={{color:"black", fontWeight:"600"}}>{user.name.toUpperCase()}</a>{" "}
                  <span style={{fontSize:"1.3em"}}><i className="bi bi-person-fill"></i>{" "}</span>
                </div>
            )}   
        </div>

{/* NAVBAR BEGIN */}

        <div className="row text-center navbar ">

{/* HOME BUTTON */}

            <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
                <button className="logobtn" onClick={()=>handleHomeButtonClick("product")}><img src="./Images/Products/Logo.jpg" alt="" /></button>
            </div>

          <div className="col-12 col-sm-10 col-md-8 col-lg-8 justify-content-center p-4 ">

            {user ? (
              <button className="button" onClick={handleLogoutBtn}>Logout</button>):(
              <>
              <button className="button" onClick={handleOpenLogIn}>Log In</button> 
              <button className="button" onClick={handleOpenSignUp}>Sign Up</button>
              </>
               )
            }     
            
            </div>

{/* CART BUTTON */}
            
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 justify-content-end ">
               <div className="row">
                <div className=" col-md-6 col-lg-4 ">
                  <button className="logobtn" >
                  <h3><i className="bi bi-heart-fill" style={{color:"red"}}></i></h3>
                  </button>
                </div>
                {user ? (<div className=" text-end col-md-4 col-lg-4 ">
                 <button className="logobtn" onClick={handleCartButton}>
                 <h3><i className="bi bi-bag" style={{ color: "black" }}></i></h3>
                 </button>
                </div>)
                :
                (
                
                  <div className=" text-end col-md-4 col-lg-4 ">
                 <button className="logobtn" onClick={handleOpenLogIn}>
                 <h3><i className="bi bi-bag" style={{ color: "black" }}></i></h3>
                 </button>
                </div>
                
                ) }
                <div className=" col-md-2  col-lg-4 ">{cnt}</div>
                  
                </div>
               <div>
              <p>Grand Total: ₹ {totalprice.toFixed(2)}</p>
               </div>
            </div>
            

        </div>  
        </div>
{/* NAVBAR END */}
        </>
    )
}
export default NavBar