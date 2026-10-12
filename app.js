'use strict';
const account = document.getElementById('account-dialog');
document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{window.location.href='shop.html?category='+encodeURIComponent(b.dataset.category);}));
function openAccount(mode){document.getElementById('account-notice').textContent=mode==='login'?'Member login opens when we launch.':'Membership is coming with our launch.';account.showModal();}
document.querySelectorAll('[data-account]').forEach(b=>b.addEventListener('click',()=>openAccount(b.dataset.account)));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
account.addEventListener('click',e=>{if(e.target===account){const r=account.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)account.close();}});
document.getElementById('account-browse').addEventListener('click',()=>{window.location.href='shop.html';});
document.getElementById('year').textContent=String(new Date().getFullYear());
const motionButton=document.querySelector('.motion-toggle');
motionButton?.addEventListener('click',()=>{const paused=document.body.classList.toggle('paused');motionButton.textContent=paused?'▶':'Ⅱ';motionButton.setAttribute('aria-label',paused?'Resume moving text':'Pause moving text');motionButton.title=paused?'Resume animation':'Pause animation';});
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('js-motion');
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
