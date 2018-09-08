import React from 'react';
import ReactDOM from 'react-dom';

class Surface extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Get the DOMElement that would be used to insert the chart
    var el = ReactDOM.findDOMNode(this).getElementsByClassName('chart3')[0];

    // Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
    //     function unpack(rows, key) {
    //       return rows.map(function(row) { return row[key]; });
    //     }
          
    //     var z_data=[ ]
    //     for(let i=0;i<24;i++)
    //     {
    //       z_data.push(unpack(rows,i));
    //     }
        
    //     var data = [{
    //                z: z_data,
    //                type: 'surface'
    //             }];
          
    //     var layout = {
    //       title: 'Mt Bruno Elevation',
    //       autosize: false,
    //       width: 500,
    //       height: 500,
    //       margin: {
    //         l: 65,
    //         r: 50,
    //         b: 65,
    //         t: 90,
    //       }
    //     };
    //     Plotly.newPlot(el, data, layout);
    //     });

  }

  componentDidUpdate() {
      console.log("componentDidUpdate");
    // var el = this.getDOMNode();
    // d3Circle.update(el, this.getChartState());
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // var el = this.getDOMNode();
    // d3Circle.destroy(el);
  }

  render() {
    return (
      <div>
        <div className="Surface"></div>
      </div>
    )
  }
}

Surface.propTypes = {
};

export default Surface;
