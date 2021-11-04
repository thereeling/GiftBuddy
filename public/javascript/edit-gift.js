
async function editFormHandler(event) {
  event.preventDefault();

const recipient = document.querySelector('input[name="recipient"]').value.trim();
const gift_name = document.querySelector('input[name="gift-name"]').value.trim();
const occasion = document.querySelector('input[name="occasion"]').value.trim();
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const response = await fetch(`/api/gifts/${id}`, {
      method: 'PUT',
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
      alert('Gift Updated!')
        document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }


document.querySelector('.edit-gift-form').addEventListener('submit', editFormHandler);










