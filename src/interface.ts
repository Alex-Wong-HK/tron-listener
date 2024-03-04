export interface ICallbackPayload{
    event:string,
    from:string,
    to:string,
    value:string,
    transaction:string
}
export interface ITronWebConfig{
    fullHost:string,
    apiKey:string,
    privateKey:string
}
