document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const empId = document.getElementById('employeeId').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Dummy employee details
    const employeeDetails = {
        id: empId,
        name: 'John Doe',
        position: 'Software Engineer'
    };

    // Dummy leave data
    const leaveData = [
        { date: '2024-05-01', type: 'Sick Leave' },
        { date: '2024-05-15', type: 'Casual Leave' },
        { date: '2024-05-10', type: 'Sick Leave' },
        { date: '2024-05-25', type: 'Vacation' }
    ];

    // Filter leave data based on the given date range
    const filteredLeaveData = leaveData.filter(leave => leave.date >= startDate && leave.date <= endDate);

    // Display employee details
    document.getElementById('empIdDisplay').innerText = employeeDetails.id;
    document.getElementById('empName').innerText = employeeDetails.name;
    document.getElementById('empPosition').innerText = employeeDetails.position;
    document.getElementById('employeeDetails').classList.remove('hidden');

    // Display leave details
    const leaveList = document.getElementById('leaveList');
    leaveList.innerHTML = '';
    filteredLeaveData.forEach(leave => {
        const listItem = document.createElement('li');
        listItem.textContent = `${leave.date}: ${leave.type}`;
        leaveList.appendChild(listItem);
    });

    // Prepare data for the chart
    const leaveCounts = filteredLeaveData.reduce((acc, leave) => {
        acc[leave.type] = (acc[leave.type] || 0) + 1;
        return acc;
    }, {});

    const chartLabels = Object.keys(leaveCounts);
    const chartData = Object.values(leaveCounts);

    // Display leave chart
    const ctx = document.getElementById('leaveChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Number of Leaves',
                data: chartData,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
});
