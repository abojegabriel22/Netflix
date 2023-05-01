
function lightMode(){
    let myLight = document.body
    myLight.classList.toggle("myLight")
    let myColor = document.getElementsByClassName("myColor1")[0]
    let btn2A = document.getElementsByClassName("btn2A")[0]
    myColor.classList.toggle("myColor")
    btn2A.classList.toggle("btn2B")

}

// COUPON LOAD FUNCTION 
function loadCoupon(){
    document.getElementById("coupon").style.visibility = "visible"
    document.getElementById("header").style.opacity = "0.4"
    document.getElementById("footer").style.opacity = "0.4"
    document.getElementById("faq").style.opacity = "0.4"
    document.getElementById("cartoon").style.opacity = "0.4"
    document.getElementById("left").style.opacity = "0.4"
    document.getElementById("tv1").style.opacity = "0.4"
    document.getElementById("tv").style.opacity = "0.4"
    document.getElementById("home").style.opacity = "0.4"
}

// COUPON CLOSE BUTTON 
function closeCoupon(){
    document.getElementById("coupon").style.visibility = "hidden"
    document.getElementById("header").style.opacity = "1"
    document.getElementById("footer").style.opacity = "1"
    document.getElementById("faq").style.opacity = "1"
    document.getElementById("cartoon").style.opacity = "1"
    document.getElementById("left").style.opacity = "1"
    document.getElementById("tv1").style.opacity = "1"
    document.getElementById("tv").style.opacity = "1"
    document.getElementById("home").style.opacity = "1"
}
function couponLink(){
    document.getElementById("coupon").style.visibility = "hidden"
    document.getElementById("header").style.opacity = "1"
    document.getElementById("footer").style.opacity = "1"
    document.getElementById("faq").style.opacity = "1"
    document.getElementById("cartoon").style.opacity = "1"
    document.getElementById("left").style.opacity = "1"
    document.getElementById("tv1").style.opacity = "1"
    document.getElementById("tv").style.opacity = "1"
    document.getElementById("home").style.opacity = "1"
}