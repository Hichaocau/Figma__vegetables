
// countdown
function countdownDay() {
    const countdown  = () => {
        const countDate = new Date('June 16, 2022 00:00:00').getTime()
        const now = new Date().getTime()
        const gap = countDate - now
    
        const second = 1000;
        const minute = second * 60; 
        const hour = minute * 60; 
        const day = hour * 24;
        
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        
        document.querySelector('.days').innerHTML = textDay
        document.querySelector('.hours').innerHTML = textHour
        document.querySelector('.minutes').innerHTML = textMinute
        document.querySelector('.seconds').innerHTML = textSecond
    }
    
    setInterval(countdown , 1000)
}

countdownDay() 

// login

function login(){
    const loginBtn = document.querySelector('.header__btn-first')
    const registerBtn = document.querySelector('.header__btn-second')
    const login = document.querySelector('.login')
    const register = document.querySelector('.register')
    
    const loginInput = document.querySelector('.login__input')
    const registerInput = document.querySelector('.register__input')

    // click login
    loginBtn.addEventListener('click', () =>{
        login.classList.remove('none')
    })

    loginInput.addEventListener('click', () =>{
        login.classList.add('none')
    })

    // click register
    registerBtn.addEventListener('click', () =>{
        register.classList.remove('none')
    })

    registerInput.addEventListener('click', () =>{
        register.classList.add('none')
    })

    // click login open register

    const loginSpan = document.querySelector('.signup_link')
    const registerSpan = document.querySelector('.login_link')

    loginSpan.addEventListener('click', () =>{
        login.classList.add('none')
        register.classList.remove('none')
    })

    registerSpan.addEventListener('click', () =>{
        register.classList.add('none')
        login.classList.remove('none')
    })

    // click modal none all

    login.addEventListener('click', (e) =>{
        if(e.target === e.currentTarget) {
            login.classList.toggle('none')
        }
    })

    register.addEventListener('click', (e) =>{
        if(e.target === e.currentTarget) {
            register.classList.toggle('none')
        }
    })
}
login()

// show product
function showProduct(){
    const productOptions = document.querySelectorAll('.category__list')
    const productList = document.querySelectorAll('.product__options-item')
    productList.forEach( (product, index) =>{
        product.addEventListener('click', () =>{
            document.querySelector('.product__options-item.product__options-item--border').classList.remove('product__options-item--border')
            product.classList.add('product__options-item--border')

            productOptions.forEach( option => {
                option.classList.add('none')
            })
            productOptions[index].classList.remove('none')
        })
    })
}

showProduct()

// buy product
function buyProduct(){
    const iconPlus = document.querySelectorAll('.modal__cart-plus')
    const iconMinus = document.querySelectorAll('.modal__cart-minus')

    const numberInput = document.querySelectorAll('.modal__cart-input')
    const priceList = document.querySelectorAll('.feauted__info-price--sale')

    numberInput.forEach((number, index) => {
        number.placeholder = 1
        let i = 1;
        iconPlus[index].addEventListener('click', function(e){
            if( i === 9){
                i = 0;
            }
            number.placeholder = ++i;

            priceList[index].innerHTML = `$${i*200}.00`
        })
        iconMinus[index].addEventListener('click', function(e){
            if( i != 0){
                number.placeholder = --i;
            }
            priceList[index].innerHTML = `$${i*200}.00`
        })
    })
}

buyProduct()


// click icon menu
function headerMenu(){
    const iconMenu = document.querySelector('.header__menu i')
    const navbar = document.querySelector('.header__list-btn')
    const overlay = document.querySelector('.overlay')
    
    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('fa-xmark')
        overlay.classList.toggle('none')
        navbar.style.transition = 'all 0.3s linear'
        navbar.classList.remove('translate100')
        navbar.classList.add('translate0')
    })

    overlay.addEventListener('click', () => {
        iconMenu.classList.toggle('fa-xmark')
        overlay.classList.toggle('none')
        navbar.classList.add('translate100')
        navbar.classList.remove('translate0')
    })
}
headerMenu()


