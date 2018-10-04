/*
var coll = document.getElementsByClassName("collapsible");
var ind;

for (ind = 0; ind < coll.length; ind++) 
{
    coll[ind].addEventListener("click", function() 
    {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") 
        {
            content.style.display = "none";
        } 
        else 
        {
            content.style.display = "block";
        }
    });
}
*/
document.getElementById("Console-toggle").addEventListener("click", function() 
{
    this.classList.toggle("collapse-active");
    var content = document.getElementById("Console-body");
    if (content.style.display === "block") 
    {
        content.style.display = "none";
    } 
    else 
    {
        content.style.display = "block";
    }
});

document.getElementById("UserInfo-toggle").addEventListener("click", function() 
{
    this.classList.toggle("collapse-active");
    var content = document.getElementById("UserInfo-body");
    if (content.style.display === "block") 
    {
        content.style.display = "none";
    } 
    else 
    {
        content.style.display = "block";
    }
});

document.getElementById("Analytics-toggle").addEventListener("click", function() 
{
    this.classList.toggle("collapse-active");
    var content = document.getElementById("Analytics-body");
    if (content.style.display === "block") 
    {
        content.style.display = "none";
    } 
    else 
    {
        content.style.display = "block";
    }
});

function closeConsole()
{
    
}

function initiate()
{
    brfv4Example.start();
    //Enter is equivalent to button click
    document.querySelector("#Console-input").addEventListener("keypress", function(e)
    {
        var key = e.which || e.keyCode;
        if(key === 13)
        {   
            var query = '> '+document.getElementById('Console-input').value;
            document.getElementById('Console-input').value = "";
            console.log(query);
            typeOnConsole(query);
        }
    });
    
    $.ajax('http://ip-api.com/json')
    .then(
    function success(response) 
    {
        //console.log('User\'s Location Data is ', response);
        //console.log('User\'s Country', response.country);
        //addUserData(response);
        console.log(response);
    },

    function fail(data, status) 
    {
        console.log('Request failed.  Returned status of',status);
    });
    
    SADDNESS();
    HAPPINESS();
    SURPRISE();
    DISGUST();
    FEAR();
    ANGER();
    GAUGE1();
    
    HighStock();
	
    $('.slick-carousel').slick({
      infinite: true,
      vertical:true,
      verticalSwiping:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.top-arrow'),
      nextArrow: $('.bottom-arrow')
    });
}

 function SADDNESS() {
 	var SaddnessChart = document.getElementById('SaddnessChart').getContext('2d');
 	var grd = SaddnessChart.createLinearGradient(0, 0, 170, 0);grd.addColorStop(0, "#1d4350");grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var SADChart = new Chart(SaddnessChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataSADDNESS(SADChart, [45, 55], 0);
 	}, 2000);

 	function addDataSADDNESS(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function HAPPINESS() {
 	var HappinessChart = document.getElementById('HappinessChart')
 		.getContext('2d');
 	var grd = HappinessChart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(HappinessChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataHappiness(myDoughnutChart, [25, 75], 0);
 	}, 2000);

 	function addDataHappiness(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function SURPRISE() {
 	var SurpriseChart = document.getElementById('SurpriseChart')
 		.getContext('2d');
 	var grd = SurpriseChart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(SurpriseChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataSurprise(myDoughnutChart, [15, 85], 0);
 	}, 2000);

 	function addDataSurprise(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function DISGUST() {
 	var DisgustChart = document.getElementById('DisgustChart')
 		.getContext('2d');
 	var grd = DisgustChart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(DisgustChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataDisgust(myDoughnutChart, [55, 85], 0);
 	}, 2000);

 	setTimeout(function() {
 		addDataDisgust(myDoughnutChart, [85, 55], 0);
 	}, 4000);

 	function addDataDisgust(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function FEAR() {
 	var FearChart = document.getElementById('FearChart')
 		.getContext('2d');
 	var grd = FearChart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(FearChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataFear(myDoughnutChart, [35, 85], 0);
 	}, 2000);

 	function addDataFear(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function ANGER() {
 	var AngerChart = document.getElementById('AngerChart')
 		.getContext('2d');
 	var grd = AngerChart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931");
 	var data = {
 		datasets: [{
 			data: [10, 90],
 			backgroundColor: ["#eb3349", grd],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(AngerChart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataAnger(myDoughnutChart, [95, 85], 0);
 	}, 2000);

 	function addDataAnger(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

 function GAUGE1() {
 	var Gauge1Chart = document.getElementById('Gauge1').getContext('2d');
 	var grd = Gauge1Chart.createLinearGradient(0, 0, 170, 0);
 	grd.addColorStop(0, "#1d4350");
 	grd.addColorStop(1, "#a43931"); 	
     
    var grd2 = Gauge1Chart.createLinearGradient(0, 0, 170, 0);
 	grd2.addColorStop(0, "#77a1d3");
 	grd2.addColorStop(1, "#79cbca");
     

 	var data = {
 		datasets: [{
 			data: [10, 90, 35],
 			backgroundColor: ["#eb3349", grd,grd2],
 			fill: true,
 			borderColor: "#212121"
 		}]
 	};
 	var myDoughnutChart = new Chart(Gauge1Chart, {
 		type: 'doughnut',
 		data: data,
 		options: {}
 	});
 	setTimeout(function() {
 		addDataGauge1(myDoughnutChart, [95, 85, 70], 0);
 	}, 2000);

 	function addDataGauge1(chart, data, datasetIndex) {
 		chart.data.datasets[datasetIndex].data = data;
 		chart.update();
 	}
 }

function addUserData(RESPONSE)
{
			var content = '';
    
            content +='<tr><td><span class="TableLeft">IPAddress</span>';
            content +='<span class="TableRight">'+RESPONSE.query+'</span></td></tr>';
                
            content +='<tr><td><span class="TableLeft">Country</span>';
            content +='<span class="TableRight">'+RESPONSE.country+'</span></td></tr>';
                
            content +='<tr><td><span class="TableLeft">City</span>';
            content +='<span class="TableRight">'+RESPONSE.city+'</span></td></tr>';
                
            content +='<tr><td><span class="TableLeft">Time Zone</span>';
            content +='<span class="TableRight">'+RESPONSE.timezone+'</span></td></tr>';
                
            content +='<tr><td><span class="TableLeft">Latitude</span>';
            content +='<span class="TableRight">'+RESPONSE.lat+'</span></td></tr>';
                
            content +='<tr><td><span class="TableLeft">Longitude</span>';
            content +='<span class="TableRight">'+RESPONSE.lon+'</span></td></tr>';
			//tablCon += '</div></div>';
			//console.log("HI");
			
			$('#UserInfo-table').append(content);
}

function typeOnConsole(str)
{
    var console = document.getElementById('mCSB_1_container');
    var text     = document.createElement("h1");
    var textData = document.createTextNode(str);
    text.appendChild(textData);
    console.appendChild(text);
}

function HighStock()
{

    Highcharts.theme = {
        colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 1
                },
                stops: [
                [0, '#212121'],
                [1, '#212121']
            ]
            },
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            },
            plotBorderColor: '#606063'
        },
        title: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'

                }
            }
        },
        yAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            tickWidth: 1,
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#B0B0B3'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#505053'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },

        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },

        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        },

        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#707073',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#000003',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },

        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },

        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        },

        // special colors for some of the
        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        background2: '#505053',
        dataLabelsColor: '#B0B0B3',
        textColor: '#C0C0C0',
        contrastTextColor: '#F0F0F3',
        maskColor: 'rgba(255,255,255,0.3)'
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
    // Create the chart
    Highcharts.stockChart('containerHighStock', {
        chart: {
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.round(Math.random() * 100);
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        time: {
            useUTC: false
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
        }, {
                count: 5,
                type: 'minute',
                text: '5M'
        }, {
                type: 'all',
                text: 'All'
        }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: ''
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
                }
                return data;
            }())
    }]
    });
    

}