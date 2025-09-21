'use client';
import {useParams} from "next/navigation";

export default function ShoppingDynamicRoutePage() {
    const params = useParams<{ slug:string [] }>();
    console.log('Params ',params);
    return(<div>
        <h1>Shopping Dynamic Route Page</h1>
    </div>);
}