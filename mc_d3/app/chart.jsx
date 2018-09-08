import React from 'react';
import ReactDOM from 'react-dom';
import d3Circle from './d3_circle.js';
import style from './sankey.css';
import SankeyChart from './SankeyChart';
import { ExportJSON, ImportJSON, loadData, readFile } from './utils';

class Chart extends React.Component {
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
    var el = ReactDOM.findDOMNode(this).getElementsByClassName('Chart')[0];

    this.loadData('');

    d3Circle.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  }

  componentDidUpdate() {
    var el = this.getDOMNode();
    d3Circle.update(el, this.getChartState());
  }

  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount() {
    var el = this.getDOMNode();
    d3Circle.destroy(el);
  }

  render() {
    return (
      <div>
        <h1>Six Spicy Boys</h1>
        <div className="Chart"></div>
        <SankeyChart nodes={this.state.nodes} links={this.state.links} openModal={this.openModal}/>
      </div>
    )
  }
}

Chart.propTypes = {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
};

export default Chart;
