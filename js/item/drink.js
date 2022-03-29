
window.addEventListener('load', function(){


    var juiceInCart = false;
    var sodaInCart = false;
    var juice = 1;
    var soda = 1;
    var juiceInc = document.getElementById("addJuice");
    var juiceDec = document.getElementById("minusJuice");
    var juiceQuantity = document.getElementById('quantityJuice');
    var juiceToCart = document.getElementById('addJuiceToCart');
    var juiceAdded = document.getElementById('juiceAdded');
    var sodaInc = document.getElementById("addSoda");
    var sodaDec = document.getElementById('minusSoda');
    var sodaQuantity = document.getElementById('quantitySoda');
    var sodaToCart = document.getElementById('addSodaToCart');
    var sodaAdded = document.getElementById('sodaAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Juice"){
                juiceInCart = true;
                juiceQuantity.style.display = "none";
                juiceInc.style.display = "none";
                juiceDec.style.display = "none";
                juiceToCart.style.display = "none";
                juiceAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Soda"){
                sodaInCart = true;
                sodaQuantity.style.display = "none";
                sodaInc.style.display = "none";
                sodaDec.style.display = "none";
                sodaToCart.style.display = "none";
                sodaAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    juiceInc.onclick = function(){     
        if (!juiceInCart){
            juice++;
            juiceQuantity.innerHTML = juice;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    juiceDec.onclick = function(){
        if (!juiceInCart){
            if (juice > 1){
                juice--;
                juiceQuantity.innerHTML = juice;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    juiceToCart.onclick = function(){
        //alert(juice + " juice(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            juiceInCart = true;
            juiceQuantity.style.display = "none";
            juiceInc.style.display = "none";
            juiceDec.style.display = "none";
            juiceToCart.style.display = "none";
            juiceAdded.style.display = "block";
            localStorage.setItem("Juice",juice.toString());
            count++;
        }
    }


    sodaInc.onclick = function(){     
        if (!sodaInCart){
            soda++;
            sodaQuantity.innerHTML = soda;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    sodaDec.onclick = function(){
        if (!sodaInCart){
            if (soda > 1){
                soda--;
                sodaQuantity.innerHTML = soda;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    sodaToCart.onclick = function(){
        //alert(juice + " juice(s) added to cart");
        //add to list
        console.log(count);
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            sodaInCart = true;
            sodaQuantity.style.display = "none";
            sodaInc.style.display = "none";
            sodaDec.style.display = "none";
            sodaToCart.style.display = "none";
            sodaAdded.style.display = "block";
            localStorage.setItem("Soda",soda.toString());
            count++;
        }
    }
    
  });
