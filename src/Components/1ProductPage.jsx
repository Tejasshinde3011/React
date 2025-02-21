import Card from "./1ProductCard"

function ProductPage(props){
    let {productList} = props;
    function handleButtonAddToCart(product) {
        props.onButtonAddToCart(product);
    }
    function handleIncreaseCnt(product) { 
        props.onIncreaseCnt(product); 
    }
    function handleDecreaseCnt(product) { 
        props.onDecreaseCnt(product);
    }
    return(
        
        <div className="container-fluid ">
        <div className="row m-2 justify-content-center">
        {productList.map((e,index)=>
        <Card   key={index} product={e}  
                onButtonAddToCart={handleButtonAddToCart}
                onIncreaseCnt={handleIncreaseCnt}
                onDecreaseCnt={handleDecreaseCnt}/>
        )}
        </div>
        </div>
        
    
    )
}
export default ProductPage