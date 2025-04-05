import { use, useEffect, useState } from "react";
import NavBar from "./1NavBar";
import ProductPage from "./1ProductPage";
import Cart from "./1AddCart";
import SignUp from "./1SignUp";
import LogIn from "./1LogIn";
import BillLink from "./1BillLink";
import axios from "axios";
import AdminProductPage from "./1AdminProductPage";
import {getUsersFromBackend, getSingleUsersFromBackend, updateBackendUsers, deleteBackendUsers} from "./fireBaseUserService";
import {getProductsFromBackend, getSingleProductsFromBackend, addProductsToBackend, updateBackendProducts, deleteBackendProducts} from "./fireBaseProductsService";
import {getBillsFromBackend, getSingleBillsFromBackend, addBillsToBackend, updateBackendBills, deleteBackendBills} from "./firebaseBillsService";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import Bill from "./1Bill";
import { BeatLoader, PacmanLoader, RingLoader } from "react-spinners";

function Block(){
  let[view, setView] = useState("product");
  let[cnt, setCnt] = useState(0);
  let[totalprice, setTotalprice] = useState(0);
  let ttlprice=0;
  let pList = [
    {
      id: "1",
      name: "Samsung S24",
      image: "Samsung S24.jpg",
      mrp: 52999,
      discount: 10,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "2",
      name: "Samsung S24 Ultra",
      image: "Samsung S24 Ultra.jpg",
      mrp: 149999,
      discount: 18,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "3",
      name: "Sony ULT 3300JX",
      image: "Sony ULT 3300JX.jpg",
      mrp: 26999,
      discount: 0,
      inStock: false,
      qty: 0,
      type: "Headphone",
    },
    {
      id: "4",
      name: "Apple Iphone 16 Pro",
      image: "Apple Iphone 16 Pro.jpg",
      mrp: 119999,
      discount: 7,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "5",
      name: "Lenovo LOQ H72698",
      image: "Lenovo LOQ H72698.jpg",
      mrp: 85000,
      discount: 0,
      inStock: true,
      qty: 0,
      type: "Laptop",
    },
    {
      id: "6",
      name: "HP Pavilion 360 U364873",
      image: "HP Pavilion 360 U364873.jpg",
      mrp: 125000,
      discount: 20,
      inStock: true,
      qty: 0,
      type: "Laptop",
    },
    {
      id: "7",
      name: "Samsung S23 Plus",
      image: "Samsung S23 Plus.jpg",
      mrp: 40000,
      discount: 15,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "8",
      name: "OnePlus 10T 256GB",
      image: "OnePlus 10T 256GB.jpg",
      mrp: 30000,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "9",
      name: "JBL Go 3 Wireless Speaker",
      image: "JBL Go 3 Wireless Speaker.jpg",
      mrp: 2500,
      discount: 5,
      inStock: false,
      qty: 0,
      type: "Speaker",
    },
    {
      id: "10",
      name: "Marshall Monitor 3",
      image: "Marshall Monitor 3.jpg",
      mrp: 29000,
      discount: 0,
      inStock: false,
      qty: 0,
      type: "Headphone",
    },
    {
      id: "11",
      name: "Sony MDR-432 Wired",
      image: "Sony MDR-432 Wired.jpg",
      mrp: 999,
      discount: 10,
      inStock: true,
      qty: 0,
      type: "Headphone",
    },
    {
      id: "12",
      name: "Apple Macbook M3",
      image: "Apple Macbook M3.jpg",
      mrp: 127999,
      discount: 7,
      inStock: true,
      qty: 0,
      type: "Laptop",
    },
    {
      id: "13",
      name: "Asus Vivobook 15 Oled",
      image: "Asus Vivobook 15 Oled.jpg",
      mrp: 158999,
      discount: 50,
      inStock: true,
      qty: 0,
      type: "Laptop",
    },
    {
      id: "14",
      name: "Bose Soundlink Flex",
      image: "Bose Soundlink Flex.jpg",
      mrp: 14999,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Speaker",
    },
    {
      id: "15",
      name: "Samsung S23 Ultra",
      image: "Samsung S23 Ultra.jpg",
      mrp: 79999,
      discount: 10,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "16",
      name: "Apple Iphone 15 Pro Max",
      image: "Apple Iphone 15 Pro Max.jpg",
      mrp: 99999,
      discount: 50,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
    {
      id: "17",
      name: "Harman Kardon Onyx",
      image: "Harman Kardon Onyx.jpg",
      mrp: 37799,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Speaker",
    },
    {
      id: "18",
      name: "Boat Rockerz 450X",
      image: "Boat Rockerz 450X.jpg",
      mrp: 1599,
      discount: 10,
      inStock: false,
      qty: 0,
      type: "Headphone",
    },
    {
      id: "19",
      name: "Samsung M51 5G",
      image: "Samsung M51 5G.jpg",
      mrp: 26889,
      discount: 0,
      inStock: true,
      qty: 0,
      type: "Mobile",
    },
  ];
  let[cartItems, setCartItems] = useState([]);
  let[productList,setproductList] = useState(pList);
  let[openLogIn, setOpenLogIn] = useState(false);
  let[openSignUp, setOpenSignUp] = useState(false);
  let[user, setUser] = useState("");
  let [loginStatus, setLoginStatus] = useState("no");
  let [successMessage, setSuccessMessage] = useState(false);
  let [flagLoader, setFlagLoader] = useState(false);

 
//FIREBASE
  
const provider = new GoogleAuthProvider();
const auth = getAuth();



  useEffect(() => {
    getdataFromServer();
  let storedUser = localStorage.getItem("user");
  let storedCart = localStorage.getItem("cartItems");
  let storedTotalPrice = localStorage.getItem("totalprice");
  let storedLoginStatus = localStorage.getItem("loginStatus");
// console.log(storedCart);
// console.log(storedCart.length);


  if (storedUser) {
    console.log(storedUser);
    setUser(JSON.parse(storedUser));
    setLoginStatus(storedLoginStatus || "no");
  }

  if (storedCart) {
    setCartItems(JSON.parse(storedCart));
    setCnt(JSON.parse(storedCart).length);  
  }

  if (storedTotalPrice) {
    setTotalprice(parseFloat(storedTotalPrice)); 
  }

}, []);

  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalprice", totalprice.toString());
  localStorage.setItem("cnt", cnt.toString());
}, [cartItems, totalprice, cnt]); 

