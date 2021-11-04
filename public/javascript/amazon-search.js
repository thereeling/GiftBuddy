const amazonBtns = document.getElementsByClassName('amazon-button');

for (let i = 0; i < amazonBtns.length; i++) {
    amazonBtns[i].addEventListener('click', async function() {
       let giftId = amazonBtns[i].id.replace(/-amazon/g, '');
       const response = await fetch(`/dashboard/amazon/${giftId}`, {
        method: 'GET',
        headers: {
            'Origin': 'Access-Control-Allow-Origin',
            'Vary': 'Origin' 
        }
      })
      .then(function(data){
          if(data.ok){
              return data.json();
          }
          else{
            alert(response.statusText);
          }
      })
      .then(function(data){
          const url = data.url;
          return window.open(url, '_blank');
      })
    });
};