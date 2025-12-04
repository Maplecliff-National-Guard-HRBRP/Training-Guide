// script.js — simple search, dark mode and smooth scrolling
document.addEventListener('DOMContentLoaded', ()=>{
const search = document.getElementById('search');
const darkToggle = document.getElementById('darkToggle');
const content = document.getElementById('content');


// restore dark mode
if(localStorage.getItem('mcng_dark') === '1'){
document.body.classList.add('dark');
darkToggle.textContent = '☀️';
darkToggle.setAttribute('aria-pressed','true');
}


darkToggle.addEventListener('click', ()=>{
const isDark = document.body.classList.toggle('dark');
darkToggle.textContent = isDark ? '☀️' : '🌙';
darkToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
localStorage.setItem('mcng_dark', isDark ? '1' : '0');
});


// Simple within-page search: highlights matching sections' headings and shows first match
search.addEventListener('input', ()=>{
const q = search.value.trim().toLowerCase();
// clear previous highlights
document.querySelectorAll('.search-match').forEach(n=>n.classList.remove('search-match'));
if(!q) return;
const pages = document.querySelectorAll('.page');
let first = null;
pages.forEach(p=>{
const text = p.innerText.toLowerCase();
if(text.includes(q)){
p.classList.add('search-match');
if(!first) first = p;
}
});
if(first){
first.scrollIntoView({behavior:'smooth',block:'start'});
}
});


// Smooth scroll for sidebar anchors
document.querySelectorAll('.sidebar a').forEach(a=>{
a.addEventListener('click', (e)=>{
e.preventDefault();
const id = a.getAttribute('href').slice(1);
const el = document.getElementById(id);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
});
});
});
