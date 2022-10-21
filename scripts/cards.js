const productsCards = [
    {
        type: "House",
        title: "California St.",
        beds: 16,
        baths: 2,
        rooms: 11,
    },
    {
        type: "Villa",
        title: "Welford Gardens",
        beds: 12,
        baths: 3,
        rooms: 16,
    },
    {
        type: "House",
        title: "The Grove",
        beds: 12,
        baths: 2,
        rooms: 14,
    },
    {
        type: "Apartment",
        title: "Wallace St.",
        beds: 10,
        baths: 2,
        rooms: 8,
    },
    {
        type: "Apartment",
        title: "Dwight Way",
        beds: 8,
        baths: 1,
        rooms: 6,
    },
    {
        type: "House",
        title: "North Avenue",
        beds: 14,
        baths: 3,
        rooms: 11,
    }],
    productsCardsEl = document.querySelector("#productsCards"),
    productsImgsDir = "src/imgs/cards-1",
    productsImgsPref = "cards-1",
    productsImgsType = "jpg",
    productsAnimation = "animate__fadeInUp"
renderCards(productsCards, productsCardsEl, productsImgsDir, productsImgsPref, productsImgsType, productsAnimation)

const teamCardsData = [
    {
        name: "Ava Orn",
        job: "Managing Broker"
    },
    {
        name: "Ella Hessel",
        job: "Agent"
    },
    {
        name: "Daryl Gislason",
        job: "REALTOR"
    },
    {
        name: "David Sporer",
        job: "Agent"
    },
    {
        name: "Trevor Torphy",
        job: "Agent"
    },
    {
        name: "Amanda Giovanni",
        job: "REALTOR"
    }],
    teamCardsEl = document.querySelector("#teamCardsEl"),
    teamImgsDir = "src/imgs/avatars",
    teamImgsPref = "avatars",
    teamImgsType = "png"
renderTeamCards(teamCardsData, teamCardsEl, teamImgsDir, teamImgsPref, teamImgsType)

const newsroomCardsData = [
    {
        title: "Press release",
        text: "Market watch: are condos still a good investment?",
        date: "August 12, 2021"
    },
    {
        title: "Announcement",
        text: "The history of great design",
        date: "August 12, 2021"
    },
    {
        title: "Company news",
        text: "Designers who changed everything",
        date: "August 12, 2021"
    }],
    newsroomCardsEl = document.querySelector("#newsroomCards"),
    newsroomCardsImgsDir = "src/imgs/cards-2",
    newsroomCardsImgsPref = "cards-2",
    newsroomCardsImgsType = "jpg",
    newsroomCardsAnimation = "animate__fadeInUp"
renderNewsroomCards(newsroomCardsData, newsroomCardsEl, newsroomCardsImgsDir, newsroomCardsImgsPref, newsroomCardsImgsType, newsroomCardsAnimation)

const sliderData = [
    {
        stars: 5,
        title: "We found the perfect home!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        author: "Nate Davidsson"
    },
    {
        stars: 4,
        title: "We're so happy with Estate.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
        author: "Laura Paulie"
    },
    {
        stars: 2,
        title: "Thank you for our beautiful home.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        author: "Greg Todd"
    },
    {
        stars: 5,
        title: "Smth for slider",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id. Star this project on <a href='https://github.com/readyyyk'> my github page </a>",
        author: "Readyyyk"
    }],
    sliderEl = document.querySelector("#slider-inner")
renderSliderCards(sliderData, sliderEl)

function renderCards(cards, parentEl, imgsDir, imgPref, imgType, animationName){
    cards.forEach( (el, i) => {
        let tempCard = document.createElement('div')

        tempCard.className = "card m-3 mx-lg-0 animate"
        tempCard.setAttribute("data-animation", animationName)
        tempCard.style.width = "24rem";
        let tempStr =
        `
            <img class="card-img-top" src="${imgsDir}/${imgPref}-${i}.${imgType}">
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
        
        parentEl.appendChild(tempCard)
    })
}

function renderTeamCards(cards, parentEl, imgsDir, imgPref, imgType){
    cards.forEach( (el, i) => {
        let tempCard = document.createElement('div')

        tempCard.className = "d-flex my-2"
        tempCard.style.width = "18rem";
        tempCard.style.height = "fit-content";
        let tempStr =
        `
            <img class="rounded me-2" src="${imgsDir}/${imgPref}-${i}.${imgType}">
            <div class="d-flex flex-column justify-content-center">
                <p class="m-0 lh-sm" style="letter-spacing:2px;"> ${el.name} </p>
                <p class="m-0 lh-sm text-grey text-uppercase" style="font-size: 12px;letter-spacing: 2px"> ${el.job} </p>
                
            </div>
        `

        tempCard.innerHTML = tempStr
        
        parentEl.appendChild(tempCard)
    })
}

function renderNewsroomCards(cards, parentEl, imgsDir, imgPref, imgType, animationName){
    cards.forEach( (el, i) => {
        let tempCard = document.createElement('div')

        tempCard.className = "card m-3 mx-lg-0 rounded-4 overflow-hidden animate"
        tempCard.setAttribute("data-animation", animationName)
        tempCard.style.width = "24rem";
        let tempStr =
        `
            <img src="${imgsDir}/${imgPref}-${i}.${imgType}" class="card-img-top" alt="cards-2-0">
            <div class="card-body">
                <p class="card-text text-orange text-uppercase text-12 mb-2" style="letter-spacing: 2px;"> ${el.title}</p>
                <p class="mb-2 lh-sm">${el.text}</p>
                <p class="text-12 text-grey mb-0">${el.date}</p>
            </div>
        `
        tempCard.innerHTML = tempStr
        
        parentEl.appendChild(tempCard)
    })
}


function renderSliderCards(cards, parentEl){
    cards.forEach( (el, i) => {
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
        
        parentEl.appendChild(tempCard)
    })
}
