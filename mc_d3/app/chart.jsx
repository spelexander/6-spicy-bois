import React from 'react';
import ReactDOM from 'react-dom';
import d3Circle from './d3_circle.js';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Get the DOMElement that would be used to insert the chart
    var el = ReactDOM.findDOMNode(this).getElementsByClassName('Chart')[0];

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
        <div className="Chart"></div>
      </div>
    )
  }
}

Chart.propTypes = {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
};

export default Chart;
