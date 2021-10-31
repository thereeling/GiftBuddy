
const editBtns = document.getElementsByClassName('edit-button');
for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', function() {
       let giftId = editBtns[i].id.replace(/-edit/g, '');
       console.log(giftId);
    });    
};