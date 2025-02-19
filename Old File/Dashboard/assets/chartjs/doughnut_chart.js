//doughut chart
const doughnut_chart = document.getElementById("doughnut_chart").getContext('2d');
// doughnut_chart.height = 100;
new Chart(doughnut_chart, {
    type: 'doughnut',
    data: {
        defaultFontFamily: 'Poppins',
        datasets: [{
            data: [45, 25, 20, 10],
            borderWidth: 0, 
            backgroundColor: [
                "rgba(0, 0, 128, .9)",
                "rgba(0, 0, 128, .7)",
                "rgba(0, 0, 128, .5)",
                "rgba(0, 0, 128, .4)"
            ],
            hoverBackgroundColor: [
                "rgba(0, 0, 128, .5)",
                "rgba(0, 0, 128, .4)",
                "rgba(0, 0, 128, .3)",
                "rgba(0, 0, 128, .2)"
            ]

        }],
        // labels: [
        //     "green",
        //     "green",
        //     "green",
        //     "green"
        // ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});