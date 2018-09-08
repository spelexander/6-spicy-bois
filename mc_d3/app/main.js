import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.jsx';
import Sankey from './sankey.jsx';
import Surface from './surface.jsx'
import './styles.css'
import './base-theme.css'
import d3 from 'd3';

var sampleData1 = [
  {id: '100', x: 7, y: 25, z: 18},
  {id: '200', x: 11, y: 45, z: 30}
];
var sampleData2= [
  {id: '100', x: 1, y: 50, z: 10},
  {id: '200', x: 5, y: 45, z: 30}
];
var sampleDomain = {x: [0, 30], y: [0, 100]};

var updateRadio = function() {
  //find out which was selected
  var chartSelected = document.querySelector('input[name=chart-selector]:checked', '#chart-selector').value; 
  
  //turn all off
  var charts = document.getElementById('charts').childNodes;
  var chartsArray = Array.prototype.slice.call(charts);
  chartsArray.forEach(element => {
    if(element.tagName == "DIV"){
      element.style.display = 'none';
    }
  });

  //turn selected on
  document.getElementById(chartSelected).style.display = 'block';
}

ReactDOM.render(

    <Chart
    data={sampleData1}
    domain={sampleDomain} />
  , document.getElementById("chart1"));

// ReactDOM.render(

//   <Sankey />
//   , document.getElementById("chart2"));

ReactDOM.render(

    <Surface />
   , document.getElementById("chart3"));



d3.select('#chart-selector-container').on('change', updateRadio);
