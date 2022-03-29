
window.addEventListener('load', function(){


    var TurkeyInCart = false;

    var Turkey = 1;

    var TurkeyInc = document.getElementById("addTurkey");
    var TurkeyDec = document.getElementById("minusTurkey");
    var TurkeyQuantity = document.getElementById('quantityTurkey');
    var TurkeyToCart = document.getElementById('addTurkeyToCart');
    var TurkeyAdded = document.getElementById('TurkeyAdded');

    
    TurkeyInc.onclick = function(){     
        if (!TurkeyInCart){
            Turkey++;
            TurkeyQuantity.innerHTML = Turkey;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    TurkeyDec.onclick = function(){
        if (!TurkeyInCart){
            if (Turkey > 1){
                Turkey--;
                TurkeyQuantity.innerHTML = Turkey;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    TurkeyToCart.onclick = function(){
        //alert(Turkey + " Turkey(s) added to cart");
        //add to list
        TurkeyToCart.style.display = "none";
        TurkeyAdded.style.display = "block";
        TurkeyInCart = true;
        localStorage.setItem("Turkey",Turkey.toString());
    }


    
  });
