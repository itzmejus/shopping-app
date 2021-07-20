const menu = [
    {
        id: 1,
        title: "faucets",
        category: "bath",
        price: 15999,
        img: "./images/image1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "kettle",
        category: "kitchen",
        price: 1399,
        img: "./images/image2.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Laptop",
        category: "electronics",
        price: 69999,
        img: "./images/image3.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "bulb",
        category: "electronics",
        price: 299,
        img: "./images/image4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "offroad",
        category: "travel",
        price: 122999,
        img: "./images/image5.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "car",
        category: "travel",
        price: 180999,
        img: "./images/image6.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "fridge",
        category: "electronics",
        price: 18999,
        img: "./images/image7.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "tablet",
        category: "electronics",
        price: 12999,
        img: "./images/image8.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "led tv",
        category: "electronics",
        price: 16999,
        img: "./images/image9.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionContainer = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn")


//load item
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)


})

//filter items

filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItems) {
            if (menuItems.category === category) {
                return menuItems;
            }
        })
        if (category === "all") {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }
        //console.log(e.currentTarget.dataset.id)
    })
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">₹${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("")
    sectionContainer.innerHTML = displayMenu


}

//dark mode

const colors = ["#444444", "#ffffff"];
const randomBtn = document.querySelector(".btn-1")
const normalBtn = document.querySelector(".btn-2")
const color = document.querySelector(".color");

randomBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[0];
});

normalBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[1];
});
