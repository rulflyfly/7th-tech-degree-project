const ctxLine = $('#line-chart');
const ctxBar = $('#bar-chart');
const ctxDoughnut = $('#doughnut-chart');


Chart.defaults.global.elements.point.radius = 4.5;
Chart.defaults.global.elements.point.backgroundColor = 'rgba(255, 255, 255)';
Chart.defaults.global.elements.point.borderColor = 'rgba(115, 119, 191)';
Chart.defaults.global.elements.point.borderWidth = 2;
Chart.defaults.global.elements.point.borderColor = 'rgba(115, 119, 191)';
Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.elements.line.backgroundColor = 'rgba(115, 119, 191, 0.3)';
Chart.defaults.global.elements.line.borderColor = 'rgba(115, 119, 191)';
Chart.defaults.global.elements.line.borderWidth = 2;
Chart.defaults.global.elements.rectangle.backgroundColor = 'rgb(115, 119, 191)';

const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        datasets: [{
            data: [
            {x: 'December 16, 2019 12:24:00', y: 250},  
            {x: 'December 22, 2019 06:24:00', y: 750}, 
            {x: 'December 29, 2019 10:12:00', y: 1250}, 
            {x: 'January 2, 2020 03:12:00', y: 1125}, 
            {x: 'January 9, 2020 02:12:00', y: 1500}, 
            {x: 'January 16, 2020 01:24:00', y: 2000}, 
            {x: 'January 23, 2020 10:24:00', y: 1500}, 
            {x: 'January 27, 2020 11:12:00', y: 1750}, 
            {x: 'February 6, 2020 05:24:00', y: 1250}, 
            {x: 'February 13, 2020 05:12:00', y: 1750}, 
            {x: 'February 20, 2020 08:24:00', y: 2250}, 
            {x: 'February 27, 2020 09:12:00', y: 1750}, 
            {x: 'March 3, 2020 04:24:00', y: 2250}]
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
            },
        scales: {
            yAxes: [{
                gridLines: {
                  offsetGridLines: true,
                  }
            }],
          xAxes: [{
            type: 'time',
            time: {
                unit: 'week'
            },
           }]
        }
        
    }
})


$('.hourly').on('click', () => {
    var hourly = [{x: 'December 16, 2019 00:12:00', y: 0}, 
                  {x: 'December 16, 2019 01:12:00', y: 250}, 
                  {x: 'December 16, 2019 02:12:00', y: 300}, 
                  {x: 'December 16, 2019 03:12:00', y: 200}, 
                  {x: 'December 16, 2019 04:12:00', y: 500}, 
                  {x: 'December 16, 2019 05:12:00', y: 700}, 
                  {x: 'December 16, 2019 06:12:00', y: 900}, 
                  {x: 'December 16, 2019 07:12:00', y: 700}, 
                  {x: 'December 16, 2019 08:12:00', y: 800}, 
                  {x: 'December 16, 2019 09:12:00', y: 900}, 
                  {x: 'December 16, 2019 10:12:00', y: 1000}, 
                  {x: 'December 16, 2019 11:12:30', y: 900}, 
                  {x: 'December 16, 2019 12:12:00', y: 1000}];

    lineChart.data.datasets.forEach((dataset) => {
        dataset.data = hourly;
    });
    
    lineChart.options.scales.xAxes[0] = {
        type: 'time',
            time: {
                unit: 'hour'
            }
    };
    lineChart.update();
});

