export interface Response{
    message:string;
    success:boolean;
}
export interface DataResponse<T> extends Response{
    data:T;
}