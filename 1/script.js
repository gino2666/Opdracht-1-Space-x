	
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
    {
    label: "Population (millions)",
    backgroundColor: ["#840404", "#ec100c","#ff853e","#ab0f15","#ff6517"],
    data: [21,18,19,20,24]
    }
    ]
    },
    options: {
    responsive: true,
    title: {
    display: true,
    text: 'World Population traveling'
    }
    }
    });
    
	new Chart(document.getElementById("bar-chart-horizontal"), {
		type: 'horizontalBar',
		data: {
		labels: ["Water", "Food", "Snacks", "Soda", "Fruit"],
		datasets: [
			{
			label: "Food",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			data: [1478,1267,1034,1264,1133]
			}
		]
		},
		options: {
		legend: { display: false },
		title: {
			display: true,
			text: ''
		}
		}
	});
