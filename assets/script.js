li = document.querySelectorAll('.categories ul li')
li.forEach(el => {
    // el.classList.remove('category-list')
    el.addEventListener('click', ()=>{
if (!el.classList.contains('category-list')) {
    el.classList.add('category-list')
}

// el.classList.remove('category-list')
}
)
});
