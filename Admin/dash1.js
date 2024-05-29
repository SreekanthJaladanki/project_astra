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

  // Display employee details
  document.getElementById('empIdDisplay').innerText = employeeDetails.id;
  document.getElementById('empName').innerText = employeeDetails.name;
  document.getElementById('empPosition').innerText = employeeDetails.position;
  document.getElementById('employeeDetails').classList.remove('hidden');

  // Dummy data for charts
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data1 = [65, 59, 80, 81, 56, 55, 40];
  const data2 = [28, 48, 40, 19, 86, 27, 90];
  const data3 = [18, 48, 77, 9, 100, 27, 40];

  const ctx1 = document.getElementById('chart1').getContext('2d');
  const ctx2 = document.getElementById('chart2').getContext('2d');
  const ctx3 = document.getElementById('chart3').getContext('2d');

  new Chart(ctx1, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Dataset 1',
              data: data1,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false
          }]
      }
  });

  new Chart(ctx2, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Dataset 2',
              data: data2,
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: false
          }]
      }
  });

  new Chart(ctx3, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Dataset 3',
              data: data3,
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
              fill: false
          }]
      }
  });
});
