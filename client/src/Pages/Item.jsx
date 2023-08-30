import { Navbar } from "../Components/Navbar/Navbar"
import { Product } from "../Components/Product/Product"
export const Item = ()=>{
    return(
        <div className="item-container">
            <Navbar/>
            <h1>Item name</h1>
            <div className="product-container">
                <Product buy={true}/>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus, laudantium blanditiis perspiciatis laborum facere doloribus 
                    asperiores dolor facilis, quod quasi tenetur sequi fugiat fugit nesciunt officiis. Est, illum omnis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi, adipisci praesentium quia earum eius. Numquam eius illo 
                    assumenda adipisci perferendis ratione non, libero, voluptate sapiente quam nostrum nobis earum?
                </p>
            </div>
            
            
        </div>
    )
}