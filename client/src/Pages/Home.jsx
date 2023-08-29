import { Navbar } from "../Components/Navbar/Navbar"
import "../App.css"
import { Product } from "../Components/Product/Product"
export const Home = () =>{
    return(
        <div>
            <Navbar/>
            <main>
                <div className="search-bar">
                    <input type="text" placeholder="Search item by name"/>
                    <button>Search</button>
                </div>
                <div className="item-wrapper">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                    <Product/><Product/><Product/>
                </div>
            </main>
        </div>
    )
}