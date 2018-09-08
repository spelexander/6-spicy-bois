
// Reads sanky data
//console.log(energyjson);
//console.log("You done goof'd");
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

var objSankey = sk.createSankey('#chart1', configSankey, energyjson);
