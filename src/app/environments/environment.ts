export const environment={
    env:'development',
    apiIsSecure:false,
    apiUrl:'api.bysalon.com.tr',
    apiPort:80, //default 80
    getApiUrl(path:string):string{
        return (this.apiIsSecure?'https':'http')+"://"+
                (this.apiUrl+":"+this.apiPort+"/"+path).replace('//','/')
    }
}