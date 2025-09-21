async function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default async function Page()
{
    await delay(5000);
    return(<div>
        <h1>Computer page</h1>
    </div>);
}