useEffect
  
function handleHomeButtonClick(view) {
    console.log(view);
    setView(view);
  }

function handleButtonAddToCart(product) {
  console.log("button clicked");
  
    let temp = [...productList];    
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] };
    console.log(index);
    
    
    if (newProduct.qty == 0) {
      
      newProduct.qty++;
      setCnt(cnt + 1);
      temp[index] = newProduct;  //update list 
      setproductList(temp);
      
     let updatedCart;
    
    if (cartItems && cartItems.length > 0) {
      updatedCart = [...cartItems]; // If cart has items, copy them
    }
    else {
      updatedCart = [];} // If cart is empty, initialize as empty array
    updatedCart.push(newProduct); // Add new product to cart

    setCartItems(updatedCart); // Update cart state
    setTotalprice(totalprice + (newProduct.mrp * (1 - newProduct.discount / 100)));


      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      localStorage.setItem("totalprice", (totalprice + (newProduct.mrp * 
                              (1 - newProduct.discount / 100))).toString());
      localStorage.setItem("cnt", (cnt + 1).toString());

    console.log(updatedCart); 
    }
  }


function handleIncreaseCnt(product) { 
    let temp = [...productList];    
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] }; 
    newProduct.qty++;
    temp[index] = newProduct;  
    setproductList([...temp]);
    
   let updatedCart = cartItems.map(item => 
    item.id == product.id ? { ...item, qty: item.qty + 1 } : item);
    setCartItems(updatedCart);

    // Updating total price
    setTotalprice(totalprice + (product.mrp * (1 - product.discount / 100)));
    // updateLocalStorage();
    console.log(updatedCart);
  }


 function handleDecreaseCnt(product) { 
    let temp = [...productList];    
    let index = temp.findIndex((item) => item.id == product.id);

    if (index !== -1) {
        let newProduct = { ...temp[index] }; 
        newProduct.qty--;

        if (newProduct.qty == 0) {
            setCnt(cnt - 1);  // Reduce cart count
            let updatedCart = cartItems.filter(item => item.id !== product.id); // Remove item from cart
            setCartItems(updatedCart);

            // ✅ Reset qty in `productList`
            newProduct.qty = 0;
            temp[index] = newProduct;
            setproductList([...temp]);    // updates the productlist 

            if (updatedCart.length == 0) {
                setTotalprice(0);
            } else {
                setTotalprice(totalprice - (product.mrp * (1 - product.discount / 100)));
            }
        } else {    //this is to decrease qty of product
            temp[index] = newProduct;
            setproductList([...temp]);

  //           Why spread ([...])?
	// •	React detects state changes only when a new reference is assigned.
	// •	setproductList(temp); would not work properly since temp is a mutated array.
	// •	setproductList([...temp]); creates a new array reference, triggering a re-render.

            let updatedCart = cartItems.map(item => 
                item.id == product.id ? { ...item, qty: item.qty - 1 } : item
            );
            setCartItems(updatedCart);
            setTotalprice(totalprice - (product.mrp * (1 - product.discount / 100)));
        }

        updateLocalStorage();
        console.log("Updated Cart:", cartItems);
        console.log("Updated Product List:", productList);
    }
}

