import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2
        },
    },

    scales: {
        y: {
            max: 16,
            min: 0,
            ticks: {
                stepSize: 2
            }
        }
    },

    responsive: true,

    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
};

const Chart = () => {
    const [data ] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [7, 14, 5, 7, 15, 10, 4, 8, 10, 3, 7, 9],
                borderColor: 'green',
                backgroundColor: 'lightgreen',
            },
        ],
    });


    return (
        <div style={{ width: '50%', height: '100%', margin: '50px 0px 0px 360px' }} className="graph">

            <h2>Posts Per Month</h2>
            <Bar data={data} options={options} />
        </div>)
}
export default Chart;