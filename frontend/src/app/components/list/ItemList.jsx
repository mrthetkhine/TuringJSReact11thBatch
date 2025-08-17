export default function ItemList({items}){
    return (<div>
        <ol>
            {
                items.map((item,index)=><li key={index}>
                    {item}
                </li>)
            }
        </ol>
    </div>);
}