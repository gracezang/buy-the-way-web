
window.addEventListener('load', function(){
    


    var screwInCart = false;
    var screwdriverInCart = false;
    var hammerInCart = false;
    var screw = 1;
    var screwdriver = 1;
    var hammer =1;
    var screwInc = document.getElementById("addscrew");
    var screwDec = document.getElementById("minusscrew");
    var screwQuantity = document.getElementById('quantityscrew');
    var screwToCart = document.getElementById('addscrewToCart');
    var screwAdded = document.getElementById('screwAdded');
    var screwdriverInc = document.getElementById("addscrewdriver");
    var screwdriverDec = document.getElementById('minusscrewdriver');
    var screwdriverQuantity = document.getElementById('quantityscrewdriver');
    var screwdriverToCart = document.getElementById('addscrewdriverToCart');
    var screwdriverAdded = document.getElementById('screwdriverAdded');
    var hammerInc = document.getElementById("addhammer");
    var hammerDec = document.getElementById('minushammer');
    var hammerQuantity = document.getElementById('quantityhammer');
    var hammerToCart = document.getElementById('addhammerToCart');
    var hammerAdded = document.getElementById('hammerAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Screw"){
                screwInCart = true;
                screwQuantity.style.display = "none";
                screwInc.style.display = "none";
                screwDec.style.display = "none";
                screwToCart.style.display = "none";
                screwAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Hammer"){
                hammerInCart = true;
                hammerQuantity.style.display = "none";
                hammerInc.style.display = "none";
                hammerDec.style.display = "none";
                hammerToCart.style.display = "none";
                hammerAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Screwdriver"){
                screwdriverInCart = true;
                screwdriverQuantity.style.display = "none";
                screwdriverInc.style.display = "none";
                screwdriverDec.style.display = "none";
                screwdriverToCart.style.display = "none";
                screwdriverAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    screwInc.onclick = function(){     
        if (!screwInCart){
            screw++;
            screwQuantity.innerHTML = screw;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    screwDec.onclick = function(){
        if (!screwInCart){
            if (screw > 1){
                screw--;
                screwQuantity.innerHTML = screw;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    screwToCart.onclick = function(){
        //alert(screw + " screw(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            screwInCart = true;
                screwQuantity.style.display = "none";
                screwInc.style.display = "none";
                screwDec.style.display = "none";
                screwToCart.style.display = "none";
                screwAdded.style.display = "block";
            localStorage.setItem("Screw",screw.toString());
            count++;
        }
    }


    screwdriverInc.onclick = function(){     
        if (!screwdriverInCart){
            screwdriver++;
            screwdriverQuantity.innerHTML = screwdriver;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    screwdriverDec.onclick = function(){
        if (!screwdriverInCart){
            if (screwdriver > 1){
                screwdriver--;
                screwdriverQuantity.innerHTML = screwdriver;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    screwdriverToCart.onclick = function(){
        //alert(screw + " screw(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            screwdriverInCart = true;
                screwdriverQuantity.style.display = "none";
                screwdriverInc.style.display = "none";
                screwdriverDec.style.display = "none";
                screwdriverToCart.style.display = "none";
                screwdriverAdded.style.display = "block";
            localStorage.setItem("Screwdriver",screwdriver.toString());
            count++;
        }
    }

    hammerInc.onclick = function(){     
        if (!hammerInCart){
            hammer++;
            hammerQuantity.innerHTML = hammer;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    hammerDec.onclick = function(){
        if (!hammerInCart){
            if (hammer > 1){
                hammer--;
                hammerQuantity.innerHTML = hammer;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    hammerToCart.onclick = function(){
        //alert(screw + " screw(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            hammerInCart = true;
                hammerQuantity.style.display = "none";
                hammerInc.style.display = "none";
                hammerDec.style.display = "none";
                hammerToCart.style.display = "none";
                hammerAdded.style.display = "block";
            localStorage.setItem("Hammer",hammer.toString());
            count++;
        }
    }
    
  });