$('.daily').on('click', () => {
    var daily = [{x: 'December 16, 2019 12:24:00', y: 250},  
                 {x: 'December 17, 2019 06:24:00', y: 1000}, 
                 {x: 'December 18, 2019 10:12:00', y: 700}, 
                 {x: 'December 19, 2019 03:12:00', y: 1125}, 
                 {x: 'December 20, 2019 02:12:00', y: 1500}, 
                 {x: 'December 21, 2019 01:24:00', y: 500}, 
                 {x: 'December 22, 2019 10:24:00', y: 900}, 
                 {x: 'December 23, 2019 11:12:00', y: 1750}, 
                 {x: 'December 24, 2019 05:24:00', y: 1250}, 
                 {x: 'December 25, 2019 05:12:00', y: 2000}, 
                 {x: 'December 26, 2019 08:24:00', y: 2250}, 
                 {x: 'December 27, 2019 09:12:00', y: 1750}, 
                 {x: 'December 28, 2019 04:24:00', y: 600}];

    lineChart.data.datasets.forEach((dataset) => {
        dataset.data = daily;
    });
    
    lineChart.options.scales.xAxes[0] = {
        type: 'time',
            time: {
                unit: 'day'
            }
    };
    lineChart.update();
});



$('.weekly').on('click', () => {
    var weekly = [{x: 'December 16, 2019 12:24:00', y: 250},  
                  {x: 'December 22, 2019 06:24:00', y: 750}, 
                  {x: 'December 29, 2019 10:12:00', y: 1250}, 
                  {x: 'January 2, 2020 03:12:00', y: 1125}, 
                  {x: 'January 9, 2020 02:12:00', y: 1500}, 
                  {x: 'January 16, 2020 01:24:00', y: 2000}, 
                  {x: 'January 23, 2020 10:24:00', y: 1500}, 
                  {x: 'January 27, 2020 11:12:00', y: 1750}, 
                  {x: 'February 6, 2020 05:24:00', y: 1250}, 
                  {x: 'February 13, 2020 05:12:00', y: 1750}, 
                  {x: 'February 20, 2020 08:24:00', y: 2250}, 
                  {x: 'February 27, 2020 09:12:00', y: 1750}, 
                  {x: 'March 3, 2020 04:24:00', y: 2250}];

    lineChart.data.datasets.forEach((dataset) => {
        dataset.data = weekly;
    });
    
    lineChart.options.scales.xAxes[0] = {
        type: 'time',
            time: {
                unit: 'week'
            }
    };
    lineChart.update();
});

$('.monthly').on('click', () => {
    var monthly = [{x: 'December 16, 2019 12:24:00', y: 250},  
                   {x: 'December 29, 2019 06:24:00', y: 750}, 
                   {x: 'January 9, 2020 10:12:00', y: 550}, 
                   {x: 'January 30, 2020 03:12:00', y: 1125}, 
                   {x: 'February 14, 2020 02:12:00', y: 1000}, 
                   {x: 'February 28, 2020 01:24:00', y: 2000}, 
                   {x: 'March 23, 2020 10:24:00', y: 1500}, 
                   {x: 'April 27, 2020 11:12:00', y: 750}, 
                   {x: 'May 6, 2020 05:24:00', y: 250}, 
                   {x: 'May 31, 2020 05:12:00', y: 550}, 
                   {x: 'June 20, 2020 08:24:00', y: 1250}, 
                   {x: 'July 27, 2020 09:12:00', y: 2750}, 
                   {x: 'August 3, 2020 04:24:00', y: 2250}];

    lineChart.data.datasets.forEach((dataset) => {
        dataset.data = monthly;
    });
    
    lineChart.options.scales.xAxes[0] = {
        type: 'time',
            time: {
                unit: 'month'
            }
    };
    lineChart.update();
});

const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
    }],
    },
    options: {
        legend: {
          display: false,
            },
        scales: {
            yAxes: [{
                gridLines: {
                  offsetGridLines: true,
                  },
                  ticks: {
                    beginAtZero: true,
                }
            }],
        }
    }
})

const doughnutChart = new Chart(ctxDoughnut, {
    type: 'pie',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        data: [20, 20, 60],
        backgroundColor: [
            'rgb(129, 201, 143)',
            'rgb(116, 177, 191)',
            'rgb(115, 119, 191)'
       ]
    }]
  },
  options: {
      legend: {
          position: 'right'
      },
   	cutoutPercentage: 40
 }
})

