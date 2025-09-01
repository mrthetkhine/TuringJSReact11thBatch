'use client';

function TableRow({item, index})
{
    return (<>
            <td>{index}</td>
            <td>{item}</td>
    </>

    );
}
export default function TableDemo()
{
    let items = ['apple','orange','banana'];
    return (<div>
        Table
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
            </thead>
            <tbody>
            {
                items.map((item,index) =><tr key={index} item={item}>
                    <TableRow item={item} index={index}/>
                </tr>)
            }
            </tbody>
        </table>
    </div>);
}