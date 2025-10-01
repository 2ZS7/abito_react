const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')



// const render = function () {}

const render = (cardList) => {

    cardWrapper.innerHTML = ''

    cardList.forEach((item, idx) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <a href=/product.html class="content-main__list-item">
                    <div class="content-main__list-item--img">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <h5 class="content-main__list-item--title">${item.title}</h5>
                    <strong class="content-main__list-item--price">${item.price}</strong>

                    <div class="content-main__list-item--desc-box">
                        <span class="content-main__list-item--desc">${item.address}</span>
                        <span class="content-main__list-item--desc">${item.date} </span>
                    </div>
                </a>
             `)
    })
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start'
// cardWrapper.style.rowGap = 'normal'
cardWrapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value))
})

console.log(searchInput)