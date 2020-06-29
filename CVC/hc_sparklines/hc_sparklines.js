define(['jquery_hc','hchart'], function ($, Highcharts) {

	 return function (instanceData) {	
		
	 			
				var data = [];

                var series0 = instanceData.series[0];
                for (var index = 0; index < series0.length; ++index) {
                    var record = series0[index];
                   data.push(record.value);
                }

               // Create the chart
               var config = {
                       chart: {
                       renderTo: instanceData.id,
                       backgroundColor: null,
                       borderWidth: 0,
                       type: 'area',
                       margin: [2, 0, 2, 0],
                       width: instanceData.width,
                       height: instanceData.height,
                       style: {
                           overflow: 'visible'
                       },
                       skipClone: true
                       },
                       title: {
                           text: ''
                       },
                       credits: {
                           enabled: false
                       },
                       xAxis: {
                           labels: {
                               enabled: false
                           },
                           title: {
                               text: null
                           },
                           startOnTick: false,
                           endOnTick: false,
                           tickPositions: []
                       },
                       yAxis: {
                           endOnTick: false,
                           startOnTick: false,
                           labels: {
                               enabled: false
                           },
                           title: {
                               text: null
                           },
                           tickPositions: [0]
                       },
                       legend: {
                           enabled: false
                       },
                       tooltip: {
                           backgroundColor: null,
                           borderWidth: 0,
                           shadow: false,
                           useHTML: true,
                           hideDelay: 0,
                           shared: true,
                           padding: 0,
                           positioner: function (w, h, point) {
                               return { x: point.plotX - w / 2, y: point.plotY - h};
                           },
                           headerFormat: '<span style="font-size: 10px">' + "Tooltip" + ', Q{point.x}:</span><br/>',
                           pointFormat: '<b>{point.y}.000</b> USD'
                       },
                       plotOptions: {
                           series: {
                               animation: false,
                               lineWidth: 1,
                               shadow: false,
                               states: {
                                   hover: {
                                       lineWidth: 1
                                   }
                               },
                               marker: {
                                   radius: 1,
                                   states: {
                                       hover: {
                                           radius: 2
                                       }
                                   }
                               },
                               fillOpacity: 1
                           },
                           column: {
                               negativeColor: '#910000',
                               borderColor: 'silver'
                           }
                       },
                       series: [{
                           data: data,
                           pointStart: 1
                       }],
                   };

                   new Highcharts.Chart(config);
		
	};
		
});

