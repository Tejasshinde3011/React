import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import fieldValidate from "./FormValidations.js";
import { Modal } from "@mui/material"; 

function AdminProductForm(props) {
let emptyProduct = {
  name: "",
  image:"Logo.jpg",
  mrp: "",       
  discount: "",  
  inStock: true,
  qty: "",
  type: {}     
};
  
  let [product, setProduct] = useState("");
  let [flagLoader, setFlagLoader] = useState(false);
  let [flagFormInvalid, setFlagFormInvalid] = useState(false);
  let { adminview } = props;
  let { sampleProduct } = props;
  let {openForm}= props;
  let [errorProduct, setErrorProduct] = useState({
    name: { message: "", mxLen: 80, mnLen: 3, onlyDigits: false },
    mrp: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
    discount: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
    type: { message: "", mxLen: 80, mnLen: 3, onlyDigits: false },
    qty: {  message: "", mxLen: 3, mnLen: 1, onlyDigits: true },
  });
  
  
  useEffect(() => {
    if (adminview == "edit") {
      setProduct(props.product);
    } else if (adminview == "add") {
      let p = emptyProduct;
      console.log(p);
      setProduct(p);
    }
  }, []);
  function handleProductListClick() {
    props.onProductListClick();
  }

  function handleStockChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    let s;
    if (event.target.value=="true") {
        s=true;
    }
    else{s=false};
    setProduct({ ...product, [event.target.name]: s });
    
  }
  function handleTextChange(event) {
    let name = event.target.name;
    setProduct({ ...product, [name]: event.target.value });
    
    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[name].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct)
  }
  function handleBlur(event) {
    let name = event.target.name;
    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[name].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct);
  }
  function handleFocus(event) {
    // checkAllErrors();
  }
  function checkAllErrors(errProduct) {
    for (let field in errProduct) {
      if (errProduct[field].message !== "") {
        setFlagFormInvalid(true);
        return;
      } //if
    } //for
    setFlagFormInvalid(false);
  }
  function handleProductAddEditFormSubmit(event) {
    event.preventDefault();
    console.log(product);
    if (adminview == "edit") {
      updateBackendProduct(product);
    } else if (adminview == "add") {
      addToBackendProduct(product);
    }
  }
  async function updateBackendProduct(product) {
    setFlagLoader(true);
    let response = await axios.put(
      "http://localhost:3000/devices/" + product.id,
      product
    );
    props.onProductEditFormSubmit(product);
    setFlagLoader(false);
  }
  async function addToBackendProduct(product) {
    setFlagLoader(true);
    let response = await axios.post("http://localhost:3000/devices", product);
    let data = await response.data;
    console.log("Added");
    console.log(data);
    props.onProductAddFormSubmit(data); // this has id
    setFlagLoader(false);
  }
  if (flagLoader) {
    return <BeatLoader size={24} color={"red"} />;
  }
  function handleCloseForm() {
    props.onCloseForm();
  }

  return (
    <>
    <Modal
                     onClose={(event, reason) => {
                     if (reason !== "backdropClick") {
                       handleCloseForm();
                     }
                     }}
                     open={openForm}
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

        <div className="text-end "><button className="cancelBtn" onClick={handleCloseForm}><><i class="bi bi-x" style={{fontSize:'1.5em'}}></i></></button></div>
        <div className="text-center text-danger">
            <a href="#" onClick={handleProductListClick}>
             LIST
            </a>
        </div>
             {adminview == "edit" && (
               <div className="text-center text-danger my-3">
                 Edit Product ({product.name})
               </div>
             )}
             {adminview == "add" && (
               <div className="text-center text-danger my-3">Add the new product</div>
             )}
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 "> 
          <form
            className="product-form"
            onSubmit={(event) => {
              handleProductAddEditFormSubmit(event);
            }}
          >
            <div className="row">
              <div className="col-sm-4 col-6 my-2 text-end">Name</div>
              <div className="col-6 my-2">
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  value={product.name}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                   style={{backgroundColor:"white" , color:"black"}}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.name.message && errorProduct.name.message}
              </div>
              <div className="col-sm-4 col-6 my-2 text-end">MRP</div>
              <div className="col-6 my-2">
                <input
                  type="text"
                  name="mrp"
                  id=""
                  value={product.mrp}
                  required
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                   style={{backgroundColor:"white" , color:"black"}}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.mrp.message && errorProduct.mrp.message}
              </div>
              <div className="col-sm-4 col-6  my-2 text-end">Discount</div>
              <div className="col-6 my-2">
                <input
                  type="text"
                  name="discount"
                  id=""
                  value={product.discount}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                   style={{backgroundColor:"white" , color:"black"}}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.discount.message && errorProduct.discount.message}
              </div>
              <div className="col-sm-4 col-6 my-2 text-end">InStock</div>
              <div className="col-6 my-2 text-start">
                <input
                  type="radio"
                  name="inStock"
                  id="true"
                  required
                  value="true"
                  onClick={handleStockChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                   style={{backgroundColor:"white" , color:"black"}}
                />{" "}
                <label htmlFor="true">True</label><br />
                
                <input
                  type="radio"
                  name="inStock"
                  id="false"
                  required
                  value="false"
                  onClick={handleStockChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                   style={{backgroundColor:"white" , color:"black"}}
                />{" "}
                <label htmlFor="false">False</label>
              </div>
             
              <div className="col-sm-4 col-6 my-2 text-end">Qty</div>
              <div className="col-6 my-2">
                <input
                  type="text"
                  name="qty"
                  id=""
                  required
                  value={product.qty}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                   style={{backgroundColor:"white" , color:"black"}}
                />
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.type.message && errorProduct.type.message}
              </div>
              <div className="col-sm-4 col-6 my-2 text-end">Type</div>
              <div className="col-6 my-2">
                <select 
                name="type" 
                id="type"
                required
                value={product.type}
                onChange={handleTextChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={{backgroundColor:"white" , color:"black"}}>
                    <option value="0">Select Type</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Headphone">Headphone</option>
                </select>
                
              </div>
              <div className="offset-sm-4 offset-6 text-start text-danger">
                {errorProduct.type.message && errorProduct.type.message}
              </div>
    
              <div className="col-sm-4 col-6  my-2 text-end"></div>

              <div className="row align-items-center mt-3">
                            <div className=" col-6">
                               <input   type="submit" 
                                        value="Submit"
                                        disabled={flagFormInvalid}
                                        style={{color:"black" , marginRight:"8px"  , borderRadius:"5px", padding:"5px"}} 
                                        className="button" /> 
                            </div>
                            <div className=" col-6"> 
                                <button     className="button myborder"
                                            onClick={handleProductListClick}
                                            style={{color:"black" , marginLeft:"8px", borderRadius:"5px"}}
                                >
                                    Cancel{" "}
                                </button>
                            </div>
                </div> 
            </div>
          </form>
         </div>
        
        </div>
      </div>
      </Modal>
      {/* row ends */}
    </>
  );
}
export default AdminProductForm;