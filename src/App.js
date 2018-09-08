import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {ForceGraph2D} from 'react-force-graph';
import Header from './components/Header'

class App extends Component {
  state = {
    data : null,
  };

  componentDidMount() {
    this._request = fetch('/api/testdata')
    .then(res => res.json())
    .then(data => {
      this.setState({data});
      this.render();
    }).catch(error => {
      console.log(error);
    });
    console.log("Trying to load your data!");
  }

  componentWillUnmount() {
    if (this._request) {
      // this._request.cancel();
    }
  }

  render() {
    console.log("Render called.");
    const heading = "WarmCall";

    console.log("Data -> " + this.state.data );

    if (this.state.data == null) {
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
        <ForceGraph2D
        graphData={nodes}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles="value"
        nodeVal={n => n.size}
        linkDirectionalParticleSpeed={d => d.value * 0.001}
      />
              </div>
      );
    }
  }
}

export default App;
