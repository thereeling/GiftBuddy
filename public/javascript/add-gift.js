async function addGiftHandler(event) {
    event.preventDefault();
    const recipient = document.querySelector('input[name="recipient"]').value.trim();
    const gift_name = document.querySelector('input[name="gift-name"]').value.trim();
    const occasion = document.querySelector('input[name="occasion"').value.trim();


    if (recipient && gift_name && occasion) { 
      const response = await fetch('/api/gifts', {
        method: 'POST',
        body: JSON.stringify({
          recipient,
          gift_name,
          occasion
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

document.getElementById('.new-gift-form').addEventListener('click', addGiftHandler);