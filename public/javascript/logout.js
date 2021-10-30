async function logoutHandler(event) {
    event.preventDefault();
  
      const response = await fetch('/api/users/logout', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
  };

document.getElementById('logout').addEventListener('click', logoutHandler);