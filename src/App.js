import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {ForceGraph2D} from 'react-force-graph';
import Header from './components/Header'
import SankeyChart from './SankeyChart';
import { ExportJSON, ImportJSON, loadData, readFile } from './utils';


class App extends Component {

  constructor() {
    super()

    this.state = {
      nodes: [],
      links: [],
    };

    this.loadData = loadData.bind(this);
  }

  componentDidMount() {
    this.loadData('http://localhost:5000/api/data');//../server/datasets/data.json');

    // this._request = fetch('/api/nodes')
    // .then(res => res.json())
    // .then(nodes => {
    //   this.setState({nodes});
    // }).catch(error => {
    //   console.log(error);
    // });
    //
    // this._request = fetch('/api/links')
    // .then(res => res.json())
    // .then(links => {
    //   this.setState({links});
    //   this.render();
    // }).catch(error => {
    //   console.log(error);
    // });
    // console.log("Trying to load your data!");

  }

  componentWillUnmount() {
    if (this._request) {
      // this._request.cancel();
    }
  }

  render() {
    console.log("Render called.");
    const heading = "WarmCall";

    console.log("Data -> " + this.state.nodes);

    if (this.state.nodes == null && this.state.links) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{heading}</h1>
          </header>
          <p>Loading yall ..</p>
        </div>
      );
    } else {
      let nodes = this.state.data;

      return (
        <div className="App">
            <Header/>
            <SankeyChart nodes={this.state.nodes} links={this.state.links} openModal={this.openModal}/>
              </div>
      );
    }
  }
}

export default App;
