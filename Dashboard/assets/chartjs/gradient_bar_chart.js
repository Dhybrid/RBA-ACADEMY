//gradient bar chart
const barChart_2 = document.getElementById("barChart_2").getContext('2d');
//generate gradient
const barChart_2gradientStroke = barChart_2.createLinearGradient(0, 0, 0, 250);
barChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
barChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");

barChart_2.height = 100;

new Chart(barChart_2, {
    type: 'bar',
    data: {
        defaultFontFamily: 'Poppins',
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: barChart_2gradientStroke,
                borderWidth: "0",
                backgroundColor: barChart_2gradientStroke, 
                hoverBackgroundColor: barChart_2gradientStroke
            }
        ]
    },
    options: {
        legend: false, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
                barPercentage: 0.5
            }]
        }
    }
});