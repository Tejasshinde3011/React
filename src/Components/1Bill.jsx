import React, { useState } from "react";
import { toWords } from "number-to-words";
import {
  addBillsToBackend
} from "./firebaseBillsService";
import {
  getLastBillNumberFromBackend,
  updateBackendLastBillNumber
} from "./firebaseLastBillNumberService";
import { BeatLoader, PacmanLoader, RingLoader } from "react-spinners";
// import { updateBackendProduct } from "./FirebaseProductServices";
import { logEvent } from "firebase/analytics";
// import {getProductsFromBackend} from './FirebaseProductServices';

export default function Bill(props) {
    console.log("button clicked");
    
  let { cartItems } = props;
  let { totalprice } = props;
  let { user } = props;
  console.log(user);
  
  //TO COONVERT NUMBER TO WORD
  
  const formatPriceInWords = (amount) => {
  return toWords(amount).replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizing first letter of each word
};

 const formatCurrency = (amount) => {
  if (amount == null || isNaN(amount)) return "0.00"; // Default to 0.00 if amount is undefined or not a number

  return Number(amount).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
};
  const calculateDiscountedPrice = (mrp, discount) => {
    return mrp * (1 - discount / 100);
  };
  let [flagLoader, setFlagLoader] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  async function handleBillCreateClick() {
    setFlagLoader(true);
    let b = await getLastBillNumberFromBackend();
    let currentBillNumber = b.lastbillnumber + 1;
    console.log(currentBillNumber);

    let BillObj = {};
    BillObj.billNumber = currentBillNumber;
    BillObj.customer = user.name;
    BillObj.date = new Date();
    BillObj.amount = totalprice;
    BillObj.soldProducts = cartItems;
    BillObj = await addBillsToBackend(BillObj);
    // console.log(BillObj.billNumber);

    b.lastbillnumber = currentBillNumber;
    console.log(BillObj);
    
    await updateBackendLastBillNumber(b);

    let billId = BillObj.id;
    console.log(billId);

    window.localStorage.setItem("cartItems", JSON.stringify([]));
    let message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.Its link is ${window.location}?id=${billId} `;
    // let billUrl = `https://siddreactapp1.netlify.app/?id=${billId}`;
    // let message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.Its link is ${billUrl}`;
    // let encodedMessage = encodeURIComponent(message);
    setFlagLoader(false);
    console.log(message);

    window.location = `http://api.whatsapp.com/send?phone=7218652818&text=${message}`;
  }
  if (flagLoader) {
    return (
      <div className=" justify-content-center d-flex my-3">
        <RingLoader size={50} color={"green"} className="text-center" />
      </div>
    );
  }
 
  return (
    <>
      
      <div className=" col-12 col-lg-12 text-center my-2">
        <button className="button my-2 whatsappbill" onClick={handleBillCreateClick} >
          Share Bill on WhatsApp
        </button>
      </div>

    <div className="row p-4 ">

        <div className="col-2 "></div>

        <div className="col-lg-8 justify-content-center bill">

            <div className="row">
                <div className="col-4" style={{fontSize:"2.5em", fontWeight: 800, letterSpacing: 2 }}>TechStore</div>
                <div className="offset-4 col-4 mt-3 text-end">
                    <div className="text-end" style={{fontSize: "0.8em"}}>Tax invoice/ Bill Of Supply</div>
                    <div className="text-end opacity-75 " style={{fontSize: "0.5em"}}>(Original For Recipient)</div>
                </div>
            </div><br />

            <div className="row">
                <div className="col-6">
                    <div className="text-start"><strong> Sold By :</strong></div>
                    <div className="text-start opacity-75">
                        TechStore Inovation Pvt Ltd <br />
                        75/3, Avenue Park Balewadi Pune <br />
                        411045. 
                    </div>
                </div>
                <div className="col-6 text-end">
                    <strong>Invoice Date: </strong>{currentDate}
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="text-start mt-2"><strong> State Code : </strong>27</div>
                    <div className="text-start mt-2"><strong> Place Of Supply : </strong>MAHARASHTRA</div>
                </div>
                <div className="col-6">
                    <div className="text-end mt-2"><strong>Customer Name : </strong>{user.name}</div>
                    <div className="text-end mt-2"><strong>Customer Id : </strong>{user.emailid}</div>
                </div>
            </div>   
            
            <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                    <thead style={{backgroundColor:"lightgray"}}>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 w-1/12">Sr. No</th>
                        <th className="border border-gray-300 px-4 py-2 w-3/12">Product</th>
                        <th className="border border-gray-300 px-4 py-2 w-3/12">Price</th>
                        <th className="border border-gray-300 px-4 py-2 w-2/12">Quantity</th>
                        <th className="border border-gray-300 px-4 py-2 w-3/12">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((e, index) => {
                           const discountedPrice = calculateDiscountedPrice(e.mrp, e.discount);
                           const totalPrice = discountedPrice * e.qty;
                        return(
                        <tr key={index} className="text-center">
                          <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-2">{e.name}</td>
                          <td className="border border-gray-300 px-4 py-2">₹{" "} {formatCurrency(discountedPrice)}</td>
                          <td className="border border-gray-300 px-4 py-2">{e.qty}</td>
                          <td className="border border-gray-300 px-4 py-2">₹{" "}{formatCurrency(totalPrice)}</td>
                        </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
            
            <div className="row my-3 text-end">
                <div className="offset-7 col-5 text-end">
                   <span style={{fontWeight: 700, fontSize:"1.3em"}}> Grand Total :</span> {" "}
                    <span style={{fontWeight: 600, fontSize:"1.3em"}}>Rs{" "}{formatCurrency(totalprice)}</span>
                </div>
                <div className="offset-2 col-10 text-end mb-4">
                    <span style={{fontWeight: 700, fontSize:"0.8em"}}> Amount In Words :</span> {" "}
                    <span style={{fontSize:"0.7em"}}>{formatPriceInWords(totalprice)} {" "}Rupees Only</span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-cente" style={{fontSize: "0.7em"}}>
                    <u>Your Satisfaction is Our Priority! Thank You for Shopping at <strong>TechStore</strong>. Visit Again.</u>
                </div>   
            </div> 
        </div>

        <div className="col-2"></div>
    </div>
    </>
  );
}