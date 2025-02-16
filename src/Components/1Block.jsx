import { useState } from "react";
import NavBar from "./1NavBar";
import ProductPage from "./1ProductPage";
import Cart from "./1AddCart";
import { useEffect } from "react";

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
let[productList,setproductList] = useState(pList);
let[cartItems, setCartItems] = useState([]);

useEffect(() => {
  console.log("Current view:", view);
}, [view]);

  function handleHomeButtonClick(view) {
    console.log(view);
    setView(view);
  }

  function handleCartItems(view) {
     console.log("Cart button clicked"); 
    setView("cart");
  }

  function handleButtonAddToCart(product, action) {
let temp = [...productList];    
let index = temp.indexOf(product);

//to do + - on card page
      if (action == "+") {
        product.qty++;
        setCnt(cnt+1);
        // temp[index].qty++;
        // setFltrpList[temp];
        setproductList[temp];
       
      }
      else if (action == "-") {
        product.qty--;
        // temp[index].qty--;
        // setFltrpList[temp];
        setproductList[temp];
        setCnt(cnt-1);
      }

let updateCart = [...cartItems]; 
// If qty is 0, remove the item from the cart . if id does not match keeps it in updated array
if (product.qty == 0) {
  //remove
  updateCart = updateCart.filter((e) => e.id !== product.id);  
} 
else {
  // Check if product exists in cart
 if(product.qty==1 && action=="+")
  {// add
    updateCart.push(product);
  }
  else if (product.qty==1 && action=="-") {
    return product;
  }
  else{
    updateCart=updateCart.map((e)=>{
     //edit
      if(e.id==product.id)
      {
        return product;
      }
      else
      {
        return e;
      }
    })
  }
}
// Finally, update state with the new cart
setCartItems(updateCart);  

if (updateCart.length!=0) {
  for (let i = 0; i < updateCart.length; i++) {
   ttlprice = ttlprice + (updateCart[i].mrp - (updateCart[i].discount * 0.01 * updateCart[i].mrp)) * updateCart[i].qty;
   console.log(ttlprice);
}
}
else{ttlprice=0};
setTotalprice(ttlprice);

}
return(
    <> 
    
    <NavBar onHomeButtonClick={handleHomeButtonClick} 
            updateCart={cartItems}  
            totalprice={totalprice}
            onCartItems={handleCartItems}
             />
    {view == "product" && <ProductPage productList={productList}
                                      onButtonAddToCart={handleButtonAddToCart}
    />}
    {view == "Cart" && <Cart /> 
     } 
    </>
)
}
export default Block;
    
