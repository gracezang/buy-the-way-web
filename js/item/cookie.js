
window.addEventListener('load', function(){


    var CookieInCart = false;

    var Cookie = 1;

    var CookieInc = document.getElementById("addCookie");
    var CookieDec = document.getElementById("minusCookie");
    var CookieQuantity = document.getElementById('quantityCookie');
    var CookieToCart = document.getElementById('addCookieToCart');
    var CookieAdded = document.getElementById('CookieAdded');

    
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
        //alert(Cookie + " Cookie(s) added to cart");
        //add to list
        CookieToCart.style.display = "none";
        CookieAdded.style.display = "block";
        CookieInCart = true;
        localStorage.setItem("Cookie",Cookie.toString());
    }


    
  });
