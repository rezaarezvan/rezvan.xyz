const logContainer = document.getElementById('log-container');

function fetchLogs() {
    fetch('/logs/experiment1.json')
        .then(response => response.text())
        .then(data => {
            const logs = data.trim().split('\n').map(JSON.parse);
            displayLogs(logs);
        });
}

function displayLogs(logs) {
    logContainer.innerHTML = '';

    const latestLog = logs[logs.length - 1];
    const logElement = document.createElement('div');
    logElement.innerHTML = `
        <h2>${latestLog.experiment}</h2>
        <p>Timestamp: ${latestLog.timestamp}</p>
        <p>Loss: ${latestLog.metrics.loss}</p>
        <p>Accuracy: ${latestLog.metrics.accuracy}</p>
    `;
    logContainer.appendChild(logElement);

    const canvas = document.createElement('canvas');
    logContainer.appendChild(canvas);

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: logs.map(log => log.timestamp),
            datasets: [{
                label: 'Loss',
                data: logs.map(log => log.metrics.loss),
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Accuracy',
                data: logs.map(log => log.metrics.accuracy),
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        }
    });
}

fetchLogs();
