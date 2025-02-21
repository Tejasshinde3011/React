import { useState} from "react"
import { Modal } from "@mui/material"; 
import axios from "axios";

function SignUp(props) {

    let {openSignUp}= props
    let [signupStatus, setSignupStatus] = useState("no");
    let [message, setMessage] = useState(" ");
   

    function handleFormSubmitSignupBtn(event) {
        event.preventDefault();  

        let formData = new FormData(event.target);   
        let user ={};   //empty object to store form data

        for (let data of formData){
        user[data[0]] = data[1];
        }
        user["role"] = "user"; 
        console.log(user); 
    
        checkUserExists(user);
    }

    async function checkUserExists(user) {
    
      // Fetching all users.
      let response = await axios("http://localhost:3000/users");
      let data = await response.data; // Getting data

      // Filter users based on the email provided by the user
      let filteredData = data.filter((e) => e.email == user.email);

      if (filteredData.length >= 1) {
        // If user with the same email exists, display a message
        console.log("Already exists");
        setSignupStatus("failed");
        setMessage("Sorry... This email-id is already registered.");
      } else {
        // If user does not exist, proceed to add the user
        console.log("New user");
        addUser(user);
      }
    }

     async function addUser(user) {
   
      // Send a POST request to add the new user to the backend
      let response = await axios.post("http://localhost:3000/users", user);
      setSignupStatus("success"); // Update signup status to success
      setMessage("User successfully registered!"); // Show success message
     } 
     

    function handleCloseSignUp ()  {
        props.onCloseSignUp();
    }
    function handleOpenLogIn() {
        props.onOpenLogIn();
    }

    return(
        <>
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
                        {signupStatus == "success" && (
                            <div className="text-center text-danger">
                                Signed Up Successfully.{" "} 
                                <a href="#" onClick={handleOpenLogIn}>Login</a>{" "}
                                to TechStore
                            </div>
                        )}
                        {signupStatus == "failed" && (
                            <div className="text-center text-danger">
                                This email-id is already registered.
                            </div>
                        )}
                        {(signupStatus == "no" || signupStatus == "failed") && (
                            <form onSubmit={handleFormSubmitSignupBtn} method="post" >
                        <div className="text-end "><button className="cancelBtn" onClick={handleCloseSignUp}><><i class="bi bi-x" style={{fontSize:'1.5em'}}></i></></button></div>
                        <div className="text-center mb-3 modalTitle pb-2">Sign Up</div>
                        <div className="row align-items-center m-2">
                            <div className="col-6 text-end">
                              <div className="" ><label>Name :  </label></div></div>
                            <div className="col-6 text-start">
                              <div className=""><input type="text"  name="name" style={{backgroundColor:"white" , color:"black"} }/></div></div>
                        </div>
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
                               <input type="submit" style={{color:"black" , marginRight:"8px" , border:"solid lightgrey 1px" , borderRadius:"5px"}} className="logobtn" /> </div>
                              <div className=" col-3"> <input type="reset" style={{color:"black" , marginLeft:"8px" , border:"solid lightgrey 1px" , borderRadius:"5px"}} className="logobtn" />
                              </div>
                        </div> 
                         <div className="row m-2 text-center mt-4">
                          <div style={{fontSize:'0.8em'}}>Already have an account? {" "}<a href="#" onClick={handleOpenLogIn}>Click here to Log In.</a></div>
                        </div>
                      </form>
                        )}
                      
                    </div>
             </Modal>
        </>
    )
}
export default SignUp;