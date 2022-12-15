// CART

let cartIcon = document.querySelector('#cartIcon');
    cartClass = document.querySelector ('.cart');
    closeCart = document.querySelector ('#closeCart');

// OPEN CART

cartIcon.onclick = () =>{

    cartClass.classList.add("active");
};


// CLOSE CART

closeCart.onclick = () =>{

    cartClass.classList.remove("active");
};

// PRODUCT

const product = [

    {
        id: 0,
        image: 'src/img/card1.jpg',
        title: 'Musculacion',
        price: 100,   
    },
    {
        id: 1,
        image: 'src/img/card2.jpg',
        title: 'Powerlifting',
        price: 100,   
    },
    {
        id: 2,
        image: 'src/img/card3.jpg',
        title: 'Crossfit',
        price: 100,   
    },
    {
        id: 3,
        image: 'src/img/card4.jpg',
        title: 'Calistenia',
        price: 100,   
    },
    {
        id: 4,
        image: 'src/img/card5.jpg',
        title: 'Nutricion',
        price: 100,   
    },
    {
        id: 5,
        image: 'src/img/card6.jpg',
        title: 'Suplementacion',
        price: 100,   
    },

]

const categories = [...new Set(product.map((item) =>
    {return item}))]

let i= 0;

document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class="card">
             <div class="cardContainer">
                <h3 class="cardName">${title}</h3>
                <div class="cardTexts">
                    <p class="cardCopy">Lorem ipsum dolor sit amet.</p>
                    <p class="price">$${price} /mes</p>
                </div>`+
                "<button onclick='addtocart("+(i++)+")' class='cardCta'> Agregar al carrito</button>"+
            `</div>
             </div>`
        
        )
    }
).join(''); 

const cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
};


function displaycart(a){

    let j = 0;
        total = 0;
    document.querySelector('.cartAlert').innerHTML=cart.length;
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Esta vacio";
        document.querySelector('.totalPrice').innerHTML = "$ "+0+".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
                total = total+price;
            document.querySelector('.totalPrice').innerHTML = "$ "+total+".00";
            return(
                `<img src=${image} class="cartImg">
                 <div class="detailBox">
                    <div class="cartProductTitle">${title}</div>
                    <div class="cartPrice">$${price}</div>
                 </div>`+
                 "<button onclick='delElement("+(j++)+")' class='buttonRemove'> <i  class='bx bxs-trash-alt cartRemove'></i> </button>"
                 /* ""  */
                 
            )

        }).join('');
    }
};



