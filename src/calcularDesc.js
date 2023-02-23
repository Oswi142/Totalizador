function calcularDesc(cant){
    var desc = 0;
    if(cant >= 0 && cant <1000){
        return desc;
    }
    else if(cant >999 && cant < 3000){
        return 5;
    }
    else if(cant >2999 && cant < 7000){
        return 7;
    }
    else if(cant >6999 && cant < 30001){
        return 10;
    }
    else if(cant >=29999){
        return 15;
    }
}
export default calcularDesc;