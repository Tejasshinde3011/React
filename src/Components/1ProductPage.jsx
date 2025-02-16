import Card from "./1ProductCard"

function ProductPage(props){
    let {productList} = props;
    function handleButtonAddToCart(product,action) {
        props.onButtonAddToCart(product,action);
    }
    return(
        
        <div className="container-fluid">
        <div className="row m-2 justify-content-center">
        {productList.map((e,index)=>
        <Card key={index} product={e}  onButtonAddToCart={handleButtonAddToCart}/>
        )}
        </div>
        </div>
        
    
    )
}
export default ProductPage