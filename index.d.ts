export = DeezerPlugin;
declare class DeezerPlugin extends DisTube.CustomPlugin {
    constructor(options?: {});
    parallel: any;
    emitPlaySongAfterFetching: boolean;
    search(query: any): Promise<DisTube.SearchResult>;
}
import DisTube = require("distube");
