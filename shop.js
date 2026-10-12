'use strict';
const categoryNames={all:'All essentials',fruit:'Fruit',vegetables:'Vegetables & greens',staples:'Staples & pantry',breakfast:'Breakfast & dairy',household:'Home & cleaning'};
const requestedCategory=new URLSearchParams(window.location.search).get('category');
let currentCategory=Object.hasOwn(categoryNames,requestedCategory)?requestedCategory:'all';
const searchInput=document.getElementById('product-search');
const productGrid=document.getElementById('catalogue-products');
function showProducts(){
 const term=searchInput.value.trim().toLocaleLowerCase();
 const matches=inventory.filter(p=>(currentCategory==='all'||p.category===currentCategory)&&(`${p.name} ${p.unit} ${categoryNames[p.category]}`).toLocaleLowerCase().includes(term));
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===currentCategory)));
 document.getElementById('category-title').textContent=categoryNames[currentCategory];
 document.getElementById('result-count').textContent=matches.length+' product'+(matches.length===1?'':'s');
 document.getElementById('empty-state').hidden=matches.length!==0;
 productGrid.replaceChildren();
 for(const p of matches){
  const card=document.createElement('article');card.className='catalogue-product '+p.category;
  const image=document.createElement('img');image.className='catalogue-product-image';image.src=p.image;image.alt=p.imageAlt;image.width=480;image.height=480;image.loading='lazy';image.decoding='async';
  const details=document.createElement('div');details.className='catalogue-product-details';
  const category=document.createElement('span');category.className='product-category';category.textContent=categoryNames[p.category];
  const name=document.createElement('h3');name.textContent=p.name;
  const unit=document.createElement('p');unit.className='product-unit';unit.textContent=p.unit;
  details.append(category,name,unit);card.append(image,details);productGrid.append(card);
 }
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{currentCategory=b.dataset.filter;const url=new URL(window.location.href);if(currentCategory==='all')url.searchParams.delete('category');else url.searchParams.set('category',currentCategory);history.replaceState(null,'',url);showProducts();}));
searchInput.addEventListener('input',showProducts);
document.getElementById('reset-search').addEventListener('click',()=>{currentCategory='all';searchInput.value='';const url=new URL(window.location.href);url.searchParams.delete('category');history.replaceState(null,'',url);showProducts();searchInput.focus();});
showProducts();
