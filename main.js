/* ---------------------------------------------------------------------
Global JavaScript & jQuery

Target Browsers: 
Authors: 
------------------------------------------------------------------------ */
var Snippet = Snippet || {};

jQuery(document).ready(function($) {
	Snippet.AutoCharts.init();
	Snippet.Collapser.init();
});

/* ---------------------------------------------------------------------
AutoCharts
Author: Nick Charbonneau
Controls All charts.
------------------------------------------------------------------------ */
Snippet.AutoCharts = {
	
	init:function() {
		
		if($("#meter").length > 0) {
			
			var meterData = [
		                {
		                    value: 30,
		                    color:"#d54444"
		                },
		                {
		                    value : 50,
		                    color : "#eb9d16"
		                },
		                {
		                    value : 100,
		                    color : "#58bc33"
		                }

		            ];

		    var meterOptions = 
		                {
		                    segmentStrokeWidth:3,
		                    arrowPos: 80, //out of 100%
		                    arrowWidth: 2,
		                    arrowLength: 10,
		                    arrowColor: '#ffffff'
		                };
			
			
			var myMeter = new Chart(document.getElementById("meter").getContext("2d")).Meter(meterData, meterOptions);
		}
		
			
		var pieData = [
	                {
	                    value: 82,
	                    color: '#506985'
	                },
	                {
	                    value: 18,
	                    color: '#dfe6ec'
	                }
	            ];

	    var pieOptions = 
	                {
	                    segmentShowStroke : false,
						animation : false
	                };

		var pieData2 = [
	                {
	                    value: 31,
	                    color: '#506985'
	                },
	                {
	                    value: 69,
	                    color: '#dfe6ec'
	                }
	            ];

		var pieData3 = [
	                {
	                    value: 80,
	                    color: '#506985'
	                },
	                {
	                    value: 20,
	                    color: '#dfe6ec'
	                }
	            ];


		var pieData4 = [
	                {
	                    value: 42,
	                    color: '#506985'
	                },
	                {
	                    value: 52,
	                    color: '#dfe6ec'
	                }
	            ];

		var pieData5 = [
	                {
	                    value: 95,
	                    color: '#506985'
	                },
	                {
	                    value: 110,
	                    color: '#dfe6ec'
	                }
	            ];


		var pieData6 = [
	                {
	                    value: 4,
	                    color: '#506985'
	                },
	                {
	                    value: 5,
	                    color: '#dfe6ec'
	                }
	            ];


		if($('#pie').length > 0) {
			var myPie = new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData, pieOptions);
		}
	
		if($('#pie2').length > 0) {
			var myPie2 = new Chart(document.getElementById("pie2").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie3').length > 0) {
			var myPie3 = new Chart(document.getElementById("pie3").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie4').length > 0) {
			var myPie4 = new Chart(document.getElementById("pie4").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie5').length > 0) {
			var myPie5 = new Chart(document.getElementById("pie5").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie6').length > 0) {
			var myPie6 = new Chart(document.getElementById("pie6").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie7').length > 0) {
			var myPie7 = new Chart(document.getElementById("pie7").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie8').length > 0) {
			var myPie8 = new Chart(document.getElementById("pie8").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie9').length > 0) {
			var myPie9 = new Chart(document.getElementById("pie9").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie10').length > 0) {
			var myPie10 = new Chart(document.getElementById("pie10").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie11').length > 0) {
			var myPie11 = new Chart(document.getElementById("pie11").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie12').length > 0) {
			var myPie12 = new Chart(document.getElementById("pie12").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie13').length > 0) {
			var myPie13 = new Chart(document.getElementById("pie13").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie14').length > 0) {
			var myPie14 = new Chart(document.getElementById("pie14").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie15').length > 0) {
			var myPie15 = new Chart(document.getElementById("pie15").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie16').length > 0) {
			var myPie16 = new Chart(document.getElementById("pie16").getContext("2d")).Pie(pieData2, pieOptions);
		}
	
		if($('#pie17').length > 0) {
			var myPie17 = new Chart(document.getElementById("pie17").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie18').length > 0) {
			var myPie18 = new Chart(document.getElementById("pie18").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie19').length > 0) {
			var myPie19 = new Chart(document.getElementById("pie19").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie20').length > 0) {
			var myPie20 = new Chart(document.getElementById("pie20").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie21').length > 0) {
			var myPie21 = new Chart(document.getElementById("pie21").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie22').length > 0) {
			var myPie22 = new Chart(document.getElementById("pie22").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie23').length > 0) {
			var myPie23 = new Chart(document.getElementById("pie23").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($('#pie24').length > 0) {
			var myPie24 = new Chart(document.getElementById("pie24").getContext("2d")).Pie(pieData2, pieOptions);
		}
		
		if($("#chart1").length > 0) {
			
		    var chartData = {
		        chartName : "Complient Patients",
		        labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
		        fullLabels : ["January 2013","February 2013","March 2013","April 2013","May 2013","June 2013","July 2013","August 2013","September 2013","October 2013","November 2013","December 2013"],
		        datasets : [
		            {
		                name: "Medicare Shared Savings Program",
		                strokeColor : "#5e9ce5",
		                pointColor : "#5e9ce5",
		                pointStrokeColor : "#fff",
		                data : [4,8,46,32,48,52,48,60,50,,,],
		                defaultVisible: false
		            },
		            {
		                name: "dataset 2",
		                strokeColor : "#44b919",
		                pointColor : "#44b919",
		                pointStrokeColor : "#fff",
		                data : [21,29,29,27,34,40,34,32,37,41,46,53],
		                defaultVisible: false
		            },
		            {
		                name: "dataset 3",
		                strokeColor : "#f7641c",
		                pointColor : "#f7641c",
		                pointStrokeColor : "#fff",
		                data : [9,13,21,21,32,38,33,35,38,44,52,62],
		                defaultVisible: true
		            },
		            {
		                name: "dataset 4",
		                strokeColor : "#9244d5",
		                pointColor : "#9244d5",
		                pointStrokeColor : "#fff",
		                data : [,,,,,60,55,50,45,40,35,30],
		                defaultVisible: true
		            },
		            {
		                name: "dataset 5",
		                strokeColor : "#d54444",
		                pointColor : "#d54444",
		                pointStrokeColor : "#fff",
		                data : [50,,,70,65,20,,,,80,,26],
		                defaultVisible: false
		            },
		            {
		                name: "dataset 6",
		                strokeColor : "#0f3c87",
		                pointColor : "#0f3c87",
		                pointStrokeColor : "#fff",
		                data : [26,38,45,40,38,38,34,22,,4,18,21],
		                defaultVisible: true
		            },
		            {
		                name: "dataset 7",
		                strokeColor : "#c2b2ff",
		                pointColor : "#c2b2ff",
		                pointStrokeColor : "#fff",
		                data : [,,,,,10,90,10,,,,],
		                defaultVisible: false
		            },
		            {
		                name: "dataset 8",
		                strokeColor : "#9f3c00",
		                pointColor : "#9f3c00",
		                pointStrokeColor : "#fff",
		                data : [6,2,3,12,8,6,4,9,1,8,5,10],
		                defaultVisible: false
					}
		        ],
		        goals : [ 
		            {
		                name: 'ACO Goal 65%',
		                value: 65,
		                strokeColor: '#40a71a'
		            },
		            {
		                name: 'Contract Target 35%',
		                value: 35,
		                strokeColor: '#565d66'
		            }
		        ],
		        //Area to show normal or average values
		        areaSet : {
		            topBound: [20,,30,,35,40,45,48,48,52,56,67],
		            botBound: [14,17,,,,,20,,,22,,30],
		            fillColor: "#cdd1d4"

		        },
		        //Averages line without points
		        meanLine : {
		            strokeColor : "#515860",
		            data : [17,20,27,,31,,41,40,44,49,,60]
		        }

		    };

    		var chartOptions = {
                        scaleOverlay : true,
                        scaleOverride : true,
                        scaleSteps : 5,
                        scaleStepWidth : 20,
                        scaleStartValue : 0,
                        scaleLineColor : "#bfc4c9", 
                        scaleGridLineColor : "#bfc4c9",
                        scaleLabel : "<%=value%>%",
                        scaleFontStyle : "bold",
                        bezierCurve : false,
                        datasetFill : false
                    };
			
			var myChart = new Chart(document.getElementById("chart1").getContext("2d")).Trend(chartData, chartOptions);
		}
		
		if($("#meter").length > 0) {
			var meterData = [
		                {
		                    value: 30,
		                    color:"#d54444"
		                },
		                {
		                    value : 50,
		                    color : "#eb9d16"
		                },
		                {
		                    value : 100,
		                    color : "#58bc33"
		                }

		            ];

		    var meterOptions = 
		                {
		                    segmentStrokeWidth:3,
		                    arrowPos: 80, //out of 100%
		                    arrowWidth: 6,
		                    arrowLength: 15,
		                    arrowColor: '#ffffff'
		                };
		
			var myMeter = new Chart(document.getElementById("meter").getContext("2d")).Meter(meterData, meterOptions);
		}
	
	}
};

/* ---------------------------------------------------------------------
Collapser
Author: Nick Charbonneau
Class toggler for Collapse/Expand elements like the Trending Chart
------------------------------------------------------------------------ */

Snippet.Collapser = {
    $options: {
        triggerClass:       'collapse-btn',
        contentContainer:   'collapsable',
        activeClass:        'is-active'
    },
    init: function(opt) {
        var self = this;
        self.$options = $.extend( self.$options, opt);
        if( $( '.'+self.$options.triggerClass ).length > 0 ){
            self.bind();
        }
    },
    bind: function() {
        var self = this;
        $( '.'+self.$options.triggerClass ).on('click', function(e){
            $(this).parents( '.'+self.$options.contentContainer )
                .toggleClass( self.$options.activeClass );

            if($(this).parents( '.'+self.$options.contentContainer ).hasClass(self.$options.activeClass) ){
            	$(this).addClass(self.$options.activeClass).text('Collapse')
            } else {
            	$(this).removeClass(self.$options.activeClass).text('Expand')
            }

            e.preventDefault();
        });
    }
};



