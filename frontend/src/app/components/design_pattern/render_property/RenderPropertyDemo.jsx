'use client';

function ListItem({items,render})
{
    return (<div>
            {
                items.map((item,index) => render(item,index))
            }
        </div>
    )
}
export default function RenderPropertyDemo()
{
    let items = ['Apple',"Orange","Banna"];
    return(<div>
        Why Render Property
       {/* <ListItem items={items} render={(item)=><div>{item}</div>} />*/}
        <ListItem items={items} render={(item,key)=><h2 key={key}>{item}</h2>} />
    </div>);
}