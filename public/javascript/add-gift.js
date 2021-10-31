async function addGiftHandler(event) {
    event.preventDefault();
    const recipient = document.querySelector('#recipient').value.trim();
    const gift_name = document.querySelector('#gift-name').value.trim();
    const occasion = document.querySelector('#occasion').value.trim();


    if (recipient && gift_name && occasion) { 
      const response = await fetch('/api/gifts', {
        method: 'post',
        body: JSON.stringify({
          recipient,
          gift_name,
          occasion
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        alert('Gift Added!');
      } else {
        alert(response.statusText);
      }
    }
  }

document.getElementById('gift-submit').addEventListener('click', addGiftHandler);