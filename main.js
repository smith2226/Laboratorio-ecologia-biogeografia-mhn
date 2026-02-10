// main.js - small interactions for the lab site
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');

  if(toggle && nav){
    toggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    nav.addEventListener('click', function(e){
      if(e.target.tagName === 'A'){
        nav.classList.remove('open');
        if(toggle) toggle.setAttribute('aria-expanded','false');
      }
    });

    // Close nav with Escape key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && nav.classList.contains('open')){
        nav.classList.remove('open');
        if(toggle) toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // set current year in footer
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Highlight current page in nav
  try{
    const links = document.querySelectorAll('.site-nav a');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a=>{
      const href = a.getAttribute('href');
      if(href === current || (href === 'index.html' && current === '')){
        a.classList.add('active');
      }
    });
  }catch(e){console.warn(e)}

  // Seasonal background removed (no automatic class applied).

  // Demo contact form handler (prevents real submission)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Gracias — este formulario es una demostración. Configure un backend o un servicio (Formspree, Netlify Forms) para recibir mensajes.');
      contactForm.reset();
    });
  }
});