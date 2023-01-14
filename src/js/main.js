// CART

let cartIcon  = document.querySelector ('#cartIcon');
    cartClass = document.querySelector ('.cart');
    closeCart = document.querySelector ('#closeCart');
    btnBuy    = document.querySelector ('.btnBuy');

// OPEN CART

cartIcon.onclick = () =>{

    cartClass.classList.add("activeCart");
};


// CLOSE CART

closeCart.onclick = () =>{

    cartClass.classList.remove("activeCart");
};


// BTN BUY

btnBuy.onclick = () =>{

    if(cart.length == 0){
        Swal.fire({
            title: "El carrito esta vacio!",
            icon: 'error',
        })
    } else {

        Swal.fire({
            title: "Compra realiza con exito!",
            text: 'Disfruta tus planes!!',
            icon: 'success',
        })
    } 
}


// PRODUCT

const product = [

    {
        id: 0,
        image: 'src/img/card1.jpg',
        title: 'Musculación',
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
        title: 'Nutrición',
        price: 100,   
    },
    {
        id: 5,
        image: 'src/img/card6.jpg',
        title: 'Suplementación',
        price: 100,   
    },

]

// PRODUCT ON HTML

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
                    <p class="price">$${price} /año</p>
                </div>`+
                "<button onclick='addtocart("+(i++)+")' class='cardCta'> Agregar al carrito</button>"+
            `</div>
             </div>`
        
        )
    }
).join(''); 


// CART WORKING

let cart = [ ] || JSON.parse(localStorage.getItem("productos-carrito"));


// LOCALSTORAGE

let saveLocal = ()=>{

    localStorage.setItem("productos-carrito", JSON.stringify(cart))
}


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
    saveLocal();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
    saveLocal();

};

function displaycart(){

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
            )
        }).join('');  
    }
};


// BMR CALCULATOR

const calories = document.querySelector('.calories');
const calculateBtn = document.querySelector('.calculateCaloriesBtn');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const errorMessage = document.querySelector(".errorMessage")

// BMR MALE = 66 + (13,7 * weight) + (5 * height) - (6,75 * age)
// BRM FEMALE = 655 + (9,6 * weight) + (1,8 * height) - (4,7 * age)


const calculateBMR = (weight, height, age, gender) =>{

    if(gender == 'male'){
        return (66 + (13.7 * weight) + (5 * height) - (6.75 * age)).toFixed(0)
    } else{
        return (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)).toFixed(0)
    };

};

calculateBtn.addEventListener("click", ()=>{

    if(
        age.classList.contains("invalidBMR") ||
        height.classList.contains("invalidBMR") ||
        weight.classList.contains("invalidBMR")
    
    ){
        errorMessage.classList.add("activeBMR");
        return
    }

    errorMessage.classList.remove("activeBMR");


    let genderValue = document.querySelector(".caloriesControls form .gender input[name='gender']:checked").value;

    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

    calories.innerHTML = BMR;
});

// INPUT VALIDATION

age.addEventListener('input', (e) =>{
    let ageValue = e.target.value;

    if (!ageValue || isNaN(ageValue) || ageValue < 1 || ageValue > 100){
        age.classList.add("invalidBMR")
    }else{
        age.classList.remove("invalidBMR")
    }
});

weight.addEventListener('input', (e) =>{
    let weightValue = e.target.value;

    if (!weightValue || isNaN(weightValue) || weightValue < 0){
        weight.classList.add("invalidBMR")
    }else{
        weight.classList.remove("invalidBMR")
    }
});
height.addEventListener('input', (e) =>{
    let heightValue = e.target.value;

    if (!heightValue || isNaN(heightValue) || weightValue < 0){
        height.classList.add("invalidBMR")
    }else{
        height.classList.remove("invalidBMR")
    }
});


// IMC CALCULATOR

const imcHeight = document.querySelector('#imcHeight');
const imcWeight = document.querySelector('#imcWeight');
const imcText   = document.querySelector('.imcResultText');
const calculateImcBtn = document.querySelector('.calculateImcBtn')
const errorImcMessage = document.querySelector('.errorImcMessage')

// IMC = peso (kg) / [estatura (m)]2

const calculateIMC = (imcWeight, imcHeight) =>{

    return ((imcWeight / ((imcHeight/100)*(imcHeight/100))).toFixed(1));

};

calculateImcBtn.addEventListener("click", ()=>{

    if(
        imcHeight.classList.contains("invalidIMC") ||
        imcWeight.classList.contains("invalidIMC")
    
    ){
        errorImcMessage.classList.add("activeIMC");
        return
    }

    errorImcMessage.classList.remove("activeIMC");

    let IMC = calculateIMC(imcWeight.value, imcHeight.value);

    imcText.innerHTML = IMC;
});

imcWeight.addEventListener('input', (f) =>{
    let imcWeightValue = f.target.value;

    if (!imcWeightValue || isNaN(imcWeightValue) || imcWeightValue < 1){
        imcWeight.classList.add("invalidIMC")
    }else{
        imcWeight.classList.remove("invalidIMC")
    }
});

imcHeight.addEventListener('input', (f) =>{
    let imcHeightValue = f.target.value;

    if (!imcHeightValue || isNaN(imcHeightValue) || imcHeightValue < 0){
        imcHeight.classList.add("invalidIMC")
    }else{
        imcHeight.classList.remove("invalidIMC")
    }
});
