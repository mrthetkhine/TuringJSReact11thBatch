export default function Border({children}) {
    console.log('Border Component ,children=', children);
    return(<div style={{
       border: '1px solid black',
    }}>
        {children}
    </div>)
}