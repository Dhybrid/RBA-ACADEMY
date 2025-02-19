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