//variables
var backdrop = document.querySelector('.backdrop');
var sideNavButton = document.querySelector('.toggle-button');
var sideBar = document.querySelector('.mobile-nav');

//close mobile nav
backdrop.addEventListener('click', function(){
  if (sideBar.classList.length > 1){
    sideBar.classList.remove('open');
    closeBackdrop();
  }
});

function closeBackdrop() {
  backdrop.classList.remove('open');
}

//open side nav
sideNavButton.addEventListener('click', function(){
    if (sideBar.classList.length > 1){
      sideBar.classList.remove('open');
      closeBackdrop();
    }
    else {
      sideBar.classList.add('open');
      backdrop.classList.add('open');
    }
  });