function handleRemoveBtn(product) {
    let updatedCart = cartItems.filter(item => item.id !== product.id);

    let temp = [...productList];
    let index = temp.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        temp[index].qty = 0; // ✅ Reset qty in `productList`
        setproductList([...temp]);
    }

    setTotalprice(totalprice - (product.mrp * (1 - product.discount / 100)) * product.qty);
    setCartItems(updatedCart);
    updateLocalStorage();
}

function handleCartButton() { setView("CartList");}

//MODAL FORM OPEN CLOSE

function handleOpenSignUp() {
  setOpenLogIn(false)
  setOpenSignUp(true);
}
function handleCloseSignUp() {
  setOpenSignUp(false)
}

function handleOpenLogIn() {
  setOpenSignUp(false)
  setOpenLogIn(true)
  console.log("Opening login modal");
}
function handleCloseLogIn ()  {
  setOpenLogIn(false)
}

function handleLogoutBtn() {
  auth.signOut();
  setUser(null);   
  setLoginStatus("no");
  setView("product") ;
  setCartItems([]);
  setCnt(0);
  setTotalprice(0);

  localStorage.removeItem("user");
  localStorage.removeItem("loginStatus");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("totalprice");
  localStorage.removeItem("cnt");
}



function handleFormSubmitLoginBtn(event) {
   
    let formData = new FormData(event.target);
    let user = {};
    for (let data of formData) {
       user[data[0]] = data[1];
    }
     //giving user to block component for logout and displaying user
    checkUser(user);
        
    async function checkUser(user) {
          //  let response = await axios("http://localhost:3000/users");
          //  let data = await response.data; 
          let data = await getUsersFromBackend();

           let filteredData = data.filter((e) => 
                           e.email == user.email && e.password == user.password);

      if (filteredData.length >= 1) {
        setLoginStatus("success");
        setUser(filteredData[0]);
        let u = filteredData[0];

        localStorage.setItem("user", JSON.stringify(filteredData[0]));
        localStorage.setItem("loginStatus", "success");

        if (u.role == "admin") {
          setView("adminPage");
        }
        else if (u.role == "user") {
        }

        setSuccessMessage(true);

        setTimeout(()=>{
            setSuccessMessage(false);
            handleCloseLogIn();
        }, 1000);
      } else {
       setLoginStatus("failed");
      }
    }
}

//ADMIN DELETE PRODUCT

