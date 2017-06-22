var home=document.getElementById("home")
var gallery=document.getElementById("gallery")
var contact=document.getElementById("contact")
var services=document.getElementById("services")
var about=document.getElementById("about")
var linkHome=document.getElementsByClassName("link-line-home")[0]
var linkGallery=document.getElementsByClassName("link-line-gallery")[0]
var linkContact=document.getElementsByClassName("link-line-contact")[0]
var linkServices=document.getElementsByClassName("link-line-services")[0]
var linkAbout=document.getElementsByClassName("link-line-about")[0]
home.addEventListener("mouseover", function(){
  linkHome.classList.remove("display-none")
})
home.addEventListener("mouseout", function(){
  linkHome.classList.add("display-none")
})
gallery.addEventListener("mouseover", function(){
  linkGallery.classList.remove("display-none")
})
gallery.addEventListener("mouseout", function(){
  linkGallery.classList.add("display-none")
})
contact.addEventListener("mouseover", function(){
  linkContact.classList.remove("display-none")
})
contact.addEventListener("mouseout", function(){
  linkContact.classList.add("display-none")
})
services.addEventListener("mouseover", function(){
  linkServices.classList.remove("display-none")
})
services.addEventListener("mouseout", function(){
  linkServices.classList.add("display-none")
})
about.addEventListener("mouseover", function(){
  linkAbout.classList.remove("display-none")
})
about.addEventListener("mouseout", function(){
  linkAbout.classList.add("display-none")
})
