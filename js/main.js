(() =>{document.getElementById('journey-link').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Show the preloader
    document.querySelector(".preloader").classList.remove("fade-out");
    
    // Scroll to the target section
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  
    // Hide the preloader after a delay
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 600);
  });
  
    const hamburgerbtn=document.querySelector(".hamburger-btn"),navMenu=document.querySelector(".nav-menu"),closeNavbtn=navMenu.querySelector(".close-nav-menu");

    hamburgerbtn.addEventListener("click",showNavMenu);
    closeNavbtn.addEventListener("click",hideNavmenu);

    function showNavMenu(){
        navMenu.classList.toggle("open");
        // bodyScrollingToggle();
    }
    function hideNavmenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        // bodyScrollingToggle();

    }


    
    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300);
    }
    

    document.addEventListener("click" ,(event)=>{
        if(event.target.classList.contains('link-item')){
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;
                const activeSection = document.querySelector(".section.active");
                if (activeSection) {
                  activeSection.classList.add("hide");
                  activeSection.classList.remove("active");
                }
                if(hash){
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                }
                const activeNavMenu = navMenu.querySelector(".active");
                if (activeNavMenu) {
                activeNavMenu.classList.add("outer-shadow","hover-in-shadow");
                activeNavMenu.classList.remove("active");
                }

                event.target.classList.add("active");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
                hideNavmenu();
            }
        }
    })
})();


document.addEventListener('click', function () {
    var scrollBtn = document.querySelector('.back-to-top a');
  
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var scrollOptions = {
        top: 0,
        behavior: 'smooth'
      };
      window.scrollTo(scrollOptions);
    });
  
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY;
      if (scrollPos > 200) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });
  });
  

/*about section */
// Get the navigation items

(
    ()=>{
        const aboutSection=document.querySelector(".about-section"),tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click" , (event) =>{

            if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){

                
                const target= event.target.getAttribute("data-target");
                console.log(target);
                
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

                

                event.target.classList.add("active","outer-shadow");

                aboutSection.querySelector(".tab-content.active").classList.remove("active");

                aboutSection.querySelector(target).classList.add("active");
                
            }
        })
    }
)();


(() =>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },600)
})
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    function sendEmail() {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "shubhangi.batra13@gmail.com",
          Password: "58040150ABC2E20F0A251B31B768B55996DF",
          To: 'shubhangi.batra01@gmail.com',
          From: "shubhangi.batra13@gmail.com",
          Subject: document.getElementById("Subject"),
          Body:   "Name: " + document.getElementById("name").value +
          "<br>Email: " + document.getElementById("email").value +
          "<br>Phone: " + document.getElementById("number").value +
          "<br>Message: " + document.getElementById("message").value
        }).then(
          function () {
            alert("Email Sent!");
            form.reset();
          }
        );
      }

      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        sendEmail();
      });
});

var typed = new Typed(".typing", {
    strings: ["Aspiring Software Engineer","Upcoming SWE Intern @Microsoft","Front-End Developer", "Competitive Programmer","Undergrad"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
    });
    srtop.reveal('.work .prjbox',{interval: 200});     
    srtop.reveal(' .content h3',{delay: 300});
srtop.reveal(' .content .tag',{delay: 400}); 
srtop.reveal('.content p',{delay: 300}); 
srtop.reveal('.content .box-container',{delay: 300}); 
srtop.reveal('.content .resumebtn',{delay: 300}); 















