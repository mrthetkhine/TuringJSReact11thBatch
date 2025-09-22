export interface Director
{
    _id: string;
    name: string;
    phoneNo: string;
}
export interface Movie
{
    _id: string;
    title: string;
    year: number;
    director:Director;
}