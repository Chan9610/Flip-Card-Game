const start = document.querySelector("#screen1 button")
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const frontImages = document.querySelectorAll(".flip-card-front img ");
const BackImages = document.querySelectorAll(".flip-card-back");
const displaypara = document.getElementById("displaypara")
const paratimer = document.getElementById("paratimer")
const screen3 = document.getElementById("screen3")
const numberofclicks = document.getElementById("numberofclicks");
const totaltiming = document.getElementById("totaltiming");

let counter = 0;
let displaycounter = 0;
let x = 0;

const images = ["AH.jpg", "AR.jpg", "AS.jpg", "CV.jpg", "DJ.jpg", "DR.webp", "AH.jpg", "AR.jpg", "AS.jpg", "CV.jpg", "DJ.jpg", "DR.webp"];
const uniqueValues = [];
const openPhoto = [];

start.addEventListener("click", () => {
    screen1.style.display = "none"
    screen2.style.display = "flex"
    startTimer()

})
function screenthird(){
    if(x===10){
        numberofclicks.innerHTML= displaycounter;

        totaltiming.innerHTML= x;

        screen2.style.display = "none"

        screen3.style.display ="flex"
        screen3.classList.add("sc3")

    }
}
function startTimer(){
    let start = setInterval(function(){
        paratimer.innerHTML= x= x+1
        if(x===60){
            clearInterval(start)
        }
        screenthird()
    
    }
    ,
    1000)
}



frontImages.forEach((image) => {
    image.addEventListener("click", () => {
        displaycounter++
        displaypara.innerHTML=displaycounter;
        
        
        setTimeout(() => {
            

            counter++
            image.parentElement.parentElement.style.transform = "rotateY(180deg)";

            openPhoto.push(image.parentElement.nextElementSibling.children[0]);

            if (counter > 1) {
                setTimeout(() => {
                    if (openPhoto[0].src === openPhoto[1].src) {
                        
                    }
                    else {
                        openPhoto.forEach((img) => {
                            img.parentElement.parentElement.style.transform = "rotateY(0)";
                        });
                    }
                    openPhoto.length = 0;
                    counter = 0;
                }, 1000)
            }

        })

    })
})

for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    
    img.src = "assets/" + images[getARandomValue()]
    BackImages[i].append(img);
}

function getARandomValue() {
    const randomValue = Math.floor(Math.random() * images.length);
    if (uniqueValues.includes(randomValue)) {
        return getARandomValue();
    }
    else {
        uniqueValues.push(randomValue);
        return randomValue;
    }
}