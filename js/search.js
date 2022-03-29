function getImg(search){
    var img = "a";
    if (search == "turkey"){
        img = "img/turkey.jpg";
    }
    if (search == "chip"){  
        img = "img/chip.jpg";
    }
    if (search == "milk"){  
        img = "img/milk.jpg"; 
    }
    if (search == "soda"){
        img = "img/soda.jpg";
    }
    if (search == "juice"){  
        img = "img/juice.jpg";
    }
    if (search == "salami"){
        img = "img/salami.jpg";
    }
    if (search == "ham"){
        img = "img/ham.jpg";
    }
    if (search == "sausage"){
        img = "img/sausage.jpg";
    }
    if (search == "cheese"){
        img = "img/cheese.jpg";
    }
    if (search == "broccoli"){
        img = "img/broccoli.jpg";
    }
    if (search == "cucumber"){
        img = "img/cucumber.jpg";
    }
    if (search == "apple"){
        img = "img/apple.jpg";
    }
    if (search == "banana"){
        img = "img/banana.jpg";
    }
    if (search == "grape"){
        img = "img/grape.jpg";
    }
    if (search == "cracker"){
        img = "img/cracker.jpg";
    }
    return img;
}


window.addEventListener('load', function(){
    var word;
    var search;
    var count = 0;
    for (var i = 0; i < localStorage.length; i++) {
        word = localStorage.key(i);
        if (localStorage.getItem(word) == "b"){
            search = word.substring(0,word.length-1);
        }else{
            count++;
        }
    }
    var item = document.getElementById("searchItem");
    var add = document.getElementById("add");
    var minus = document.getElementById("minus");
    var added = document.getElementById("Added");
    var toCart = document.getElementById("addToCart");
    var itemQuantity = document.getElementById("quantity");
    var quantity = 1;
    var itemInCart = false;
    item.onclick = function(){
        img = getImg(search);
        search = search.charAt(0).toUpperCase() + search.substring(1);
        if (localStorage.length != 0){
            for (var i = localStorage.length - 1; i >= 0; i--) {
                if (localStorage.key(i) == search){
                    itemInCart = true;
                    itemQuantity.style.display = "none";
                    add.style.display = "none";
                    minus.style.display = "none";
                    toCart.style.display = "none";
                    added.style.display = "block";
                }
            }
        }
        if (img != "a"){
            item.src = img;
            add.onclick = function(){     
                if (!itemInCart){
                    quantity++;
                    itemQuantity.innerHTML = quantity;
                }else{
                    alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
                }
            };
            minus.onclick = function(){
                if (!itemInCart){
                    if (quantity > 1){
                        quantity--;
                        itemQuantity.innerHTML = quantity;
                    }
                }else{
                    alert("Cannot Modify Quantity After Adding, Please Modify In MyList.");
                }
            };
            toCart.onclick = function(){
                //alert(Turkey + " Turkey(s) added to cart");
                //add to list
                if (count >= 10){
                    alert("A Maximum of 10 Items Can be Added Each Time");
                }else{
                    itemInCart = true;
                    itemQuantity.style.display = "none";
                    add.style.display = "none";
                    minus.style.display = "none";
                    toCart.style.display = "none";
                    added.style.display = "block";
                    localStorage.setItem(search,quantity.toString());
                    count++;
                }
            }
        }else{
            alert("Nothing is found, please modify your search.")
        }
    }
    item.click();
});