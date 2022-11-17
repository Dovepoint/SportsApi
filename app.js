//TOGGLEMENU START
//declaring
const burgerMenu = document.querySelector("header img");
const menuCont = document.querySelector(".menuCont");

//logic
const toggleMenu = () => {
    menuCont.classList.toggle("toggleBurger");
};

burgerMenu.addEventListener("click", toggleMenu);
//TOGGLEMENU END

//ACCORDION START
//declaring
const optButt = document.querySelectorAll(".optButt");

//logic
for(let i=0;i<optButt.length;i++){
    optButt[i].addEventListener("click", ()=>{
        optButt[i].nextElementSibling.classList.toggle("toggleOpt");
    });
}
//ACCORDION END

//CHART TYPE START
//display the choice options
const typeChart = document.getElementsByName("type");
const bar = document.querySelectorAll(".bar");
const pie = document.querySelectorAll(".pie");
let chxt ="";

for(let i=0;i<typeChart.length;i++){
    typeChart[i].addEventListener("change", ()=> {
        if(typeChart[0].checked){
            for(let i=0;i<bar.length;i++){
                bar[i].style.display = "block";
                chxt = "x,y";
            };
            for(let i=0;i<pie.length;i++){
                pie[i].style.display = "none";
            };
        }
        if(typeChart[1].checked){
            for(let i=0;i<bar.length;i++){
                bar[i].style.display = "none";
                chxt = "";
            };
            for(let i=0;i<pie.length;i++){
                pie[i].style.display = "block";
            };
        }
    });
}
const direction = document.getElementsByName("direction");
const dnut = document.querySelectorAll(".doughn");

for(let i=0;i<direction.length;i++){
    direction[i].addEventListener("change", ()=>{
        if(direction[(direction.length-1)].checked){
            for(let i=0;i<dnut.length;i++){
                dnut[i].style.display = "block";
            }
        }
        else {
            for(let i=0;i<dnut.length;i++){
                dnut[i].style.display = "none";
                dnut[1].value = "";
            }
        }
    });
}
//end
//CHART TYPE END


//CALL LINK START
let cht ="";
let chco ="";
let chs ="";
let chd ="";
let chl ="";
let chli ="";
let midValue = "";
let chxl = "";
let barLabs = "";
const bLabel = document.querySelector("#barLabel");
const pLabel = document.querySelector("#pieLabel");
const itemNum = document.querySelector("#itemNum");
const size = document.getElementsByName("size");
const color = document.getElementsByName("color");
const submit = document.querySelector("#submit");


//assign chl value
bLabel.addEventListener("keyup", ()=>{
    chxl = bLabel.value;
});

//assign chco value
for(let i=0;i<color.length;i++){
    color[i].addEventListener("change", ()=>{
        chco = color[i].value.slice(1);
    });
}

 //assign cht value
 for(let i=0;i<direction.length;i++){
    direction[i].addEventListener("change", ()=>{
        if(direction[i].checked){
            cht = direction[i].value;
        }
    }); 
}

//assign chs value
for(let i=0;i<size.length;i++){
    size[i].addEventListener("change", ()=>{
        if(size[i].checked){
            chs = size[i].value;
        }
    });
}

//assign chd value
itemNum.addEventListener("keyup", ()=>{
    chd = itemNum.value;
});

//assign chl value
pLabel.addEventListener("keyup", ()=>{
    chl = pLabel.value;
});

//assign chli value
dnut[1].addEventListener("keyup", ()=>{
    chli = dnut[1].value;
});

submit.addEventListener("click", ()=>{
    if(chli) midValue = `&chli=${chli}`;
    else midValue = "";
    if(chxl) barLabs = `&chxl=0:|${chxl}`;
    else barLabs = "";
    let apiLink = `https://image-charts.com/chart??chxt=${chxt}&cht=${cht}&chco=${chco}&chs=${chs}&chd=t:${chd}&chl=${chl}${midValue}${barLabs}`;

    fetch(apiLink)
    .then((res)=>{
        console.log(res);
        if(document.querySelector(".img")){
            document.querySelector(".img").src = res.url;
        }
        else{
        const pic = document.querySelector("picture");
        const display = document.createElement("img");
        display.src = res.url;
        display.classList.add("img");
        pic.appendChild(display);
        }
        for(let i=0;i<optButt.length;i++){
            optButt[i].nextElementSibling.style.display = "none";
        };
    });
});
//CALL LINK END

//RESET START
const reset = document.querySelector("#reset");

reset.addEventListener("click", ()=>{
    location.reload();
});
//RESET END