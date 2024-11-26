import kong from "kong-pdk/kong";

class KongPlugin {
    private config;

    constructor(config: any) {
        this.config = config;
    }

    async access(kong: kong) {
        const { api_prefix: apiPrefix } = this.config;
        const url = await kong.request.getPath();
        if (url.startsWith(apiPrefix)) {
            kong.service.request.setPath(url.replace(apiPrefix, ""));
        }
    }
}

module.exports = {
    Plugin: KongPlugin,
    Schema: [{
        api_prefix: { type: "string", required: true },
    }],
    Version: "0.1.0",
    Priority: 0
};
