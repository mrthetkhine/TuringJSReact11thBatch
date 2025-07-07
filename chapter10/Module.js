window.MyModule = window.MyModule || (function(){
    console.log('Module loaded');
    function privateMethod()
    {
        console.log('Private method');
    }
    function api()
    {
        console.log('API ');
        privateMethod();
    }
    return{
        api
    }
})();