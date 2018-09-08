import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.jsx';
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
  var chartSelected = document.querySelector('input[name=chart-selector]:checked', '#chart-selector').value; 
  console.log('chartSelected:', chartSelected);
  switch(chartSelected){
    case 'chart1':
      document.getElementById(chartSelected).style.display = 'block';
      document.getElementById('chart2').style.display = 'none';
      break;
    case 'chart2':
      document.getElementById(chartSelected).style.display = 'block';
      document.getElementById('chart1').style.display = 'none';
      break;
  }
}

ReactDOM.render(

    <Chart
    data={sampleData1}
    domain={sampleDomain} />
  , document.getElementById("chart1"));

ReactDOM.render(

    <Chart
    data={sampleData2}
    domain={sampleDomain} />
  , document.getElementById("chart2"));



d3.select('#chart-selector-container').on('change', updateRadio);
