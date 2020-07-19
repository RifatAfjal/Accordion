 // select all the buttons
 var btns = document.querySelectorAll('.accordion-btn');

 // add a function for every button
 btns.forEach(btn => btn.addEventListener('click', function(e){
     const paragraph = e.currentTarget.parentElement.parentElement;

     paragraph.classList.toggle('show');
 }))