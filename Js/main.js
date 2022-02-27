var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elResult= document.querySelector(".result");
var elResultMan= document.querySelector(".result-man");
var elResultVelo= document.querySelector(".result-bicycle");
var elResultCar= document.querySelector(".result-car");
var elResultAirplan= document.querySelector(".result-airplan");




elForm.addEventListener("submit", function(e){
    e.preventDefault();

    var elInputVal= Number(elInput.value.trim());
    var elManSpeed= 3.6;
    var elVeloSpeed= 20.1;
    var elCarSpeed=80;
    var elAirplanSpeed=800;

    function person(){
        return elInputVal/elManSpeed;
    }

    function velo(){
        return elInputVal/elVeloSpeed;
    }

    function car(){
        return elInputVal/elCarSpeed;
    }

    function airplan(){
        return elInputVal/elAirplanSpeed;
    }

    if (elInputVal<=0 || isNaN(elInputVal)) {
        elResult.textContent=("Iltimos 0 dan katta va raqam kiriting");

        elResult.classList.add("result-error");
        elResult.classList.remove("result-succes");

        return;
    }

    else{
        elResult.textContent=("Shartga mos qiymat kiritildi");
        elResult.classList.add("result-succes");
        elResult.classList.remove("result-error");
    }

    elResultMan.textContent= Math.round((person())/60) + " " + "soat" + " "
    + Math.round(person() % 60) + "minut";

    elResultVelo.textContent= Math.round((velo())/60) + " " + "soat" + " "
    + Math.round(velo() % 60) + "minut";

    elResultCar.textContent= Math.round((car())/60) + " " + "soat" + " "
    + Math.round(car() % 60) + "minut";

    elResultAirplan.textContent= Math.round((airplan())/60) + " " + "soat" + " "
    + Math.round(airplan() % 60)+ "minut";
    
})