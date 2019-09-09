import { TwoBitFile } from '@gmod/twobit';
import { RemoteFile } from 'generic-filehandle';

export class TwobitSource {
    constructor(url) {
        this.url = url;
        this.twobit = new TwoBitFile({ 
            filehandle: new RemoteFile(url)
        });
        // this.header = null;
    }
    async getData(chrom, start, end) {
        const seq = await this.twobit.getSequence(chrom, start, end);
        return seq;
    }
}
