function AdminProduct(props) {

    let {product} = props;

    function handleProductListClick() {
        props.onProductListClick()
    }
    function handleDeleteProduct() {
        props.onDeleteProduct(product);
    }
    function handleEditButtonClick() {
        props.onEditButtonClick(product);
    }
    return(
        <>
        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3  text-center my-3  ">
            <div className="p-1 container-product">
            <div className=" p-3 mx-2 ">
                <div className="row">
                  <div className="offset-10 col-2 ">
                     <button className="logobtn heartBtn" >
                      <h5><i class="bi bi-heart" style={{color:"red"}}></i></h5>
                     </button>
                  </div>
                </div>
                 {product.discount!=0 && (
                    <div className="discount p-2"> {product.discount}% </div>
                 )} 
                <div className="container-image p-1 ">
                    <img className="img-fluid" src={"./Images/Products/" + product.image} alt="" />
                </div>
                <div className="name">{product.name}</div><br />
                {product.discount==0 && (<div>
                ₹ {product.mrp}</div>
                )} 
                {product.discount!=0 && (
                <div>₹  {" "}
                    <span className="text-decoration-line-through font-monospace text-danger">{product.mrp}</span> : {" "}
                     {product.mrp-product.discount*0.01*product.mrp}
                </div>
                )} 
                <div>
                    {product.inStock == false && 
                    <span className="text-secondary">Out Of Stock</span>}
                </div>
                <div> 
                     {  product.qty == 0  && (
                        <div className="text-center">
                            <button className="button mx-3 my-2" onClick={handleEditButtonClick}><i class="bi bi-pen-fill"></i></button>
                            <button className="button mx-3 my-2" onClick={handleDeleteProduct}><i class="bi bi-trash-fill"></i></button>
                        </div>
                    )
                    } 

                    {/* { product.qty != 0 && product.inStock == true && (
                        <div>
                            
                            <button className="button" onClick={()=>handleIncreaseCnt(product)}>+</button> {"  "}
                            {product.qty}{"  "}
                            <button className="button" onClick={()=>handleDecreaseCnt(product)}>-</button> 
                        </div>    
                    )}    */}
                </div>
                <div className="m-1">
                    <span className="font-weight-1000">{product.inStock == true && product.qty >0 &&<p>Total : {(product.mrp-product.discount*0.01*product.mrp)*product.qty}</p>}</span>   
                </div>
            </div>
        </div>
        </div>
      
       



        </>
    )
}
export default AdminProduct;