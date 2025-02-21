import { useState} from "react"
import { Modal } from "@mui/material"; 
import axios from "axios";

function LogIn(props) {
  
   
    let {openLogIn, successMessage, loginStatus}= props;     //setUser useState defined in block component
//     let [loginStatus, setLoginStatus] = useState("no");
//     let [successMessage, setSuccessMessage] = useState(false);

// function handleFormSubmitLoginBtn(event) {
//     event.preventDefault();
//     let formData = new FormData(event.target);
//     let user = {};
//     for (let data of formData) {
//        user[data[0]] = data[1];
//     }
//     setUser(user);   //giving user to block component for logout and displaying user
//     checkUser(user);
        
//     async function checkUser(props) {
//            let response = await axios("http://localhost:3000/users");
//            let data = await response.data; 

//            let filteredData = data.filter((e) => 
//                            e.email == user.email && e.password == user.password);

//       if (filteredData.length >= 1) {
//         setLoginStatus("success");
//         setUser(filteredData[0]);
//         setSuccessMessage(true);

//         setTimeout(()=>{
//             setSuccessMessage(false);
//             handleCloseLogIn();
//         }, 1000);

        
//       } else {
//        setLoginStatus("failed");
//       }
//     }
// }

function handleCloseLogIn ()  {
    props.onCloseLogIn();
}
function handleOpenSignUp() {
    props.onOpenSignUp();
}
function handleFormSubmitLoginBtn(event) {
     event.preventDefault();
    props.onFormSubmitLoginBtn(event);
}


    return(
        <>
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
                         {loginStatus == "success" && successMessage && (
                            <div className="text-center ">
                                Logged In Successfully.{" "}
                            </div>
                        )}
                        {loginStatus == "failed" && (
                            <div className="text-center text-danger">
                               Sorry Wrong Credentials
                            </div>
                        )}
                        {(loginStatus == "no" || loginStatus == "failed") && (
                      <form onSubmit={handleFormSubmitLoginBtn} >
                        <div className="text-end "><button className="cancelBtn" onClick={handleCloseLogIn}><><i class="bi bi-x" style={{fontSize:'1.5em'}}></i></></button></div>
                        <div className="text-center mb-3 modalTitle pb-2">Log In</div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Email Id :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="email" name="email" style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Password :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="password" name="password" style={{backgroundColor:"white" , color:"black"}}/></div></div>
                        </div>
                        <div className="row align-items-center mt-3">
                            <div className="offset-3 col-3 ">
                               <input type="submit" style={{color:"black" , marginRight:"8px" , border:"solid lightgrey 1px" , borderRadius:"5px"}} className="logobtn" /> 
                            </div>
                            <div className=" col-3"> 
                                <input type="reset" style={{color:"black" , marginLeft:"8px" , border:"solid lightgrey 1px" , borderRadius:"5px"}} className="logobtn" />
                            </div>
                        </div> 
                        <div className="row m-2 text-center mt-4">
                          <div style={{fontSize:'0.8em'}}>Don't have an account? {" "}<a href="#" onClick={handleOpenSignUp}>Sign Up.</a></div>
                        </div>
                      </form>
                        )}
                    </div>
               </Modal>

        </>
    )
}
export default LogIn;