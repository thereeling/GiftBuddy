const deleteBtns = document.getElementsByClassName('delete-button');

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', async function () {
        let giftId = deleteBtns[i].id.replace(/-delete/g, '');
        const response = await fetch(`/api/gifts/${giftId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if(response.ok){
            alert('Gift Deleted!');
            document.location.replace('/dashboard');
          }
          else{
            alert(response.statusText);
          }
    })    
};