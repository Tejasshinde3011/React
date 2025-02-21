function Cart(props) {
    let { cartItems, totalprice, productList } = props;

    function handleButtonAddToCart(product) { 
        props.onButtonAddToCart(product); 
    }
    function handleIncreaseCnt(product) { 
        props.onIncreaseCnt(product); 
    }
    function handleDecreaseCnt(product) { 
        props.onDecreaseCnt(product);
    }
    function handleRemoveBtn(product) { 
        props.onRemoveBtn(product);
    }
    //to shuffle elements for tech it more
    function shuffleArray(array) {
        return array.sort(()=>Math.random()-0.5)
    }
    let randomProductList = shuffleArray([...productList]).slice(0,12);

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="row m-4 text-start">
                <span style={{ fontWeight: '800', fontSize: '3em', borderLeft: 'solid grey 7px' }}>
                    No Items In Your Cart
                </span>
            </div>
        );
    }
    
    return (
        <>
            <div className="container ">

{/*SECTION 1  */}
                <div className="row m-4 text-start ">
                    <span style={{ fontWeight: '800', fontSize: '3em', borderLeft: 'solid black 7px' }}>
                        Items In Your Cart
                    </span>
                </div>

                <div className="row">
                    {cartItems.map((product, index) => (
                        <div key={index} className="col-md-3 col-sm-6 col-12"> 
                            <div className=" text-center my-3">
                                <div className="p-1 container-product">
                                    <div className="p-3 mx-2">
                                        <div className="row">
                                            <div className="offset-10 col-2">
                                                <button className="logobtn heartBtn">
                                                    <h5>
                                                        <i className="bi bi-heart" style={{ color: "red" }}></i>
                                                    </h5>
                                                </button>
                                            </div>
                                        </div>

                                        {product.discount !== 0 && (
                                            <div className="discount p-2"> {product.discount}% </div>
                                        )}

                                        <div className="container-image p-1">
                                            <img className="img-fluid" src={"./Images/Products/" + product.image} alt="" />
                                        </div>

                                        <div className="name">{product.name}</div><br />

                                        {product.discount === 0 ? (
                                            <div>₹ {product.mrp}</div>
                                        ) : (
                                            <div>
                                                ₹ <span className="text-decoration-line-through font-monospace text-danger">
                                                    {product.mrp}
                                                </span>{" "}
                                                : {product.mrp - product.discount * 0.01 * product.mrp}
                                            </div>
                                        )}

                                        <div>
                                            {!product.inStock && <span className="text-secondary">Out Of Stock</span>}
                                        </div>

                                        <div>
                                            {product.qty === 0 && product.inStock && (
                                                <button className="button" onClick={() => handleButtonAddToCart(product)}>
                                                    Add To Cart
                                                </button>
                                            )}

                                            {product.qty !== 0 && product.inStock && (
                                                <div>
                                                    <button className="button" onClick={() => handleIncreaseCnt(product)}>
                                                        +
                                                    </button>{" "}
                                                    {product.qty}{" "}
                                                    <button className="button" onClick={() => handleDecreaseCnt(product)}>
                                                        -
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="m-1">
                                            {product.inStock && product.qty > 0 && (
                                                <p>Total : {(product.mrp - product.discount * 0.01 * product.mrp) * product.qty}</p>
                                            )}
                                        </div>
                                        <div className="text-center row">
                                            <div className="offset-4 col-4 offset-4 ">
                                            <button className="logobtn" style={{color:"grey"}} onClick={()=>handleRemoveBtn(product)}>Remove</button>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div > 

{/* SECTION 2 */}
                <div className="py-4">
                   <div className="row m-4 text-start">
                        <span style={{ fontWeight: '800', fontSize: '1em', borderLeft: 'solid grey 7px' }}>
                            Price Details
                        </span>
                    </div>
                    <div className="row align-items-start m-3" style={{fontSize:"1em"}}>
                            <div className=" offset-1 col-2 text-start">
                              <div className="" >Price ({cartItems.length} Items) </div></div>
                            <div className="col-2 text-end">
                            <div className="">₹ {totalprice.toFixed(2)}</div></div>
                    </div>
                    <div className="row align-items-start m-3" style={{fontSize:"1em"}}>
                            <div className=" offset-1 col-2 text-start">
                              <div className="" >Discount </div></div>
                            <div className="col-2 text-end">
                                <div className="" style={{ color: "green" }}>
                                        ₹{" "}{cartItems.reduce((total, product) => 
                                                        total + (product.discount * 0.01 * product.mrp * product.qty), 0).toFixed(2)
                                                        }
                                </div>
                            </div>
                    </div>
                    <div className="row align-items-start m-3" style={{fontSize:"1em"}}>
                            <div className=" offset-1 col-2 text-start">
                              <div className="" >Delivery Charges </div></div>
                            <div className="col-2 text-end">
                            <div className="" >
                                <span className="text-decoration-line-through">₹ {(totalprice*0.0012).toFixed(2)}</span>{" "}
                                <span style={{color:"green"}}>FREE DELIVERY</span>
                                </div></div>
                    </div>
                    <div className="row align-items-start m-3 " style={{fontSize:"1em"}}>
                        <div className=" offset-1 col-2 text-start" style={{borderBottom:"solid grey 1px"}}>
                             <div className="mb-2">
                               <div className="" >Protection Fee </div>
                            </div>
                        </div>
                        <div className="col-2 text-end " style={{borderBottom:"solid grey 1px"}}>
                            <div className="mb-2">
                                ₹ {(totalprice*0.0002).toFixed(2)}{" "}
                            </div>
                        </div>
                    </div>
                     <div className="row align-items-start m-3" style={{fontSize:"1.1em", fontWeight:"bold"}}>
                            <div className=" offset-1 col-2 text-start">
                              <div className="" >Total Amount </div></div>
                            <div className="col-2 text-end">
                            <div className="">₹ {(totalprice+(totalprice*0.0002)).toFixed(2)}</div></div>
                    </div>
                    <div className="m-3" style={{backgroundColor:"lightgreen", opacity:"0.8"}}>
                            <div>
                                <i class="bi bi-piggy-bank-fill" style={{color:"darkgreen", fontSize:"1.5em"}}></i>{"  "}
                                You'll save ₹ 
                                    <span style={{ fontWeight: "bold" }}>
                                        {(
                                            cartItems.reduce((total, product) => 
                                            total + (product.discount * 0.01 * product.mrp * product.qty), 0) 
                                            + (totalprice * 0.0012) ).toFixed(2)
                                        }
                                    </span>{" "}
                                on this order!    
                            </div>
                    </div>
                </div>

{/* SECTION 3 */}

                <div className="py-4">
                   <div className="row m-4 text-start">
                        <span style={{ fontWeight: '800', fontSize: '1em', borderLeft: 'solid grey 7px' }}>
                            Tech It More
                        </span>
                    </div>
                    <div className="row">
                    {randomProductList.map((product, index) => (
                        <div key={index} className="col-md-2 col-sm-6 col-12"> 
                            <div className=" text-center my-3">
                                <div className="p-1 container-product">
                                    <div className="p-3 mx-2">
                                        <div className="row">
                                            <div className="offset-10 col-2">
                                                <button className="logobtn heartBtn">
                                                    <h5>
                                                        <i className="bi bi-heart" style={{ color: "red" }}></i>
                                                    </h5>
                                                </button>
                                            </div>
                                        </div>

                                        {product.discount !== 0 && (
                                            <div className="discount p-2"> {product.discount}% </div>
                                        )}

                                        <div className="container-image p-1">
                                            <img className="img-fluid" src={"./Images/Products/" + product.image} alt="" />
                                        </div>

                                        <div className="name">{product.name}</div><br />

                                        {product.discount === 0 ? (
                                            <div>₹ {product.mrp}</div>
                                        ) : (
                                            <div>
                                                ₹ <span className="text-decoration-line-through font-monospace text-danger">
                                                    {product.mrp}
                                                </span>{" "}
                                                : {product.mrp - product.discount * 0.01 * product.mrp}
                                            </div>
                                        )}

                                        <div>
                                            {!product.inStock && <span className="text-secondary">Out Of Stock</span>}
                                        </div>

                                        <div>
                                            {product.qty === 0 && product.inStock && (
                                                <button className="button" onClick={() => handleButtonAddToCart(product)}>
                                                    Add To Cart
                                                </button>
                                            )}

                                            {product.qty !== 0 && product.inStock && (
                                                <div>
                                                    <button className="button" onClick={() => handleIncreaseCnt(product)}>
                                                        +
                                                    </button>{" "}
                                                    {product.qty}{" "}
                                                    <button className="button" onClick={() => handleDecreaseCnt(product)}>
                                                        -
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="m-1">
                                            {product.inStock && product.qty > 0 && (
                                                <p>Total : {(product.mrp - product.discount * 0.01 * product.mrp) * product.qty}</p>
                                            )}
                                        </div>
                                        <div className="text-center row">
                                            <div className="offset-4 col-4 offset-4 ">
                                            <button className="logobtn" style={{color:"grey"}} onClick={()=>handleRemoveBtn(product)}>Remove</button>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div > 
                   
                </div>  

{/* SECTION 4 */}

                <div className="row" style={{borderTop: 'solid lightgrey 1px', position:"sticky", bottom:"0", backgroundColor:"white", zIndex: 1000}}>
                    <div className="row align-items-start m-3" style={{fontSize:"1.3em", fontWeight:"bold"}}>
                        <div className="offset-3 col-3 mt-3">
                            ₹ {(totalprice+(totalprice*0.0002)).toFixed(2)}{" "}
                            {" "}<i class="bi bi-caret-right-fill"></i>
                        </div>
                        <div className="col-2 ">
                            <button className="logobtn" style={{backgroundColor:"orange", color:"black"}}>Place Order</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Cart;