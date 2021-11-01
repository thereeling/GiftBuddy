var recipient = document.querySelector('#recipient');
var gift_name = document.querySelector('#gift-name');
var occasion = document.querySelector('#occasion');
const updateSubmit = document.getElementById('update-submit');
const addSubmit = document.getElementById('gift-submit');
const editBtns = document.getElementsByClassName('edit-button');

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', async function() {
       let giftId = editBtns[i].id.replace(/-edit/g, '');
       console.log(giftId);
       const getResponse = await fetch(`/api/gifts/${giftId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (getResponse.ok) {
        updateSubmit.style.display = '';
        addSubmit.style.display = 'none';
        getResponse.json()
        .then(getResponseData => {
            recipient.value = getResponseData.recipient;
            gift_name.value = getResponseData.gift_name;
            occasion.value = getResponseData.occasion;
            updateSubmit.addEventListener('click', async function (event) {
                event.preventDefault();
                const putResponse = await fetch(`/api/gifts/${giftId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                      recipient: recipient.value,
                      gift_name: gift_name.value,
                      occasion: occasion.value
                    }),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                
                  if (putResponse.ok) {
                    alert('Gift Updated!');
                    document.location.replace('/dashboard/');
                  } else {
                    alert(putResponse.statusText);
                  }
            })
        })
      } else {
        alert(getResponse.statusText);
      }
    })
};  












