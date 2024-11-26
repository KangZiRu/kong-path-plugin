import kong from "kong-pdk/kong";
 
class KongPlugin { 
    private config; 
     
    constructor(config: any) { 
        this.config = config; 
    } 
 
    async access(kong: kong) {
        const name = await kong.request.getHeader("x-name"); 
        const message = this.config.message || "hello"; 
 
        await Promise.all([ 
            kong.response.setHeader("x-greeting", message + " " + name) 
        ]) 
    } 
} 
 
module.exports = { 
    Plugin: KongPlugin, 
    Schema: [{ 
        message: { type: "string" } 
    }], 
    Version: "0.1.0", 
    Priority: 0
};