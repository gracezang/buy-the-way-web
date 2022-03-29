

window.addEventListener('load', function(){

    var BroccoliInCart = false;
    var CucumberInCart = false;
    var Broccoli = 1;
    var Cucumber = 1;
    var BroccoliInc = document.getElementById("addBroccoli");
    var BroccoliDec = document.getElementById("minusBroccoli");
    var BroccoliQuantity = document.getElementById('quantityBroccoli');
    var BroccoliToCart = document.getElementById('addBroccoliToCart');
    var BroccoliAdded = document.getElementById('BroccoliAdded');
    var CucumberInc = document.getElementById("addCucumber");
    var CucumberDec = document.getElementById('minusCucumber');
    var CucumberQuantity = document.getElementById('quantityCucumber');
    var CucumberToCart = document.getElementById('addCucumberToCart');
    var CucumberAdded = document.getElementById('CucumberAdded');
    var count = 0;
    
    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Cucumber"){
                CucumberInCart = true;
                CucumberQuantity.style.display = "none";
                CucumberInc.style.display = "none";
                CucumberDec.style.display = "none";
                CucumberToCart.style.display = "none";
                CucumberAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Broccoli"){
                BroccoliInCart = true;
                BroccoliToCart.style.display = "none";
                BroccoliQuantity.style.display = "none";
                BroccoliInc.style.display = "none";
                BroccoliDec.style.display = "none";
                BroccoliAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }

    
    BroccoliInc.onclick = function(){     
        if (!BroccoliInCart){
            Broccoli++;
            BroccoliQuantity.innerHTML = Broccoli;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BroccoliDec.onclick = function(){
        if (!BroccoliInCart){
            if (Broccoli > 1){
                Broccoli--;
                BroccoliQuantity.innerHTML = Broccoli;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BroccoliToCart.onclick = function(){
        //alert(Broccoli + " Broccoli(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            BroccoliToCart.style.display = "none";
                BroccoliQuantity.style.display = "none";
                BroccoliInc.style.display = "none";
                BroccoliDec.style.display = "none";
                BroccoliAdded.style.display = "block";
            BroccoliInCart=true;
            localStorage.setItem("Broccoli",Broccoli.toString());
            count++;
        }
    }


    CucumberInc.onclick = function(){     
        if (!CucumberInCart){
            Cucumber++;
            CucumberQuantity.innerHTML = Cucumber;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CucumberDec.onclick = function(){
        if (!CucumberInCart){
            if (Cucumber > 1){
                Cucumber--;
                CucumberQuantity.innerHTML = Cucumber;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    CucumberToCart.onclick = function(){
        //alert(Broccoli + " Broccoli(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            CucumberQuantity.style.display = "none";
                CucumberInc.style.display = "none";
                CucumberDec.style.display = "none";
                CucumberToCart.style.display = "none";
                CucumberAdded.style.display = "block";
            CucumberInCart=true;
            localStorage.setItem("Cucumber",Cucumber.toString());
            count++;
        }
    }
    
  });
