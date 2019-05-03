import { BamFile } from '@gmod/bam';

export class BamSource {
    constructor(url){
        this.url = url;
        this.bam = new BamFile({
            bamUrl: url,
            baiUrl: url + '.bai',
        });
        this.header = null;
    }

    async getData(chrom, start, end) {
        if(!this.header) {
            this.header = await this.bam.getHeader();
        }
        return await this.bam.getRecordsForRange(chrom, start, end);
    }
}