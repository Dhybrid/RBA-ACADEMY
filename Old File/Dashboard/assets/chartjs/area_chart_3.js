//gradient area chart

const areaChart_3 = document.getElementById("areaChart_3").getContext('2d');

areaChart_3.height = 100;

new Chart(areaChart_3, {
    type: 'line',
    data: {
        defaultFontFamily: 'Poppins',
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "My First dataset",
                data: [25, 20, 60, 41, 66, 45, 80],
                borderColor: 'rgb(0, 171, 197)',
                borderWidth: "1",
                backgroundColor: 'rgba(0, 171, 197, .5)'
            }, 
            {
                label: "My First dataset",
                data: [5, 25, 20, 41, 36, 75, 70],
                borderColor: 'rgb(0, 0, 128)',
                borderWidth: "1",
                backgroundColor: 'rgba(0, 0, 128, .5)'
            }
        ]
    },
    options: {
        legend: false, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true, 
                    max: 100, 
                    min: 0, 
                    stepSize: 20, 
                    padding: 10
                }
            }],
            xAxes: [{ 
                ticks: {
                    padding: 5
                }
            }]
        }
    }
});


//gradient area chart

const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
//generate gradient
const areaChart_2gradientStroke = areaChart_2.createLinearGradient(500, 0, 100, 0);
areaChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
areaChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

areaChart_2.height = 100;

new Chart(areaChart_2, {
    type: 'line',
    data: {
        defaultFontFamily: 'Poppins',
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "My First dataset",
                data: [25, 20, 60, 41, 66, 45, 80],
                borderColor: areaChart_2gradientStroke,
                borderWidth: "1",
                backgroundColor: areaChart_2gradientStroke
            }
        ]
    },
    options: {
        legend: false, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true, 
                    max: 100, 
                    min: 0, 
                    stepSize: 20, 
                    padding: 10
                }
            }],
            xAxes: [{ 
                ticks: {
                    padding: 5
                }
            }]
        }
    }
});


// //gradient bar chart
// const barChart_2 = document.getElementById("barChart_2").getContext('2d');
// //generate gradient
// const barChart_2gradientStroke = barChart_2.createLinearGradient(0, 0, 0, 250);
// barChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
// barChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

// barChart_2.height = 100;

// new Chart(barChart_2, {
//     type: 'bar',
//     data: {
//         defaultFontFamily: 'Poppins',
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//         datasets: [
//             {
//                 label: "My First dataset",
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 borderColor: barChart_2gradientStroke,
//                 borderWidth: "0",
//                 backgroundColor: barChart_2gradientStroke, 
//                 hoverBackgroundColor: barChart_2gradientStroke
//             }
//         ]
//     },
//     options: {
//         legend: false, 
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }],
//             xAxes: [{
//                 // Change here
//                 barPercentage: 0.5
//             }]
//         }
//     }
// });



// //stalked bar chart
// const barChart_3 = document.getElementById("barChart_3").getContext('2d');
// //generate gradient
// const barChart_3gradientStroke = barChart_3.createLinearGradient(50, 100, 50, 50);
// barChart_3gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
// barChart_3gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

// const barChart_3gradientStroke2 = barChart_3.createLinearGradient(50, 100, 50, 50);
// barChart_3gradientStroke2.addColorStop(0, "rgba(56, 164, 248, 1)");
// barChart_3gradientStroke2.addColorStop(1, "rgba(56, 164, 248, 1)");

// const barChart_3gradientStroke3 = barChart_3.createLinearGradient(50, 100, 50, 50);
// barChart_3gradientStroke3.addColorStop(0, "rgba(40, 199, 111, 1)");
// barChart_3gradientStroke3.addColorStop(1, "rgba(40, 199, 111, 1)");

// barChart_3.height = 100;

// let barChartData = {
//     defaultFontFamily: 'Poppins',
//     labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//         label: 'Red',
//         backgroundColor: barChart_3gradientStroke,
//         hoverBackgroundColor: barChart_3gradientStroke, 
//         data: [
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12'
//         ]
//     }, {
//         label: 'Green',
//         backgroundColor: barChart_3gradientStroke2,
//         hoverBackgroundColor: barChart_3gradientStroke2, 
//         data: [
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12'
//         ]
//     }, {
//         label: 'Blue',
//         backgroundColor: barChart_3gradientStroke3,
//         hoverBackgroundColor: barChart_3gradientStroke3, 
//         data: [
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12',
//             '12'
//         ]
//     }]

// };
(jQuery);
