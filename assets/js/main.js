const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu&&links){
  menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
}
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -5%'});
  items.forEach(item=>io.observe(item));
}else{items.forEach(item=>item.classList.add('in'));}
const portrait=document.querySelector('.portrait-frame');
if(portrait && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  portrait.addEventListener('pointermove',event=>{const rect=portrait.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;portrait.style.transform=`translate(${x*5}px,${y*5}px)`;});
  portrait.addEventListener('pointerleave',()=>portrait.style.transform='');
}