async function getdataFromServer() {
  setFlagLoader(true);
  // let response = await axios("http://localhost:3000/devices")
  // let pList = response.data;
  let pList = await getProductsFromBackend();
   setproductList(pList);
    let usr={};
   await onAuthStateChanged(auth, (user)=>{
    console.log(user);
   
    if (user) {
      usr.name = user.displayName;
      usr.emailid = user.email;
      if (usr.emailid = "tejasmshinde5@gmail.com") {
        usr.role = "admin";
      }
      else{
        usr.role = "user";
      }
    }
    else{
      usr=null;
    }
   })
  setUser(usr);
  setFlagLoader(false);
}
async function handleDeleteProduct(product) {
  let ans =window.confirm(
    "Do you want to delete the product - " + product.name + "?"
  );
  if (ans) {
    // let response = await axios.delete(
    // "http://localhost:3000/devices/" + product.id);
    await deleteBackendProducts(product.id);
  let pList = productList.filter(item => item.id !== product.id
  );
  setproductList(pList);
  // console.log("Product deleted:", response.data);
  }
}


async function handleProductEditFormSubmit(product) {
  // let response= await axios.put(
  //   "http://localhost:3000/devices/"+product.id,product);
  await updateBackendProducts(product);
    let pList = productList.map((e,index)=>{
      if (e.id==product.id) {
         return product;
      }
      else{return e};
    })
    setproductList(pList);
}

async function handleProductAddFormSubmit(product) {
  // let response = await axios.post("http://localhost:3000/devices", product);
  await addProductsToBackend(product);
  let pList = [...productList]
   pList.push(product)
  setproductList(pList)
}

function handleLoginUsingGoogleButtonClick() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);

    let usr = {};
    usr.name = user.displayName;
    usr.emailid = user.email;
    if (usr.emailid == "tejasmshinde5@gmail.com") {
      usr.role = "admin";
      setView("adminPage")
    }
    else{
      usr.role = "user";
      setView("product");
    }
    setUser(usr);
    setOpenLogIn(false);

  })
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

//PLACE ORDER

function handlePlaceorder() {
  setView("bill");
}

if (flagLoader) {
    return (
      <div className=" justify-content-center d-flex my-3">
        <RingLoader size={50} color={"green"} className="text-center" />
      </div>
    );
  }
return(
  <> 
    <NavBar onHomeButtonClick={handleHomeButtonClick} 
            updateCart={cartItems}  
            totalprice={totalprice}
            onCartButton={handleCartButton}
            cnt={cnt}

            onOpenSignUp={handleOpenSignUp}
            onOpenLogIn={handleOpenLogIn}
            user={user}
            loginStatus={loginStatus}
            onLogoutBtn={handleLogoutBtn}
    />

    {view == "product" && 
            <ProductPage  productList={productList}
                          onButtonAddToCart={handleButtonAddToCart}
                          onIncreaseCnt={handleIncreaseCnt}
                          onDecreaseCnt={handleDecreaseCnt}
                          view={view}
              />
    }

    {view === "CartList" && 
       <div className="row">
           <Cart 
               view={view} 
               cartItems={cartItems}  // Pass the whole array instead of a single item
               onButtonAddToCart={handleButtonAddToCart}
               onIncreaseCnt={handleIncreaseCnt}
               onDecreaseCnt={handleDecreaseCnt}
               onRemoveBtn={handleRemoveBtn}
               onPlaceorder={handlePlaceorder}
               totalprice={totalprice}
               productList={productList}
           />
       </div> 
    }

    <SignUp   openSignUp={openSignUp}
              onCloseSignUp={handleCloseSignUp}
              onOpenLogIn={handleOpenLogIn}
    />

    <LogIn  openLogIn={openLogIn}
            setLoginStatus={setLoginStatus}
            onCloseLogIn={handleCloseLogIn}
            onOpenSignUp={handleOpenSignUp}
            onLoginUsingGoogleButtonClick={handleLoginUsingGoogleButtonClick}
            onFormSubmitLoginBtn={handleFormSubmitLoginBtn}
            loginStatus={loginStatus}
            successMessage={successMessage}

    />
    
    {view == "adminPage" && <div className="row m-2 justify-content-center">
    <AdminProductPage   productList={productList}
                        onDeleteProduct={handleDeleteProduct}
                        onProductEditFormSubmit={handleProductEditFormSubmit}
                        onProductAddFormSubmit={handleProductAddFormSubmit}
    />
    </div>}
    
    {view == "bill" &&
    <Bill user={user}
          cartItems={cartItems}
          totalprice={totalprice}
    />
    }
    
  

  </>
  )
}
export default Block;
    
