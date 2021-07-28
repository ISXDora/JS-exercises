const modalOverlay = document.querySelector('.modal-wrapper');
const openModal = document.getElementById('openModal');


openModal.addEventListener('click',function(){
    modalOverlay.classList.remove('invisible');
})

document.querySelector('body').addEventListener("keydown" , function(e){
    if (e.key === 'Escape' || e.location === 27){
        modalOverlay.classList.add('invisible');
      }
})
