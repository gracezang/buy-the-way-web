window.addEventListener('load', function(){

    var SalamiInCart = false;
    var HamInCart = false;
    var Salami = 1;
    var Ham = 1;
    var SalamiInc = document.getElementById("addSalami");
    var SalamiDec = document.getElementById("minusSalami");
    var SalamiQuantity = document.getElementById('quantitySalami');
    var SalamiToCart = document.getElementById('addSalamiToCart');
    var SalamiAdded = document.getElementById('salamiAdded');
    var HamInc = document.getElementById("addHam");
    var HamDec = document.getElementById('minusHam');
    var HamQuantity = document.getElementById('quantityHam');
    var HamToCart = document.getElementById('addHamToCart');
    var HamAdded = document.getElementById('hamAdded');
    var TurkeyInCart = false;
    var SausageInCart = false;
    var Turkey = 1;
    var Sausage = 1;
    var TurkeyInc = document.getElementById("addTurkey");
    var TurkeyDec = document.getElementById("minusTurkey");
    var TurkeyQuantity = document.getElementById('quantityTurkey');
    var TurkeyToCart = document.getElementById('addTurkeyToCart');
    var TurkeyAdded = document.getElementById('TurkeyAdded');
    var SausageInc = document.getElementById("addSausage");
    var SausageDec = document.getElementById('minusSausage');
    var SausageQuantity = document.getElementById('quantitySausage');
    var SausageToCart = document.getElementById('addSausageToCart');
    var SausageAdded = document.getElementById('SausageAdded');
    var count = 0;

    if (localStorage.length != 0){
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i) == "Turkey"){
                TurkeyInCart = true;
                TurkeyQuantity.style.display = "none";
                TurkeyInc.style.display = "none";
                TurkeyDec.style.display = "none";
                TurkeyToCart.style.display = "none";
                TurkeyAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Ham"){
                HamInCart = true;
                HamQuantity.style.display = "none";
                HamInc.style.display = "none";
                HamDec.style.display = "none";
                HamToCart.style.display = "none";
                HamAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Salami"){
                SalamiInCart = true;
                SalamiQuantity.style.display = "none";
                SalamiInc.style.display = "none";
                SalamiDec.style.display = "none";
                SalamiToCart.style.display = "none";
                SalamiAdded.style.display = "block";
            }
            if (localStorage.key(i) == "Sausage"){
                SausageInCart = true;
                SausageQuantity.style.display = "none";
                SausageInc.style.display = "none";
                SausageDec.style.display = "none";
                SausageToCart.style.display = "none";
                SausageAdded.style.display = "block";
            }
            if (localStorage.getItem(localStorage.key(i)) != "b"){
                count++;
            }
        }
    }

    
    
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
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            TurkeyInCart = true;
                TurkeyQuantity.style.display = "none";
                TurkeyInc.style.display = "none";
                TurkeyDec.style.display = "none";
                TurkeyToCart.style.display = "none";
                TurkeyAdded.style.display = "block";
            localStorage.setItem("Turkey",Turkey.toString());
            count++;
        }
    }


    SausageInc.onclick = function(){     
        if (!SausageInCart){
            Sausage++;
            SausageQuantity.innerHTML = Sausage;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    SausageDec.onclick = function(){
        if (!SausageInCart){
            if (Sausage > 1){
                Sausage--;
                SausageQuantity.innerHTML = Sausage;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    SausageToCart.onclick = function(){
        //alert(Turkey + " Turkey(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            SausageInCart = true;
            SausageQuantity.style.display = "none";
            SausageInc.style.display = "none";
            SausageDec.style.display = "none";
            SausageToCart.style.display = "none";
            SausageAdded.style.display = "block";
            localStorage.setItem("Sausage",Sausage.toString());
            count++;
        }
    }
    
    
    SalamiInc.onclick = function(){     
        if (!SalamiInCart){
            Salami++;
            SalamiQuantity.innerHTML = Salami;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    SalamiDec.onclick = function(){
        if (!SalamiInCart){
            if (Salami > 1){
                Salami--;
                SalamiQuantity.innerHTML = Salami;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    SalamiToCart.onclick = function(){
        //alert(Salami + " Salami(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            SalamiInCart = true;
                SalamiQuantity.style.display = "none";
                SalamiInc.style.display = "none";
                SalamiDec.style.display = "none";
                SalamiToCart.style.display = "none";
                SalamiAdded.style.display = "block";
            localStorage.setItem("Salami",Salami.toString());
            count++;
        }
    }


    HamInc.onclick = function(){     
        if (!HamInCart){
            Ham++;
            HamQuantity.innerHTML = Ham;
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    HamDec.onclick = function(){
        if (!HamInCart){
            if (Ham > 1){
                Ham--;
                HamQuantity.innerHTML = Ham;
            }
        }else{
            alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
        }
    };
    HamToCart.onclick = function(){
        //alert(Salami + " Salami(s) added to cart");
        //add to list
        if (count >= 10){
            alert("A Maximum of 10 Items Can be Added Each Time");
        }else{
            HamInCart = true;
                HamQuantity.style.display = "none";
                HamInc.style.display = "none";
                HamDec.style.display = "none";
                HamToCart.style.display = "none";
                HamAdded.style.display = "block";
            localStorage.setItem("Ham",Ham.toString());
            count++;
        }
    }
    
  });
