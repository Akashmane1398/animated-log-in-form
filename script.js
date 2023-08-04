document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
    } else {
      // Add the 'shake' class to the container
      document.querySelector('.container').classList.add('shake');
  
      // Remove the 'shake' class after the animation ends
      setTimeout(function() {
        document.querySelector('.container').classList.remove('shake');
      }, 500);
    }
  });
  