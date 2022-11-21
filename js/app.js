let links=document.querySelectorAll('.minue a[href^="#"]')
let aboutSection=document.querySelector(".about")
let arrow=document.querySelector(".arrow")
let upArrow=document.querySelector(".button")
links.forEach((link)=>{
link.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
    })
})
})
arrow.addEventListener("click",function(){
document.querySelector(links[1].getAttribute("href")). scrollIntoView({
    behavior:"smooth"
 })
})

window.onscroll=()=>{
    if(window.scrollY>=1200){
        upArrow.classList.remove("fadeout")
        upArrow.classList.add("fadein")
        
    }else{
        upArrow.classList.remove("fadein")
        upArrow.classList.add("fadeout")
    }
   
}
upArrow.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})