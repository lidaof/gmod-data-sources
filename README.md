React-based data fetching code using [GMOD's](https://github.com/GMOD) libraries.

## Supported formats

* bigWig
* bam
* bed.gz (by bgzip and tabix)

## How to use

```javascript
    const src = new source(url)
    const data = await src.getData('chr7',27053398,27373766);
    console.log(data);
```

`source` can be `BamSource/TabixSource/BigwigSource`

`url` should be `bam.url/tabix.gz.url/bigwig.url`

## notes

* for bam and tabix bed.gz formats, the corresponding index file .bai and .tbi should be together with the file under same URL