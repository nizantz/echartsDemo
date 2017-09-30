var chartdata=[{
            name: 'Oranges',
            type: 'bar',
            data: [20, 20, 36, 12, 15, 20]
          },
          {
            name: 'Apples',
            type: 'bar',
            data: [8, 5, 25, 10, 10, 13]
          },{
            name: 'Strawberries',
            type: 'bar',
            data: [8, 5, 20, 10, 7, 15]
          },
          {
            name: 'Mangoes',
            type: 'bar',
            data: [8, 5, 20, 10, 7, 15]
          }
          ];
var legendData = chartdata.map(function(d){return d.name;});
var chart = document.getElementById('chart');
        var myChart = echarts.init(chart);
        var option = {
          title: { text: 'eCharts:Bar',
                 textStyle:{
                          color:'#fff'
                  }
                 },
          toolbox: {
        show : true,
        
        feature : {
            dataView : {show: true, title:'Data View', readOnly: false},
            magicType : {show: false, title:['line','bar'],type: ['line', 'bar']},
            restore : {show: true, title:'Restore'},
            saveAsImage : {show: true, title:"Save As Image"}
        }
    },
          tooltip: { 
                  backgroundColor:'rgba(250,250,250,0.7)',
                  textStyle:{
                              color:'#000'
                             }                  
                   },
          legend: { orient:'vertical',
                   textStyle:{
                              color:'#fff'
                              },
                   left:'30',
                   top:'100',
           data: legendData
                  },
          xAxis: { data: [ "2006", "2008", "2010", "2012", "2014", "2016" ] },
          yAxis: { },
          series: chartdata,
          backgroundColor:'rgba(0, 0, 0, 1)',
          textStyle:{
            color:'#fff'
          },
          color:[ '#FF9800', '#ef5350','#F48FB1','#81C784','#c4ccd3','#c23531','#2f4554','#61a0a8','#d48265','#91c7ae','#749f83']
        };
        myChart.setOption(option);