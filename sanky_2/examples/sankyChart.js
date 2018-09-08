var fs = require('fs');

var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
consol.console.log(data);

var configSankey = {
    margin: { top: 10, left: 10, right: 10, bottom: 10 },
    nodes: {
      dynamicSizeFontNode: {
        enabled: true,
        minSize: 14,
        maxSize: 30
      },
      draggableX: false, // default [ false ]
      draggableY: true, // default [ true ]
      colors: d3.scaleOrdinal(d3.schemeCategory10)
    },
    links: {
      formatValue: function(val) {
        return d3.format(",.0f")(val) + ' TWh';
      }
    },
    tooltip: {
      infoDiv: true,
      labelSource: 'Input:',
      labelTarget: 'Output:'
    }
}

var objSankey = sk.createSankey('#chart', configSankey, data);
