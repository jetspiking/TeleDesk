    /**
     * JSON-data from the Teletekst URL.
     * Please note that 'thisPage' is set manually (index.ts)
     * to keep track of the current page object and
     * is not actually included in the retrieved JSON-data.
     */
    export interface ITeleData {
        "thisPage":"",
        "prevPage":"",
        "nextPage":"",
        "prevSubPage":"",
        "nextSubPage":"",
        "fastTextLinks":[],
        "content":""
    }