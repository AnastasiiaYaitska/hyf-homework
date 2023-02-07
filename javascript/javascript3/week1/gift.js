// Giphy api

const refs = {
    form: document.querySelector('.form'),
    giftList: document.querySelector('.gifts-list'),
    guard: document.querySelector('.js-guard')
}

const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const KEY_API = 'k0YTgIYR0p3SUZavHPeyHGEccU55XpCN';

// infinity scroll variable start
let page = 1;

const options = {
    root: null,
    rootMargin: '300px',
    threshold: 0
}


       let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
    console.log(entries)
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
             page += 1;
             fetchGiftInfinity(searchingWord, page).then(data =>
             {renderMarkup(data.data),
             observer.observe(refs.guard)}).catch(error => console.log(error));
}
    })
}

// end



refs.form.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault();
    const searchingWord = event.currentTarget.elements.name.value;
    console.log(typeof searchingWord);
    const searchingAmount = event.currentTarget.elements.amount.value;
    console.log(typeof searchingAmount);

   

    if (searchingAmount) {
      return  fetchGift(searchingWord, searchingAmount).then(data => 
            renderMarkup(data.data)).catch(error => console.log(error))
    }

        
}

async function fetchGift(searchingName, limit) {
    
    const response = await fetch(`${BASE_URL}?api_key=${KEY_API}&q=${searchingName}&limit=${limit}`);
    const gifts = await response.json();
    
    console.log(gifts);
    return gifts;   
}

async function fetchGiftInfinity(searchingName, page) {
     
    const response = await fetch(`${BASE_URL}?api_key=${KEY_API}&q=${searchingName}&offset=${page}&count=50`);
    const gifts = await response.json()
    return gifts;
}

function renderMarkup(data) {
    console.log(data)
    const markup = data.map(({ title, images:{downsized_medium:{ url}
    } }) => 
    `<li class="gifrs-item">
    <img src="${url}" alt="${title}">
    </li>`
    ).join("");
    
    return refs.giftList.innerHTML = markup;
}




