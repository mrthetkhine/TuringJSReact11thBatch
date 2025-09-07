class PrivateDemo
{
    private data:number = 100;
    #field = 100;

    method()
    {
        this.#field= 300;
        console.log('Private data',this.data, " this #field ",this.#field);
    }
}
let obj : PrivateDemo = new PrivateDemo();
let another:any = obj;
//console.log('Obj ',another.#field);
obj.method();