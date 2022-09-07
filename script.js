'use strict';

//const
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

//function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const testMessage = function () {
  console.log('button click');
};

///eventlistener function
overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape') {
    if (modal.classlist.contains('hidden')) {
      closeModal();
    }
  }
});

//loops
for (let i = 0; i < btnsOpenModel.length; i++) {
  //loops through the modal and displays the modal's close button
  btnsOpenModel[i].addEventListener('click', openModel, testMessage);
  btnCloseModal.addEventListener('click', closeModal, testMessage);
}

//Test your code here
