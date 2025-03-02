import { useState } from "react";
import AdminProduct from "./1AdminProduct";
import AdminProductForm from "./1AdminProductForm";


function AdminProductPage(props) {

    let [adminview, setAdminview] = useState("list");
    let[openForm, setopenForm] = useState(false);
    let[selectedProduct, setselectedProduct] = useState("");
    let {productList} = props;

    function handleDeleteProduct(product) {
        props.onDeleteProduct(product);
    }
    function handleProductListClick() {
        setAdminview("list")
    }
    function handleAddProductButton(params) {
        setAdminview("add");  
       setopenForm(true);
    //    console.log(product.name);
       
    }
    function handleEditButtonClick(product) {
        setAdminview("edit")
        setselectedProduct(product);
        setopenForm(true);
        console.log(product.name);
        
    }
    function handleCloseForm() {
        setopenForm(false);
        setAdminview("list")
    }
    function handleProductEditFormSubmit(product) {
        props.onProductEditFormSubmit(product);
    }
    function handleProductAddFormSubmit(product) {
        props.onProductAddFormSubmit(product);
    }
    return(
        <>
        {adminview == "list" && 
        <div className=" text-center"> 
            <button className="button">
                <a href="#" style={{color:"black"}} onClick={handleAddProductButton} >
                    Add Product
                </a>
            </button>
        </div>
        }

        <div className="container-fluid">
            <div className="row">
                      {adminview == "list" && 
                      productList.map((e,index)=>(<AdminProduct  key={index} product={e} 
                            onDeleteProduct={handleDeleteProduct}
                            onEditButtonClick={handleEditButtonClick}

            />))
            }
            </div>
        </div>
      
        {(adminview == "edit" || adminview == "add") && 
                <AdminProductForm   onProductListClick={handleProductListClick}
                                    onCloseForm={handleCloseForm}
                                    openForm={openForm}
                                    adminview={adminview}
                                    product={selectedProduct}
                                    onProductEditFormSubmit={handleProductEditFormSubmit}
                                    onProductAddFormSubmit={handleProductAddFormSubmit}
                />}
        </>
    )
}
export default AdminProductPage;