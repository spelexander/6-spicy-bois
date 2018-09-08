import React from 'react';
import ReactDOM from 'react-dom';
import d3Circle from './d3_circle.js';
import style from './sankey.css';
import SankeyChart from './SankeyChart';
import { ExportJSON, ImportJSON, loadData, readFile } from './utils';

class Sankey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      links: [],
      modalIsOpen: false
    };

    this.loadData = loadData.bind(this);
  }

  componentDidMount() {
    // Get the DOMElement that would be used to insert the chart
    var el = ReactDOM.findDOMNode(this).getElementsByClassName('Sankey')[0];

    this.loadData('');
  }

  componentDidUpdate() {
    var el = this.getDOMNode();
  }

  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount() {
    var el = this.getDOMNode();
  }

  render() {
    return (
      <div>
        <SankeyChart nodes={this.state.nodes} links={this.state.links} openModal={this.openModal}/>
      </div>
    )
  }
}

Sankey.propTypes = {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
};

export default Sankey;
