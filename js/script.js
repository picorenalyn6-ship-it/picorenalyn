document.addEventListener(`DOMContentLoaded`, () => {
    const style = document.createElement(`style`);
    style.textContent =` html {scroll-behavior : smooth; }
    section [id] {scroll-margin-top: 90px;}

    .site-header { position: sticky;top: 0; z-index: 100; transition: box-shadow 0.3s;}
    .site-header.scrolled { box-shadow: 0 4px 14px rgba(0,0,0,0.18);}

    .main-nav a.active { background-color: #8B263E; color: #FDF8F5; }

    .reveal { opacity: 0; transform: translateY(30px);
              transition: opacity 0.7s ease, transform 0.7s ease;}

    .reveal.visible { opacity: 1; transform: none;}

    #back-to-top { position: fixed; right: 22px; bottom: 22px; width: 48px; height: 48px;
                   border: none; border-radius: 50%; background: #8B263E; color: #FDF8F5
                   font-size: 1.4rem; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                   opacity: 0; visibilty: hidden; transition: opacity 0.3s, visibility 0.3s,transform 0.3s;
                   z-index: 100; }



