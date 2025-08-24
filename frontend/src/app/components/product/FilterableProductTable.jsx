'use client';
import {useState} from "react";
import {data} from "@/app/components/product/data";
import './product.css';
function SearchBar()
{
    let [filter, setFilter] = useState('');
    let [inStock, setInStock] = useState(false);

    const filterChange = (e)=>{
        setFilter(e.target.value);
    }
    const inStockChange = (e)=>{
        setInStock(e.target.checked);
    }
    return(<div>
        <form>
            <input type={"text"} value={filter} onChange={filterChange}/><br/>
            <input type={"checkbox"} checked={inStock} onChange={inStockChange}/>
            Only show product in stock
        </form>

    </div>);
}
function ProductTable({products}){
    return(<div>
        <h3>Name  Price </h3>
        <ProductCategoryRow products={products} title={"Fruit"}/>
        <ProductCategoryRow products={products} title={"Vegetables"}/>
    </div>)
}
function ProductCategoryRow({title,products})
{
    return(<div>
        <h4>{title}</h4>
        {
            products.map(product=><ProductRow product={product}/>)
        }
    </div>);
}
function ProductRow({product})
{
    return(<div>
        <span className={'product-name'}>{product.name}  </span>
        <span className={'product-price'}>{product.price}</span>
    </div>);
}
export default function FilterableProductTable()
{
    let [products, setProducts] = useState(data);
    return(<div>
        FilterableProductTable
        <SearchBar/>
        <ProductTable products={products}/>
    </div>);
}