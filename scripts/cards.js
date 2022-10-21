const dataCardsJSON = `[{"type":"product","innerData":[{"type":"House","title":"California St.","beds":16,"baths":2,"rooms":11},{"type":"Villa","title":"Welford Gardens","beds":12,"baths":3,"rooms":16},{"type":"House","title":"The Grove","beds":12,"baths":2,"rooms":14},{"type":"Apartment","title":"Wallace St.","beds":10,"baths":2,"rooms":8},{"type":"Apartment","title":"Dwight Way","beds":8,"baths":1,"rooms":6},{"type":"House","title":"North Avenue","beds":14,"baths":3,"rooms":11}],"imgsDir":"src/imgs/cards-1","imgsPref":"cards-1","imgsType":"jpg","animationName":"animate__fadeInUp","parentElId":"#productsCards"}, {"type":"team","innerData":[{"name":"Ava Orn","job":"Managing Broker"},{"name":"Ella Hessel","job":"Agent"},{"name":"Daryl Gislason","job":"REALTOR"},{"name":"David Sporer","job":"Agent"},{"name":"Trevor Torphy","job":"Agent"},{"name":"Amanda Giovanni","job":"REALTOR"}],"imgsDir":"src/imgs/avatars","imgsPref":"avatars","imgsType":"png","animationName":"animate__zoomIn","parentElId":"#teamCardsEl"}, {"type":"news","innerData":[{"title":"Press release","text":"Market watch: are condos still a good investment?","date":"August 12, 2021"},{"title":"Announcement","text":"The history of great design","date":"August 12, 2021"},{"title":"Company news","text":"Designers who changed everything","date":"August 12, 2021"}],"imgsDir":"src/imgs/cards-2","imgsPref":"cards-2","imgsType":"jpg","animationName":"animate__fadeInUp","parentElId":"#newsroomCards"}, {"type":"sliderEl","innerData":[{"stars":5,"title":"We found the perfect home!","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.","author":"Nate Davidsson"},{"stars":4,"title":"We're so happy with Estate.","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.","author":"Laura Paulie"},{"stars":2,"title":"Thank you for our beautiful home.","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.","author":"Greg Todd"},{"stars":5,"title":"Smth for slider","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id. Star this project on <a href='https://github.com/readyyyk'> my github page </a>","author":"Readyyyk"}],"parentElId":"#slider-inner"}]`
    
const dataCards = JSON.parse(dataCardsJSON)

class ProductCard {
    constructor(el, imgsDir, imgPref, cnt, imgType, animationName) {
        let tempCard = document.createElement('div')

        tempCard.className = "card m-3 mx-lg-0 animate"
        tempCard.setAttribute("data-animation", animationName)
        tempCard.style.width = "24rem";
        let tempStr =
        `
            <img class="card-img-top" src="${imgsDir}/${imgPref}-${cnt}.${imgType}">
            <div class="card-body p-4 text-center">
                <span class="text-light-grey text-uppercase" style="letter-spacing:2px;"> ${el.type} </span>
                <h4> ${el.title} </h4>
                <div class="d-flex justify-content-between">
                    <div>
                        <img class="me-1" src="src/imgs/rooms-beds.svg">
                        <span class="text-dark-grey"> ${el.beds} beds </span>
                    </div>
                    <div>
                        <img class="me-1" src="src/imgs/rooms-bathrooms.svg">
                        <span> ${el.baths} bathrooms </span>
                    </div>
                    <div>
                        <img class="me-1" src="src/imgs/rooms-rooms.svg">
                        <span> ${el.rooms} rooms </span>
                    </div>
                </div>
            </div>
        `

        tempStr +=`</span>`

        tempCard.innerHTML = tempStr

        this.DOMelement = tempCard
    }
}

