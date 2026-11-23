document.addEventListener('DOMContentLoaded', () {
    const style = document.createElement('style');
    style.textContent =' html {scroll-behavior : smooth; }
    section [id] {scroll-margin-top: 90px;}

    .site-header { position: sticky;top: 0; z-index: 100; transition: box-shadow 0.3s;}
    .site-header.scrolled { box-shadow: 0 4px 14px rgba(0,0,0,0.18);}



