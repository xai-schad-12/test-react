import "./product.css"
import "../../App.css"
export const Product = () =>{
    const productImg = "https://sac-a-main.top/wp-content/uploads/2018/02/magic-zone-sacs-a-main-femmes-sacs-a-main-de-mode-pour-dames-sacs-a-bandouliere-en-cuir-pu-cabas-2018.jpg"
    const price = 55
    const rate = 4
    return(
        <div className="product">
            <img src={productImg} alt="" />
            <div className="rate">
                <span>Rate: {rate}</span>
                <span>Price: {price}$</span>
            </div>
            <button>View Item</button>
        </div>
    )
}