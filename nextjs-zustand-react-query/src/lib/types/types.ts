export interface ApiResponse<T>
{
    message:string;
    data:T;
}
export interface Todo{
    _id:string;
    title:string;
    completed:boolean;
}