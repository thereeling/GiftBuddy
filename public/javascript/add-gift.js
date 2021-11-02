async function addGiftHandler(event) {
    event.preventDefault();

    const recipient = document.querySelector('#recipient').value.trim();
    const gift_name = document.querySelector('#gift-name').value.trim();
    const occasion = document.querySelector('#occasion').value.trim();

    const response = await fetch('/api/gifts', {
      method: 'POST',
      body: JSON.stringify({
        recipient,
        gift_name,
        occasion
      }),
      headers: { 
        'Content-Type': 'application/json' 
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

document.querySelector('.new-gift-form').addEventListener('submit', addGiftHandler);