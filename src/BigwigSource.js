import { BigWig } from '@gmod/bbi';

export class BigwigSource {
    constructor(url){
        this.url = url;
        this.bw = new BigWig({
            url,
        });
        this.header = null;
    }

    async getData(chrom, start, end, scale=1) {
        return await this.bw.getFeatures(chrom, start, end, { scale });
    }
}