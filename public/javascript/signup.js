async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const emailConfirm = document.querySelector('#email-signup-confirm').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim();


  if (email && emailConfirm && password && passwordConfirm) {
    const response = await fetch('/api/users', {
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
      alert('Please make sure your Email and Password are confirmed correctly!');
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);