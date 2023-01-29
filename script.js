const experiencia = document.querySelector('.btn-exp');
const project = document.querySelector('.btn-project');
const skills = document.querySelector('.btn-skill');
const educacion = document.querySelector('.btn-edu');
const contact = document.querySelector('.btn-contact');

function ocultarInfo() {
  document.querySelector('.exp').classList.add('no-show')
  document.querySelector('.carousel').classList.add('no-show')
  document.querySelector('.logos').classList.add('no-show')
  document.querySelector('.edu').classList.add('no-show')
  document.querySelector('.contact').classList.add('no-show')
}

experiencia.addEventListener('click', () =>{
  // ocultarInfo();
  document.querySelector('.exp').classList.toggle('no-show')
  experiencia.classList.toggle('selected')
})

project.addEventListener('click', () =>{
  // ocultarInfo();
  document.querySelector('.carousel').classList.toggle('no-show')
  project.classList.toggle('selected')
})

skills.addEventListener('click', () =>{
  // ocultarInfo();
  document.querySelector('.logos').classList.toggle('no-show')
  skills.classList.toggle('selected')
})

educacion.addEventListener('click', () =>{
  // ocultarInfo();
  document.querySelector('.edu').classList.toggle('no-show')
  educacion.classList.toggle('selected')
})

contact.addEventListener('click', () =>{
  // ocultarInfo();
  document.querySelector('.contact').classList.toggle('no-show')
  contact.classList.toggle('selected')
})