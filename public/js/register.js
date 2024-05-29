document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const empId = document.getElementById('emp-id').value;
    const officialMail = document.getElementById('official-mail').value;
    const personalMail = document.getElementById('personal-mail').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const designation = document.getElementById('designation').value;
    const subject = document.getElementById('subject').value;
    const dateOfJoining = document.getElementById('date-of-joining').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          empId,
          officialMail,
          personalMail,
          phoneNumber,
          designation,
          subject,
          dateOfJoining,
          dateOfBirth,
          password,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Registration Successful!');
        window.location.href = "login.html";
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  });
  