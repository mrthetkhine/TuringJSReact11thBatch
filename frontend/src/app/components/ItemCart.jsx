'use client';
import {useState} from "react";

export default function ItemCart()
{
    let [price,setPrice] = useState(0);
    let [qty,setQty] = useState(0);

    console.log('Render ',price, ' qty ',qty);
    const priceOnChange =(e)=>setPrice(e.target.value);
    const qtyOnChange =(e)=>setQty(e.target.value);
    return (<div>
        <form>
            <div>Price <input type="text" value={price} onChange={priceOnChange}/> </div>
            <div>Qty <input type="text" value={qty} onChange={qtyOnChange}/> </div>
            <div>{price*qty}  </div>
        </form>
    </div>);
}