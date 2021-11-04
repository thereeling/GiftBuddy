async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#icon_email').value.trim();
    const password = document.querySelector('#icon_password').value.trim();
    
    if (email && password) {
      
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

async function signupRedirect (event) {
  event.preventDefault();
  document.location.replace('/signup');
  }
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.getElementById('signup-redirect').addEventListener('click', signupRedirect);







  