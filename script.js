function calculate(){
    let birthMonth = document.getElementById("month").value;
    let birthDate = document.getElementById("day").value;

    let signName = "Sign: ";
    let signDate = "Dates: ";
    let signElement = "Element: ";

    let aries = new Object();
    aries.name = "Aries";
    aries.date =  " March 21 - April 19";
    aries.elemental = "Fire" ;

    let taurus = new Object();
    taurus.name = "Taurus"
    taurus.date = "April 20 - May 20"
    taurus.elemental = "Earth" ;

    let gemini = new Object();
    gemini.name = "Gemini";
    gemini.date = "May 21 - June 20";
    gemini.elemental = "Air" ;

    let cancer = new Object();
    cancer.name = "Cancer";
    cancer.date = "June 21 - July 22";
    cancer.elemental = "Water" ;

    let leo = new Object();
    leo.name = "Leo";
    leo.date = "July 23 - AUgust 22";
    leo.elemental = "Fire" ;

    let virgo = new Object();
    virgo.name = "Virgo";
    virgo.date = "August 23 - September 22";
    virgo.elemental = "Earth" ;

    let libra = new Object();
    libra.name = "Libra";
    libra.date = "September 23 - October 22";
    libra.elemental = "Air" ;

    let scorpio = new Object();
    scorpio.name = "Scorpio";
    scorpio.date = "October 23 - November 21";
    scorpio.elemental = "Water";

    let sagittarius = new Object();
    sagittarius.name = "Sagittarius";
    sagittarius.date = "November 22 - December 21";
    sagittarius.elemental = "Fire"  ;

    let capricorn = new Object();
    capricorn.name = "Capricorn";
    capricorn.date = "December 22 - January 19";
    capricorn.elemental = "Earth";

    let aquarious = new Object();
    aquarious.name = "Aquarius";
    aquarious.date = "January 20 - February 18";
    aquarious.elemental = "Air" ;

    let pisces = new Object();
    pisces.name = "Pisces";
    pisces.date = "February 19 - March 20";
    pisces.elemental = "Water" ;


    if(birthMonth == "january"){
        if (birthDate >= 1 && birthDate <= 19){
            document.getElementById("sign").innerHTML = signName + capricorn.name;
            document.getElementById("date").innerHTML = signDate +  capricorn.date;
            document.getElementById("element").innerHTML = signElement + capricorn.elemental;
            

        } else if (birthDate >= 20 && birthDate <= 31){
            document.getElementById("sign").innerHTML = signName + aquarious.name;
            document.getElementById("date").innerHTML = signDate + aquarious.date;
            document.getElementById("element").innerHTML = signElement + aquarious.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "february"){
        if (birthDate >= 1 && birthDate <= 18){
            document.getElementById("sign").innerHTML = signName + aquarious.name;
            document.getElementById("date").innerHTML = signDate + aquarious.date;
            document.getElementById("element").innerHTML = signElement + aquarious.elemental;

        } else if (birthDate >= 19 && birthDate <= 29){
            document.getElementById("sign").innerHTML = signName + pisces.name;
            document.getElementById("date").innerHTML = signDate + pisces.date;
            document.getElementById("element").innerHTML = signElement + pisces.elemental;

        } else {
            alert("INVALID DATE");
        }
    }else if (birthMonth == "march"){
        if (birthDate >= 1 && birthDate <= 20){
            document.getElementById("sign").innerHTML = pisces.name;
            document.getElementById("date").innerHTML = signDate + pisces.date;
            document.getElementById("element").innerHTML = signElement + pisces.elemental;

        } else if (birthDate >= 21 && birthDate <= 31){
            document.getElementById("sign").innerHTML = signName + aries.name;
            document.getElementById("date").innerHTML = signDate + aries.date;
            document.getElementById("element").innerHTML = signElement + aries.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "april"){
        if (birthDate >= 1 && birthDate <= 19){
            document.getElementById("sign").innerHTML = signName + aries.name;
            document.getElementById("date").innerHTML = signDate + aries.date;
            document.getElementById("element").innerHTML = signElement + aries.elemental;

        } else if (birthDate >= 20 && birthDate <= 30){
            document.getElementById("sign").innerHTML = signName + taurus.name;
            document.getElementById("date").innerHTML = signDate + taurus.date;
            document.getElementById("element").innerHTML = signElement + taurus.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "may"){
        if (birthDate >= 1 && birthDate <= 20){
            document.getElementById("sign").innerHTML = signName + taurus.name;
            document.getElementById("date").innerHTML = signDate + taurus.date;
            document.getElementById("element").innerHTML = signElement + taurus.elemental;

        } else if (birthDate >= 21 && birthDate <= 31){
            document.getElementById("sign").innerHTML = signName + gemini.name;
            document.getElementById("date").innerHTML = signDate + gemini.date;
            document.getElementById("element").innerHTML = signElement + gemini.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "june"){
        if (birthDate >= 1 && birthDate <= 20){
            document.getElementById("sign").innerHTML = signName + gemini.name;
            document.getElementById("date").innerHTML = signDate + gemini.date;
            document.getElementById("element").innerHTML = signElement + gemini.elemental;

        } else if (birthDate >= 21 && birthDate <= 30){
            document.getElementById("sign").innerHTML = signName + cancer.name;
            document.getElementById("date").innerHTML = signDate + cancer.date;
            document.getElementById("element").innerHTML = signElement + cancer.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "july"){
        if (birthDate >= 1 && birthDate <= 22){
            document.getElementById("sign").innerHTML = signName + cancer.name;
            document.getElementById("date").innerHTML = signDate + cancer.date;
            document.getElementById("element").innerHTML = signElement + cancer.elemental;

        } else if (birthDate >= 23 && birthDate <= 31){
            document.getElementById("sign").innerHTML = signName + leo.name;
            document.getElementById("date").innerHTML = signDate + leo.date;
            document.getElementById("element").innerHTML = signElement + leo.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "august"){
        if (birthDate >= 1 && birthDate <= 22){
            document.getElementById("sign").innerHTML = signName + leo.name;
            document.getElementById("date").innerHTML = signDate + leo.date;
            document.getElementById("element").innerHTML = signElement + leo.elemental;

        } else if (birthDate >= 23 && birthDate <= 31){
            document.getElementById("sign").innerHTML =  signName + virgo.name;
            document.getElementById("date").innerHTML = signDate + virgo.date;
            document.getElementById("element").innerHTML = signElement + virgo.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "september"){
        if (birthDate >= 1 && birthDate <= 22){
            document.getElementById("sign").innerHTML =  signName + virgo.name;
            document.getElementById("date").innerHTML = signDate + virgo.date;
            document.getElementById("element").innerHTML = signElement + virgo.elemental;

        } else if (birthDate >= 23 && birthDate <= 30){
            document.getElementById("sign").innerHTML =  signName + libra.name;
            document.getElementById("date").innerHTML = signDate + libra.date;
            document.getElementById("element").innerHTML = signElement + libra.elemental;

        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "october"){
        if (birthDate >= 1 && birthDate <= 22){
            document.getElementById("sign").innerHTML =  signName + libra.name;
            document.getElementById("date").innerHTML = signDate + libra.date;
            document.getElementById("element").innerHTML = signElement + libra.elemental;
            
        } else if (birthDate >= 23 && birthDate <= 31){
            document.getElementById("sign").innerHTML =  signName + scorpio.name;
            document.getElementById("date").innerHTML = signDate + scorpio.date;
            document.getElementById("element").innerHTML = signElement + scorpio.elemental;
            
        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "november"){
        if (birthDate >= 1 && birthDate <= 21){
            document.getElementById("sign").innerHTML =  signName + scorpio.name;
            document.getElementById("date").innerHTML = signDate + scorpio.date;
            document.getElementById("element").innerHTML = signElement + scorpio.elemental;
            
        } else if (birthDate >= 22 && birthDate <= 30){
            document.getElementById("sign").innerHTML =  signName + sagittarius.name;
            document.getElementById("date").innerHTML = signDate + sagittarius.date;
            document.getElementById("element").innerHTML = signElement + sagittarius.elemental;
            
        } else {
            alert("INVALID DATE");
        }
    } else if (birthMonth == "december"){
        if (birthDate >= 1 && birthDate <= 21){
            document.getElementById("sign").innerHTML =  signName + sagittarius.name;
            document.getElementById("date").innerHTML = signDate + sagittarius.date;
            document.getElementById("element").innerHTML = signElement + sagittarius.elemental;
            
        } else if (birthDate >= 22 && birthDate <= 31){
            document.getElementById("sign").innerHTML =  signName + capricorn.name;
            document.getElementById("date").innerHTML = signDate + capricorn.date;
            document.getElementById("element").innerHTML = signElement + capricorn.elemental;
            
        } else {
            alert("INVALID DATE");
        }
    } else{
        alert("INVALID MONTH")
    }


    }