class TeamCard {
    constructor(el, imgsDir, imgPref, cnt, imgType, animationName){
        let tempCard = document.createElement('div')

        tempCard.className = "d-flex my-2 animate"
        tempCard.setAttribute("data-animation", animationName)
        tempCard.style.width = "18rem";
        tempCard.style.height = "fit-content";
        let tempStr =
        `
            <img class="rounded me-2" src="${imgsDir}/${imgPref}-${cnt}.${imgType}">
            <div class="d-flex flex-column justify-content-center">
                <p class="m-0 lh-sm" style="letter-spacing:2px;"> ${el.name} </p>
                <p class="m-0 lh-sm text-grey text-uppercase" style="font-size: 12px;letter-spacing: 2px"> ${el.job} </p>
                
            </div>
        `
        tempCard.innerHTML = tempStr
        
        this.DOMelement = tempCard
    }
}

class NewsroomCard {
    constructor(el, imgsDir, imgPref, cnt, imgType, animationName){
        let tempCard = document.createElement('div')

        tempCard.className = "card m-3 mx-lg-0 rounded-4 overflow-hidden animate"
        tempCard.setAttribute("data-animation", animationName)
        tempCard.style.width = "24rem";
        let tempStr =
        `
            <img src="${imgsDir}/${imgPref}-${cnt}.${imgType}" class="card-img-top" alt="cards-2-0">
            <div class="card-body">
                <p class="card-text text-orange text-uppercase text-12 mb-2" style="letter-spacing: 2px;"> ${el.title}</p>
                <p class="mb-2 lh-sm">${el.text}</p>
                <p class="text-12 text-grey mb-0">${el.date}</p>
            </div>
        `
        tempCard.innerHTML = tempStr
        
        this.DOMelement = tempCard
    }
}

class SliderCard{
    constructor(el, animationName){
        let tempCard = document.createElement('div')

        tempCard.className = "card p-2 m-2 rounded-2"
        tempCard.style = "width:34em; max-width:70vw;";

        let tempStr =
        `
        <div class="card-body">
            <div class="span">
        `
        for(let i=1;i<=el.stars;i++)
            tempStr+='<img src="src/imgs/star-filled.svg" alt="star-filled" class="me-1">'

        for(let i=el.stars+1;i<=5;i++)
            tempStr+='<img src="src/imgs/star-unfilled.svg" alt="star-filled" class="me-1">'

        tempStr+=`
            </div>
            <h3 class="container-fluid ps-0 my-2"> ${el.title} </h3>
            <p class="text-grey"> ${el.text} </p>
            <div class="d-flex align-items-center" style="height: 1.5em;">
                <div class="vr me-2"></div>
                ${el.author}
            </div>
        </div>
        `

        tempCard.innerHTML = tempStr
        
        this.DOMelement = tempCard
    }
}


function renderCards(cardsDataArray){
    cardsDataArray.forEach( (cardsData) => {
        let parent = document.querySelector(cardsData.parentElId)
        switch (cardsData.type){
            case "product":
                cardsData.innerData.forEach( (el, i) => {
                    let tempCard = new ProductCard(el, cardsData.imgsDir, cardsData.imgsPref, i, cardsData.imgsType, cardsData.animationName)
                    parent.appendChild(tempCard.DOMelement)
                } )
                break
            case "team":
                cardsData.innerData.forEach( (el, i) => {
                    let tempCard = new TeamCard(el, cardsData.imgsDir, cardsData.imgsPref, i, cardsData.imgsType, cardsData.animationName)
                    parent.appendChild(tempCard.DOMelement)
                } )
                break
            case "news":
                cardsData.innerData.forEach( (el, i) => {
                    let tempCard = new NewsroomCard(el, cardsData.imgsDir, cardsData.imgsPref, i, cardsData.imgsType, cardsData.animationName)
                    parent.appendChild(tempCard.DOMelement)
                } )
                break
            case "sliderEl":
                cardsData.innerData.forEach( (el, i) => {
                    let tempCard = new SliderCard(el)
                    parent.appendChild(tempCard.DOMelement)
                } )
                break
        }
    })
}
renderCards(dataCards)