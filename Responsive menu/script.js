var haseSub = document.querySelectorAll('.has-submenu a');

for(var i=0; i<hasSub.length; i++) {
    hasSub[i].addEventListener('click', (e)=> e.preventDefault());
}
