document.addEventListener(`DOMContentLoaded`, () => {
    const style = document.createElement(`style`);
    style.textContent =` html {scroll-behavior : smooth; }
    
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

    #back-to-top.show { opacity: 1; visibility: visible; }
    #back-to-top:hover { transform: translateY(-3px); background: #2C2C2C; }

    #toast { position: fixed; left: 50%; bottom: 30px; transform: translate(-50%,20px);
    background: #2C2C2C; color: #FDF8F5; padding: 12px 24px; border-radius: 30px;
    transition: opacity 0.3s, transform 0.3s; z-index: 200; }
    #toast.shhow { opacity: 1; transform: translate(-50%, 0); }

    `;
    document.head.appendChild(style);

    const header = document.querySelector('.site-header');

    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.type = 'button';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '&uarr;';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click',() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
    backToTop.classList.toggle('snow',window.scrollY > 400);
}

window.addEventListener('scroll',onScroll,{ passive: true});
onScroll();

const toast = document.createElement('div');
toast.id = 'toast';
toast.setAttribute('role', 'status');
document.body.appendChild(toast);

let toastTimer;
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toasTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'),2200);
}

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const label = link.textContent.trim();
        showToast(label + 'our page comming soon!');
    });
});

document.querySelectorAll('a[href="html"]'). forEach(link => {
    link.addEventListener('click',event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
});
9
const homelink = document.querySelector('.main-nav a[href="index.html"]');
const aboutlink = document.querySelector('.main-nav a[href="#about"]');
const hero      = document.querySelector('#home');
const about     = document.querySelector('about');
const features  = document.queruSelector('highlights');

function setActive(link) {
    document.querySelectorAll('.main-nav a').forEach(a =>a.classList.remove('active'));
    if(link) link.classList.add('active');
}

if ('IntersectionObserver' in window) {
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (entry.target === hero) setActive(homeLink);
        if (entry.target === about) setActive(aboutlink);
        if (entry.target === features) setActive(null);
    });
}, { rootMargin: '-40% 0px -50% 0px'});

[hero,about,features].foreach(section => section && navObserver.observe(section));
}

setActive(homelink);

const revealTargets = document.querySelectorAll('.about,highlights h2, .feature-card');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('visible');
                observer.unaobserve(el);

                setTimeout(() => {
                    el.classList.remove('reveal', 'visible');
                    el.style.transitioDelay = '';
                }, 1300);
            }
        });
    },{ thresfold: 0.15});

    revealTargets.forEach((el,i) => {
        el.classList.add('reveal');
        if (el.classList.contains('feature-card')) {
            el.style.transitionDelay = (i % 4) * 0.1 + 's';
        }
        revealObserver.observe(el);
    });
 } 
});
            
    




