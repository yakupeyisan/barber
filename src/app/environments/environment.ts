export const environment={
    env:'production',
    apiIsSecure:false,
    apiUrl:'api.bysalon.com.tr',
    //apiUrl:'localhost',
    apiPort:80, //default 80
    getApiUrl(path:string):string{
        return (this.apiIsSecure?'https':'http')+"://"+
                (this.apiUrl+":"+this.apiPort+"/"+path).replace('//','/')
    }
}