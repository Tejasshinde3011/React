import { useState } from "react"
import { Modal } from "@mui/material"; 
import { useEffect } from "react";
function NavBar(props){
        let[openLogIn, setOpenLogIn] = useState(false);
        let[openSignUp, setOpenSignUp] = useState(false);
        let {updateCart} = props;
        let {totalprice} = props;
       useEffect(() => {
  console.log("Cart updated:", updateCart);
  console.log("Cart length:", updateCart.length);
}, [updateCart]); 
    function handleOpenLogIn() {
        setOpenSignUp(false)
        setOpenLogIn(true)}

    function handleCloseLogIn ()  {
        setOpenLogIn(false)}

    function handleOpenSignUp() {
        setOpenLogIn(false)
        setOpenSignUp(true)}

    function handleCloseSignUp ()  {
        setOpenSignUp(false)}

    function handleHomeButtonClick(view) {
      props.onHomeButtonClick(view);
    }    

    function handleCartItems() {
      props.onCartItems();
    }

    function handleCartItems() {
      props.onCartItems();
    }
    

    return(
        <>
        <div className="row bg-black px-1">
            <div className="col-3  text-start textsize">
                <i className="bi bi-envelope-fill" style={{color:"white"}}></i>{" "}
                : <a href="" style={{color:"white"}}>techstore@gmail.com</a> 
            </div>
            <div className="col-6  text-center textsize ">TECH STORE</div>
            <div className="col-3 text-end textsize">
                <i className="bi bi-telephone-fill" style={{color:"white"}}></i>{" "}
                : 65748-638-5355
            </div>
        </div>

        <div className="row text-end">
          div
        </div>




        <div className="row text-center navbar ">
            <div className="col-2 ">
                <button className="logobtn" onClick={()=>handleHomeButtonClick("product")}><img src="./Images/Products/Logo.jpg" alt="" /></button>
            </div>
            <div className="col-8 justify-content-center p-4 ">

{/* LOGIN MODAL FORM */}

                <button className="button " onClick={handleOpenLogIn}>Log In</button>
               <Modal
                     onClose={(event, reason) => {
                     if (reason !== "backdropClick") {
                       handleCloseLogIn();
                     }
                     }}
                     open={openLogIn}
                     style={{
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                     }}
                >
                    <div
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px",
                        padding: "20px",
                        width: "500px",
                        textAlign: "center",
                      }}
                     >
                      <form >
                        <div className="text-end "><button className="cancelBtn" onClick={handleCloseLogIn}><><i class="bi bi-x" style={{fontSize:'1.5em'}}></i></></button></div>
                        <div className="text-center mb-3 modalTitle pb-2">Log In</div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Email Id :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="email" style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Password :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="password"  style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center m-1">
                            <div>
                                <button className="button" ><input type="submit" style={{color:"black"}} /></button>
                                <button className="button" ><input type="reset" style={{color:"black"}}/></button>
                            </div>
                        </div> 
                        <div className="row m-2 text-center mt-4">
                          <div style={{fontSize:'0.8em'}}>Don't have an account? {" "}<a href="#" onClick={handleOpenSignUp}>Sign Up.</a></div>
                        </div>
                      </form>
                    </div>
             </Modal>

{/* SIGN IN MODAL FORM */}

                <button className="button" onClick={handleOpenSignUp}>Sign Up</button>

                 <Modal
                    onClose={(event, reason) => {
                     if (reason !== "backdropClick") {
                       handleCloseSignUp();
                     }
                     }}
                     open={openSignUp}
                     style={{
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                     }}
                >
                    <div
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px",
                        padding: "20px",
                        width: "500px",
                        textAlign: "center",
                      }}
                     >
                      <form >
                        <div className="text-end "><button className="cancelBtn" onClick={handleCloseSignUp}><><i class="bi bi-x" style={{fontSize:'1.5em'}}></i></></button></div>
                        <div className="text-center mb-3 modalTitle pb-2">Sign Up</div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Firstname :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="text"  style={{backgroundColor:"white" , color:"black"} }/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Lastname :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="text"  style={{backgroundColor:"white" , color:"black"} }/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Username :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="text"  style={{backgroundColor:"white" , color:"black"} }/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Email Id :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="email"  style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Password :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="password"  style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center m-1">
                            <div>
                                <button className="button" ><input type="submit" style={{color:"black"}} /></button>
                                <button className="button" ><input type="reset" style={{color:"black"}}/></button>
                              </div>

                        </div> 
                         <div className="row m-2 text-center mt-4">
                          <div style={{fontSize:'0.8em'}}>Already have an account? {" "}<a href="#" onClick={handleOpenLogIn}>Click here to Log In.</a></div>
                        </div>
                      </form>
                    </div>
             </Modal>
      

            </div>
            <div className="col-2 justify-content-end ">
               <div className="row">
                <div className="col-4 ">
                  <button className="logobtn" >
                  <h3><i class="bi bi-heart-fill" style={{color:"red"}}></i></h3>
                  </button>
                </div>
                <div className="col-4 text-end ">
                 <button className="logobtn" onClick={handleCartItems}>
                  <h3><i class="bi bi-bag" style={{color:"black"}}></i></h3>
                  </button></div>
                  <div className="col-4 ">{updateCart.length}</div>
                  
                </div>
                <div>
                    <p>Total: ₹ {totalprice}</p>
                </div>
            </div>

        </div>
        </>
    )
}
export default NavBar