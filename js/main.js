document.getElementById('year').textContent = new Date().getFullYear();

    (function(){
      const header = document.getElementById('nav');
      const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
      const offsetTop = el => el.getBoundingClientRect().top + window.pageYOffset;

      links.forEach(a=>{
        a.addEventListener('click', (e)=>{
          const id = a.getAttribute('href').slice(1);
          const target = document.getElementById(id);
          if (!target) return;
          e.preventDefault();
          const y = offsetTop(target) - (header.offsetHeight || 0) - 8;
          window.scrollTo({ top: y, behavior: 'smooth' });
          history.pushState(null, '', '#'+id);
        });
      });
    })();

  (function(){
    const items = document.querySelectorAll('.reveal');
    if(!items.length) return;
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.remove('opacity-0','translate-y-4');
          e.target.classList.add('opacity-100','translate-y-0');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    items.forEach(el=>io.observe(el));
  })();