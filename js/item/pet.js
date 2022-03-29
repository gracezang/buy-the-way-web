
window.addEventListener('load', function(){
    


    var dogfoodInCart = false;
    var catfoodInCart = false;
    var cattreeInCart = false;
    var dogfood = 1;
    var catfood = 1;
    var cattree =1;
    var dogfoodInc = document.getElementById("adddogfood");
    var dogfoodDec = document.getElementById("minusdogfood");
    var dogfoodQuantity = document.getElementById('quantitydogfood');
    var dogfoodToCart = document.getElementById('adddogfoodToCart');
    var dogfoodAdded = document.getElementById('dogfoodAdded');
    var catfoodInc = document.getElementById("addcatfood");
    var catfoodDec = document.getElementById('minuscatfood');
    var catfoodQuantity = document.getElementById('quantitycatfood');
    var catfoodToCart = document.getElementById('addcatfoodToCart');
    var catfoodAdded = document.getElementById('catfoodAdded');
    var cattreeInc = document.getElementById("addcattree");
    var cattreeDec = document.getElementById('minuscattree');
    var cattreeQuantity = document.getElementById('quantitycattree');
    var cattreeToCart = document.getElementById('addcattreeToCart');
    var cattreeAdded = document.getElementById('cattreeAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Dogfood"){
                dogfoodInCart = true;
                dogfoodQuantity.style.display = "none";
                dogfoodInc.style.display = "none";
                dogfoodDec.style.display = "none";
                dogfoodToCart.style.display = "none";
                dogfoodAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Cattree"){
                cattreeInCart = true;
                cattreeQuantity.style.display = "none";
                cattreeInc.style.display = "none";
                cattreeDec.style.display = "none";
                cattreeToCart.style.display = "none";
                cattreeAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Catfood"){
                catfoodInCart = true;
                catfoodQuantity.style.display = "none";
                catfoodInc.style.display = "none";
                catfoodDec.style.display = "none";
                catfoodToCart.style.display = "none";
                catfoodAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    dogfoodInc.onclick = function(){     
        if (!dogfoodInCart){
            dogfood++;
            dogfoodQuantity.innerHTML = dogfood;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    dogfoodDec.onclick = function(){
        if (!dogfoodInCart){
            if (dogfood > 1){
                dogfood--;
                dogfoodQuantity.innerHTML = dogfood;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    dogfoodToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            dogfoodInCart = true;
                dogfoodQuantity.style.display = "none";
                dogfoodInc.style.display = "none";
                dogfoodDec.style.display = "none";
                dogfoodToCart.style.display = "none";
                dogfoodAdded.style.display = "block";
            localStorage.setItem("Dogfood",dogfood.toString());
            count++;
        }
    }


    catfoodInc.onclick = function(){     
        if (!catfoodInCart){
            catfood++;
            catfoodQuantity.innerHTML = catfood;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    catfoodDec.onclick = function(){
        if (!catfoodInCart){
            if (catfood > 1){
                catfood--;
                catfoodQuantity.innerHTML = catfood;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    catfoodToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            catfoodInCart = true;
            catfoodQuantity.style.display = "none";
            catfoodInc.style.display = "none";
            catfoodDec.style.display = "none";
            catfoodToCart.style.display = "none";
            catfoodAdded.style.display = "block";
            localStorage.setItem("Catfood",catfood.toString());
            count++;
        }
    }

    cattreeInc.onclick = function(){     
        if (!cattreeInCart){
            cattree++;
            cattreeQuantity.innerHTML = cattree;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    cattreeDec.onclick = function(){
        if (!cattreeInCart){
            if (cattree > 1){
                cattree--;
                cattreeQuantity.innerHTML = cattree;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    cattreeToCart.onclick = function(){
        //alert(dogfood + " dogfood(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            cattreeInCart = true;
            cattreeQuantity.style.display = "none";
            cattreeInc.style.display = "none";
            cattreeDec.style.display = "none";
            cattreeToCart.style.display = "none";
            cattreeAdded.style.display = "block";
            localStorage.setItem("Cattree",cattree.toString());
            count++;
        }
    }
    
  });
