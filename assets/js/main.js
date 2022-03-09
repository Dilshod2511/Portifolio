// MENU SHOW Y HIDDEN 
const navMenu=document.getElementById('nav-menu'),
 navToggle=document.getElementById('nav-toggle'),
 navClose=document.getElementById('nav-close')

//-================= SHOW MENU /////////////////////////////
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',()=>{
        
 
        navMenu.classList.add('show-menu')
    })
}

//================ MENU HIDDEN ==============//
// == validate if constant exists ===//
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

//  Remove  
let navLink=document.querySelectorAll('.nav_link')


function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  
    

}

navLink.forEach(n => n.addEventListener('click' ,linkAction))

//  navLink.forEach(element => {
//      element.addEventListener('click',linkAction)
//      console.log(element)
//  });


// ======================== ACCORDION SKILLS==========================================//

 const skillsContent=document.getElementsByClassName('skills_content'),
 skillsHeader=document.querySelectorAll('.skills_header')


 function toggleSkills(){
     let itemClass=this.parentNode.className

     for(i=0;i<skillsContent.length;i++){
         let a=skillsContent[i].className='skills_content skills_close'
       
     }
     console.log(itemClass)
     if(itemClass==='skills_content skills_close'){
         this.parentNode.className='skills_content skills_open'
     }
 }

 skillsHeader.forEach((el)=>{
      el.addEventListener('click',toggleSkills)
 })
 

//  ====================== QUALIFICATION TABS ==================//

const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]')


tabs.forEach(tab=>{
    
    tab.addEventListener('click',() =>{
      const targe=document.querySelector(tab.dataset.target)
     
      console.log(tab)
      tabContents.forEach(tabContent =>{
          tabContent.classList.remove('qualification_active')
          console.log(tabContent)
      })
      targe.classList.add('qualification_active')
    //   console.log(targe)

      tabs.forEach(tab =>{
          tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
    //    console.log(tabs  )
    })
})



// ================================ SERVICES =================//

const modalViews=document.querySelectorAll('.services_modal'),
      modalbtns=document.querySelectorAll('.services_button'),
      modalcloses=document.querySelectorAll('.services_modal-close')
          

      let modal=function(modalClik){
        modalViews[modalClik].classList.add('active_modal')
         
      }

      modalbtns.forEach((modalbtn,i)=>{
          modalbtn.addEventListener('click', function (){
             modal(i)
          })
      })
          
      modalcloses.forEach(modalclose=>{
          modalclose.addEventListener('click',()=>{
              modalViews.forEach(modalview=>{
                  modalview.classList.remove('active_modal')
              })
          })
      })




    //   let modall=function(modalClik){
    //     let a= modalserv[modalClik].classList.remove('active_modal')
    //     console.log(a)
    //  }



// modalclose.forEach((a,s)=>{
//     a.addEventListener('click', function(){
      
//      modall(s)
        
//     })
// })
  
// ========================== PORTIFOLIO SWIPER =====================//

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    
  });
    
// ========================== SCROLL SECTIONS ACTIVE LINK =================//

const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset
    console.log(scrollY)

    sections.forEach(current=>{
        const sectionHigth=current.offsetHeight
        // console.log(sectionHigth)
        const sectionTop=current.offsetTop-50;
        // console.log(sectionTop)
      let  sectionid=current.getAttribute('id')
    //   console.log(sectionid)

        if(scrollY>sectionTop && scrollY <= sectionTop +sectionHigth){
         let a=   document.querySelector('.nav_menu a[href*='+ sectionid +']').classList.add('active-link')
            // console.log(a)
        }else{
          let b=  document.querySelector('.nav_menu a[href*='+ sectionid +']').classList.remove('active-link')
        //   console.log(b)
        }
    })
}
window.addEventListener('scroll',scrollActive)

// ==================================== CHANGE BACKGROUND COLOR==================//

function scrollHeader(){
    const nav = document.getElementById('header')
    // console.log(this.scrollY)
    if(this.scrollY>=80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// ====================== SCROLL UP ================================//


 
function scrollTOP(){
    const scrollup=document.getElementById('scroll-up')
    
  if(this.scrollY>=560) scrollup.classList.add('scroll-show');
  else scrollup.classList.remove('scroll-show')
}

window.addEventListener('scroll',scrollTOP)


// ========================= DARK LIGHT THEME ===================//

const themeButton =document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='uil-sun'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=> document.body.classList.contains(darkTheme) ? 'dark' : "light"
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme) ? 'uil-moon': 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon' ? 'add':'remove'](iconTheme)
}


themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-them', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})