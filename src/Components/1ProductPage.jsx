import Card from "./1ProductCard"
import { Carousel } from 'react-bootstrap';


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

        <div class="marquee-container p-1">
           <div class="marquee">
             <span>--- SALE SALE SALE SALE --- SALE SALE SALE SALE --- SALE SALE SALE SALE ---</span>{"    "}
             <span>GREAT DISCOUNTS ON MOBILES ---- SAMSUNG GALAXY S25 ULTRA 5G --- GET IT NOW AT LOWEST PRICE --- </span>
             <span>--- SALE SALE SALE SALE --- SALE SALE SALE SALE --- SALE SALE SALE SALE ---</span>{"    "}
             <span>--- APPLE IPHONE 16 PRO📈📈📈 --- </span>
             <span>--- GET EXCITING OFFERS💰💰💰 --- </span>
             <span>--- SALE SALE SALE SALE --- </span>
           </div>
        </div>

        <div className="container-fluid">
  <div className="row justify-content-start align-items-start ">
  {/* Carousel - Placed first in row */}
  <div className="col-12 col-sm-8 col-md-6 col-lg-6 carsol p-0 m-2 ">
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Samsung.jpg" alt="Samsung" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Apple.jpg" alt="Apple" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Sony.jpg" alt="Sony" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Airpods.jpg" alt="Airpods" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Jbl.jpg" alt="JBL" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/Images/Products/Watch.jpg" alt="Watch" />
      </Carousel.Item>
    </Carousel>
  </div>

  {/* Page 1 Image */}
  <div className="col-12 col-md-2 page1 d-flex justify-content-center align-items-center p-3 m-2 ">
    <img className="img-fluid w-100  " src="/Images/Products/page1.jpg" alt="Page1" />
  </div>

  {/* Page 2 Image */}
  <div className="col-12 col-md-3 page2 d-flex justify-content-center align-items-center p-3 m-2 ">
    <img className="img-fluid w-100  " src="/Images/Products/page2.jpg" alt="Page2" />
</div>
</div>

  {/* Product List */}
  <div className="row justify-content-center">
    {productList.map((e, index) => (
      <Card key={index} product={e}  
        onButtonAddToCart={handleButtonAddToCart}
        onIncreaseCnt={handleIncreaseCnt}
        onDecreaseCnt={handleDecreaseCnt} />
    ))}
  </div>

  {/* Scroll-to-top Button */}
  <div style={{ position: "fixed", bottom: "20px", right: "25px", zIndex: 1000 }}>
    <h2>
      <i className="bi bi-arrow-up-circle arrowBtn"
        style={{ cursor: "pointer", boxShadow: "5px 1px 5px rgb(186, 185, 185)", borderRadius: "50%", transition: "transform 0.3s" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></i>
    </h2>
  </div>
</div>
</div>
    
        
    
    )
}
export default ProductPage