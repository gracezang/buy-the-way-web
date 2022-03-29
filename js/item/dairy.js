
window.addEventListener('load', function(){
    

    var CheeseInCart = false;
    var MilkInCart = false;
    var Cheese = 1;
    var Milk = 1;
    var CheeseInc = document.getElementById("addCheese");
    var CheeseDec = document.getElementById("minusCheese");
    var CheeseQuantity = document.getElementById('quantityCheese');
    var CheeseToCart = document.getElementById('addCheeseToCart');
    var CheeseAdded = document.getElementById('CheeseAdded');
    var MilkInc = document.getElementById("addMilk");
    var MilkDec = document.getElementById('minusMilk');
    var MilkQuantity = document.getElementById('quantityMilk');
    var MilkToCart = document.getElementById('addMilkToCart');
    var MilkAdded = document.getElementById('MilkAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Cheese"){
                CheeseInCart = true;
                CheeseQuantity.style.display = "none";
                CheeseInc.style.display = "none";
                CheeseDec.style.display = "none";
                CheeseToCart.style.display = "none";
                CheeseAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Milk"){
                MilkInCart = true;
                MilkQuantity.style.display = "none";
                MilkInc.style.display = "none";
                MilkDec.style.display = "none";
                MilkToCart.style.display = "none";
                MilkAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }

    CheeseInc.onclick = function(){     
        if (!CheeseInCart){
            Cheese++;
            CheeseQuantity.innerHTML = Cheese;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CheeseDec.onclick = function(){
        if (!CheeseInCart){
            if (Cheese > 1){
                Cheese--;
                CheeseQuantity.innerHTML = Cheese;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CheeseToCart.onclick = function(){
        //alert(Cheese + " Cheese(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            CheeseInCart = true;
            CheeseQuantity.style.display = "none";
            CheeseInc.style.display = "none";
            CheeseDec.style.display = "none";
            CheeseToCart.style.display = "none";
            CheeseAdded.style.display = "block";
            localStorage.setItem("Cheese",Cheese.toString());
            count++;
        }
    }


    MilkInc.onclick = function(){     
        if (!MilkInCart){
            Milk++;
            MilkQuantity.innerHTML = Milk;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    MilkDec.onclick = function(){
        if (!MilkInCart){
            if (Milk > 1){
                Milk--;
                MilkQuantity.innerHTML = Milk;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    MilkToCart.onclick = function(){
        //alert(Cheese + " Cheese(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            MilkInCart = true;
            MilkQuantity.style.display = "none";
            MilkInc.style.display = "none";
            MilkDec.style.display = "none";
            MilkToCart.style.display = "none";
            MilkAdded.style.display = "block";
            localStorage.setItem("Milk",Milk.toString());
            count++;
        }
    }
    
  });
