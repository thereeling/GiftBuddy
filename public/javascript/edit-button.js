const editBtns = document.getElementsByClassName('edit-button');


for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', async function() {
       let giftId = editBtns[i].id.replace(/-edit/g, '');
       document.location.replace(`/dashboard/edit/${giftId}`);

    })
};
