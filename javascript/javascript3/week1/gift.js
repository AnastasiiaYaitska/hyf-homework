// Giphy api

const refs = {
    form: document.querySelector('.form'),
    giftList: document.querySelector('.gifts-list'),
    guard: document.querySelector('.js-guard')
}

const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const KEY_API = 'k0YTgIYR0p3SUZavHPeyHGEccU55XpCN';


// I tried to implement infinity  scroll but got confused.This is not specified in the task , I will return to this a little later.

let searchingWord = "";
let searchingAmount = "";
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
            console.log('hi')
            page += 1;
            fetchGiftInfinity(searchingWord, page).then(data => {
                 
                renderMarkup(data.data)
                if (page === data. offset) {
                    console.log('img is finish')
                     observer.unobserve(refs.guard)
                }
            }).catch(error=>console.log(error))
        }    
    } )  
}
             




// window.addEventListener("load", (event) => {
//     let observer = new IntersectionObserver(onLoad, options);
//     console.log(observer)
//     observer.observe(refs.guard)
// }, false);
// end



refs.form.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault();
   searchingWord = event.currentTarget.elements.name.value;
    console.log( searchingWord);
   searchingAmount = event.currentTarget.elements.amount.value;
    console.log(typeof searchingAmount);

   

    if (searchingAmount === "") {
      console.log(' am in conditions')
     return   fetchGiftInfinity(searchingWord, page).then(data=> {renderMarkup(data.data)
            observer.observe(refs.guard)
        }).catch(error => console.log(error))
    }

    return  fetchGift(searchingWord, searchingAmount).then(data => 
            renderMarkup(data.data)).catch(error => console.log(error))
}




async function fetchGift(searchingName, limit) {
    
    const response = await fetch(`${BASE_URL}?api_key=${KEY_API}&q=${searchingName}&limit=${limit}`);
    const gifts = await response.json();
    
    console.log(gifts);
    return gifts;   
}



async function fetchGiftInfinity(searchingName, page) {
     console.log('i an in infinity fetch')
    const response = await fetch(`${BASE_URL}?api_key=${KEY_API}&q=${searchingName}&offset=${page}&count=50`);
    const gifts = await response.json()
    console.log(gifts)
    return gifts;
}




function renderMarkup(data) {
    console.log(data)
    const markup = data.map(({ title, images: { downsized_medium: { url }
    } }) =>
        `<li class="gifrs-item">
    <img src="${url}" alt="${title}">
    </li>`
    ).join("");
    console.log(searchingAmount)
    
    return setTimeout(() => searchingAmount === "" ? refs.giftList.insertAdjacentHTML('beforeend', markup) : refs.giftList.innerHTML = markup,2000);
}




