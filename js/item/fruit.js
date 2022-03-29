
window.addEventListener('load', function(){
    var AppleInCart = false;
    var BananaInCart = false;
    var GrapeInCart = false;
    var Apple = 1;
    var Banana = 1;
    var Grape =1;
    var AppleInc = document.getElementById("addApple");
    var AppleDec = document.getElementById("minusApple");
    var AppleQuantity = document.getElementById('quantityApple');
    var AppleToCart = document.getElementById('addAppleToCart');
    var AppleAdded = document.getElementById('AppleAdded');
    var BananaInc = document.getElementById("addBanana");
    var BananaDec = document.getElementById('minusBanana');
    var BananaQuantity = document.getElementById('quantityBanana');
    var BananaToCart = document.getElementById('addBananaToCart');
    var BananaAdded = document.getElementById('BananaAdded');
    var GrapeInc = document.getElementById("addGrape");
    var GrapeDec = document.getElementById('minusGrape');
    var GrapeQuantity = document.getElementById('quantityGrape');
    var GrapeToCart = document.getElementById('addGrapeToCart');
    var GrapeAdded = document.getElementById('GrapeAdded');
    var count = 0;

    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Grape"){
                GrapeInCart = true;
                GrapeQuantity.style.display = "none";
                GrapeInc.style.display = "none";
                GrapeDec.style.display = "none";
                GrapeToCart.style.display = "none";
                GrapeAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Banana"){
                BananaInCart = true;
                BananaQuantity.style.display = "none";
                BananaInc.style.display = "none";
                BananaDec.style.display = "none";
                BananaToCart.style.display = "none";
                BananaAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Apple"){
                AppleInCart = true;
                AppleQuantity.style.display = "none";
                AppleInc.style.display = "none";
                AppleDec.style.display = "none";
                AppleToCart.style.display = "none";
                AppleAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }
    
    
    AppleInc.onclick = function(){     
        if (!AppleInCart){
            Apple++;
            AppleQuantity.innerHTML = Apple;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    AppleDec.onclick = function(){
        if (!AppleInCart){
            if (Apple > 1){
                Apple--;
                AppleQuantity.innerHTML = Apple;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    AppleToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            AppleInCart = true;
            AppleQuantity.style.display = "none";
            AppleInc.style.display = "none";
            AppleDec.style.display = "none";
            AppleToCart.style.display = "none";
            AppleAdded.style.display = "block";
            localStorage.setItem("Apple",Apple.toString());
            count++
        }
    }


    BananaInc.onclick = function(){     
        if (!BananaInCart){
            Banana++;
            BananaQuantity.innerHTML = Banana;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BananaDec.onclick = function(){
        if (!BananaInCart){
            if (Banana > 1){
                Banana--;
                BananaQuantity.innerHTML = Banana;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    BananaToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            BananaInCart = true;
            BananaQuantity.style.display = "none";
            BananaInc.style.display = "none";
            BananaDec.style.display = "none";
            BananaToCart.style.display = "none";
            BananaAdded.style.display = "block";
            localStorage.setItem("Banana",Banana.toString());
            count++;
        }
    }

    GrapeInc.onclick = function(){     
        if (!GrapeInCart){
            Grape++;
            GrapeQuantity.innerHTML = Grape;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    GrapeDec.onclick = function(){
        if (!GrapeInCart){
            if (Grape > 1){
                Grape--;
                GrapeQuantity.innerHTML = Grape;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    GrapeToCart.onclick = function(){
        //alert(Apple + " Apple(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            GrapeInCart = true;
            GrapeQuantity.style.display = "none";
            GrapeInc.style.display = "none";
            GrapeDec.style.display = "none";
            GrapeToCart.style.display = "none";
            GrapeAdded.style.display = "block";
            localStorage.setItem("Grape",Grape.toString());
            count++;
        }
    }
    
  });