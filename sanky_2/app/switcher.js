
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
  

  updateRadio()

d3.select('#chart-selector-container').on('change', updateRadio);