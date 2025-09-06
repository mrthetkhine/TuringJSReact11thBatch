'use client';

function ListItem({items})
{
    return (<div>
            {
                items.map((item,index) => (<div>{item}</div>))
            }
        </div>
    )
}
function ListItemV2({items})
{
    return (<div>
            {
                items.map((item,index) => (<h1>{item}</h1>))
            }
        </div>
    )
}
function ListItemV3({items})
{
    return (<div>
            {
                items.map((item,index) => (<h3>{item}</h3>))
            }
        </div>
    )
}
export default function WhyRenderProperty()
{
    let items = ['Apple',"Orange","Banna"];
    return(<div>
        Why Render Property
        <ListItemV3 items={items}/>
    </div>);
}