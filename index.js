let content = [
    {
        image:"./images/car1.jpg",
        name:"Land Rover",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    },
    {
        image:"./images/car2.jpg",
        name:"Audi A5",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    },
    {
        image:"./images/car3.jpg",
        name:"Audi A6 RS",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    },
    {
        image:"./images/car4.jpg",
        name:"Lamborghini Urus",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    },
    {
        image:"./images/car6.jpg",
        name:"BMW F30",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    },
    {
        image:"./images/car7.jpg",
        name:"Bentley",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae."
    }
]

let cars = []


let templateArea = document.querySelector("[template-area]")
let gridArea = document.querySelector("[grid-area]")
let input = document.querySelector("#input")

    cars = content.map((car) => {
    let card = templateArea.content.cloneNode(true).children[0]
    let header = card.querySelector("[header]")
    let body = card.querySelector("[body]")
    let img = card.querySelector("[img]")
    img.src = car.image
    header.innerText = car.name
    body.innerText = car.info
    gridArea.append(card)
    return {name:car.name, element:card}
})


input.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase()
    cars.forEach((car) => {
        let contains = car.name.toLowerCase().includes(inputValue)
        car.element.classList.toggle("hide", !contains)
    })
})
