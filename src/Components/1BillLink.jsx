 import { toWords } from "number-to-words";
 
 function BillLink(props){
    let {bill} = props; 

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

        
        console.log(bill);
        


return (
    <>
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
                    {/* <strong>Invoice Date: </strong>{bill.date} */}
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="text-start mt-2"><strong> State Code : </strong>27</div>
                    <div className="text-start mt-2"><strong> Place Of Supply : </strong>MAHARASHTRA</div>
                </div>
                <div className="col-6">
                    <div className="text-end mt-2"><strong>Customer Name : </strong>{bill.customer}</div>
                    {/* <div className="text-end mt-2"><strong>Customer Id : </strong>{user.emailid}</div> */}
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
                        {bill.soldProducts.map((e, index) => {
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
                    <span style={{fontWeight: 600, fontSize:"1.3em"}}>Rs{" "}{formatCurrency(bill.amount)}</span>
                </div>
                <div className="offset-2 col-10 text-end mb-4">
                    <span style={{fontWeight: 700, fontSize:"0.8em"}}> Amount In Words :</span> {" "}
                    <span style={{fontSize:"0.7em"}}>{formatPriceInWords(bill.amount)} {" "}Rupees Only</span>
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

export default BillLink;