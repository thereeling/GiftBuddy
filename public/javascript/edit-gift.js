var recipient = document.querySelector('#recipient');
var gift_name = document.querySelector('#gift-name');
var occasion = document.querySelector('#occasion');
var editBtns = document.getElementsByClassName('edit-button');

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
        getResponse.json()
        .then(getResponseData => {
            recipient.value = getResponseData.recipient;
            gift_name.value = getResponseData.gift_name;
            occasion.value = getResponseData.occasion;
        })
      } else {
        alert(getResponse.statusText);
      }
    //    const putResponse = await fetch(`/api/gifts/${giftId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       recipient,
    //       gift_name,
    //       occasion
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    
    //   if (response.ok) {
    //     document.location.replace('/dashboard/');
    //   } else {
    //     alert(response.statusText);
    //   }
    })
    };  
