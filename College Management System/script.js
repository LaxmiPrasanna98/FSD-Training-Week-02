

const year = document.getElementById("year");

if(year){
    year.innerText = new Date().getFullYear();
}




let eventCount = document.getElementById("eventCount");
let studentCount = document.getElementById("studentCount");
let prizeCount = document.getElementById("prizeCount");

if(eventCount){

    let e=0,s=0,p=0;

    let counter = setInterval(()=>{

        if(e<50){
            e++;
            eventCount.innerText=e+"+";
        }

        if(s<3000){
            s+=50;
            studentCount.innerText=s+"+";
        }

        if(p<100000){
            p+=2000;
            prizeCount.innerText="₹"+p;
        }

        if(e>=50 && s>=3000 && p>=100000){
            clearInterval(counter);
        }

    },50);
}




const regForm =
document.getElementById("registrationForm");

if(regForm){

    regForm.addEventListener("submit",function(e){

        e.preventDefault();

        document.getElementById("successMessage")
        .innerHTML=
        `
        <div class="alert alert-success mt-3">
        Registration Successful!
        </div>
        `;

        regForm.reset();

    });

}



const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        document.getElementById("contactMessage")
        .innerHTML=
        `
        <div class="alert alert-info mt-3">
        Message Sent Successfully!
        </div>
        `;

        contactForm.reset();

    });

}



function registerEvent(eventName){

    let selected =
    document.getElementById("selectedEvent");

    if(selected){
        selected.innerText = eventName;
    }

}



const searchEvent =
document.getElementById("searchEvent");

if(searchEvent){

    searchEvent.addEventListener("keyup",function(){

        let value =
        this.value.toLowerCase();

        let cards =
        document.querySelectorAll(".event-card");

        cards.forEach(card=>{

            let title =
            card.querySelector(".card-title")
            .innerText.toLowerCase();

            if(title.includes(value)){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }

        });

    });

}


const topBtn =
document.getElementById("topBtn");

if(topBtn){

    window.onscroll=function(){

        if(document.documentElement.scrollTop>200){
            topBtn.style.display="block";
        }
        else{
            topBtn.style.display="none";
        }

    };

    topBtn.onclick=function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    };

}