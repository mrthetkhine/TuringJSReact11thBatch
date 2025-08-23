'use client';
function Parent()
{
    return (<div>
        Parent
        <Child/>
    </div>);

}
function Child()
{
    return (<div className="Toolbar" onClick={() => {
        console.log('You clicked on the toolbar!');
    }}>
        <button onClick={(e) => {
            console.log('Playing!');
            e.stopPropagation();
        }}>
            Play Movie
        </button>
        <button onClick={() => console.log('Uploading!')}>
            Upload Image
        </button>
    </div>);
}
export default function PropagationDemo()
{
    return(<div>
        Propagation
        <Parent/>
    </div>);
}