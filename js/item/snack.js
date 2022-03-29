
window.addEventListener('load', function(){
    


    var CrackerInCart = false;
    var ChipInCart = false;
    var CookieInCart = false;
    var Cracker = 1;
    var Chip = 1;
    var Cookie =1;
    var CrackerInc = document.getElementById("addCracker");
    var CrackerDec = document.getElementById("minusCracker");
    var CrackerQuantity = document.getElementById('quantityCracker');
    var CrackerToCart = document.getElementById('addCrackerToCart');
    var CrackerAdded = document.getElementById('CrackerAdded');
    var ChipInc = document.getElementById("addChip");
    var ChipDec = document.getElementById('minusChip');
    var ChipQuantity = document.getElementById('quantityChip');
    var ChipToCart = document.getElementById('addChipToCart');
    var ChipAdded = document.getElementById('ChipAdded');
    var CookieInc = document.getElementById("addCookie");
    var CookieDec = document.getElementById('minusCookie');
    var CookieQuantity = document.getElementById('quantityCookie');
    var CookieToCart = document.getElementById('addCookieToCart');
    var CookieAdded = document.getElementById('CookieAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Cracker"){
                CrackerInCart = true;
                CrackerQuantity.style.display = "none";
                CrackerInc.style.display = "none";
                CrackerDec.style.display = "none";
                CrackerToCart.style.display = "none";
                CrackerAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Cookie"){
                CookieInCart = true;
                CookieQuantity.style.display = "none";
                CookieInc.style.display = "none";
                CookieDec.style.display = "none";
                CookieToCart.style.display = "none";
                CookieAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Chip"){
                ChipInCart = true;
                ChipQuantity.style.display = "none";
                ChipInc.style.display = "none";
                ChipDec.style.display = "none";
                ChipToCart.style.display = "none";
                ChipAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    CrackerInc.onclick = function(){     
        if (!CrackerInCart){
            Cracker++;
            CrackerQuantity.innerHTML = Cracker;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CrackerDec.onclick = function(){
        if (!CrackerInCart){
            if (Cracker > 1){
                Cracker--;
                CrackerQuantity.innerHTML = Cracker;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CrackerToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            CrackerInCart = true;
                CrackerQuantity.style.display = "none";
                CrackerInc.style.display = "none";
                CrackerDec.style.display = "none";
                CrackerToCart.style.display = "none";
                CrackerAdded.style.display = "block";
            localStorage.setItem("Cracker",Cracker.toString());
            count++;
        }
    }


    ChipInc.onclick = function(){     
        if (!ChipInCart){
            Chip++;
            ChipQuantity.innerHTML = Chip;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    ChipDec.onclick = function(){
        if (!ChipInCart){
            if (Chip > 1){
                Chip--;
                ChipQuantity.innerHTML = Chip;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    ChipToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            ChipInCart = true;
            ChipQuantity.style.display = "none";
            ChipInc.style.display = "none";
            ChipDec.style.display = "none";
            ChipToCart.style.display = "none";
            ChipAdded.style.display = "block";
            localStorage.setItem("Chip",Chip.toString());
            count++;
        }
    }

    CookieInc.onclick = function(){     
        if (!CookieInCart){
            Cookie++;
            CookieQuantity.innerHTML = Cookie;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CookieDec.onclick = function(){
        if (!CookieInCart){
            if (Cookie > 1){
                Cookie--;
                CookieQuantity.innerHTML = Cookie;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CookieToCart.onclick = function(){
        //alert(Cracker + " Cracker(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            CookieInCart = true;
            CookieQuantity.style.display = "none";
            CookieInc.style.display = "none";
            CookieDec.style.display = "none";
            CookieToCart.style.display = "none";
            CookieAdded.style.display = "block";
            localStorage.setItem("Cookie",Cookie.toString());
            count++;
        }
    }
    
  });
