import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BamSource } from './BamSource';
import { TabixSource } from './TabixSource';
import { BigwigSource } from './BigwigSource';
import { TwobitSource } from './TwobitSource'

class App extends React.Component {

  async componentDidMount() {
    // const bam = new BamSource('https://vizhub.wustl.edu/hubSample/hg19/bam1.bam')
    // const bamData = await bam.getData('chr7',27053398,27373766);
    // console.log(bamData);
    // const tab =  new TabixSource('https://s3.amazonaws.com/repbr/TEST/ENCFF000ARO_ALL.iteres.loci.gz');
    // const tabData = await tab.getData('MER41B', 0, 1);
    // console.log(tabData);
    // const bw =  new BigwigSource('https://wangftp.wustl.edu/~dli/test/TW463_20-5-bonemarrow_MeDIP.bigWig');
    // const bwData = await bw.getData('chr7',27053398,27373766);
    // console.log(bwData);
    const two = new TwobitSource('https://vizhub.wustl.edu/public/hg38/hg38.2bit')
    const seq = await two.getData('chr3',184299266,184299270)
    console.log(seq);
  }
  
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
