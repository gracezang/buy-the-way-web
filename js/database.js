function createData(){
    var data = {};
    let apple1 =["Metro",1.99];
    let apple2 =["FoodBasic",1.99];
    let apple3 =["Costco",1.00];
    let salami1 = ["Metro",2.99];
    let cheese1 = ["Metro",1.99];
    let cheese2 = ["FoodBasic",1.99];
    let milk1 = ["Metro",5.99];
    let milk2 = ["FoodBasic",5.00];
    let milk3 = ["Costco",3.00];
    let grape1 = ["Metro",5.99];
    let grape2 = ["FoodBasic",5.00];
    let grape3 = ["Costco",3.00];
    let ham1 =["Metro",11.29];
    let ham2 =["FoodBasic",9.99];
    let broccoli1 =["FoodBasic",2.00];
    let broccoli2 =["Metro",2.00];
    let banana1 =["FoodBasic",1.50];
    let banana2 =["Metro",1.99];
    let banana3 =["Costco",1.00];
    let chip1 =["FoodBasic",1.50];
    let chip2 =["Metro",1.99];
    let chip3 =["Costco",1.00];
    let cracker1 =["FoodBasic",1.50];
    let cracker2 =["Metro",1.99];
    let cracker3 =["Costco",1.00];
    let cucumber1 =["FoodBasic",7.99];
    let cucumber2 =["Metro",3.99];
    let sausage1 =["Metro",17.99];
    let sausage2 =["FoodBasic",13.99];
    let sausage3 =["Costco",20.99];
    let cookie1 =["Metro",9.99];
    let cookie2 =["FoodBasic", 7,99];
    let cookie3 =["Costco",3.99];
    let turkey1 =["Metro",39.99];
    let turkey2 =["FoodBasic",39.99];
    let juice1 =["Metro",9.99];
    let juice2 =["FoodBasic",7.99];
    let juice3 =["Costco",5.50];
    let soda1 =["Metro",9.99];
    let soda2 =["FoodBasic",7.99];
    let soda3 =["Costco",5.50];
    let catFood1 =["PetValu", 34.99];
    let catFood2=["GlobalPetFood", 28.99];
    let dogFood1 =["PetValu", 25.99];
    let dogFood2 =["GlobalPetFood", 28.99];
    let dogFood3 =["Costco",22.50];
    let catTree1 =["PetValu", 45.99];
    let catTree2 =["GlobalPetFood", 55.99];
    let catTree3 =["Costco", 39.99];
    let hammer1 =["CanadianTire", 7.99]; 
    let hammer2 =["Dollarama", 2.99];
    let hammer3 =["Costco", 6.99];
    let screw1 =["Dollarama", 1.00];
    let screw2 =["CanadianTire", 1.00];
    let screwdriver1 =["Dollarama", 1.99];
    let screwdriver2 =["CanadianTire", 2.99]; 
    let screwdriver3 =["CanadaComputer", 4.99]; 

    data["salami"] = [salami1];
    data["cheese"] = [cheese1,cheese2];
    data["milk"] = [milk1,milk2,milk3];
    data["grape"] = [grape1,grape2,grape3];
    data["cracker"] = [cracker1,cracker2,cracker3];
    data["chip"] = [chip1,chip2,chip3];
    data["juice"] = [juice1,juice2,juice3];
    data["broccoli"] = [broccoli1,broccoli2];
    data["catfood"] = [catFood1,catFood2];
    data["dogfood"] = [dogFood1,dogFood2,dogFood3];
    data["cattree"] = [catTree1,catTree2,catTree3];
    data["hammer"] = [hammer1,hammer2,hammer3];
    data["screw"] = [screw1, screw2];
    data["screwdriver"] = [screwdriver1,screwdriver2,screwdriver3];
    data["apple"] = [apple1,apple2,apple3];
    data["banana"] = [banana1,banana2,banana3];
    data["ham"] = [ham1,ham2];
    data["cucumber"] = [cucumber1,cucumber2];
    data["sausage"] = [sausage1,sausage2,sausage3];
    data["cookie"] = [cookie1,cookie2,cookie3];
    data["turkey"] = [turkey1,turkey2];
    data["soda"] = [soda1,soda2,soda3];
    return data;
}

window.addEventListener('load', function(){
    database = createData();
    Metro = 700;
    FoodBasic = 1400;
    CanadaComputer = 750;
    Dollarama = 1000;
    GlobalPetFood = 3400;
    PetValu = 3000;
    Costco = 7400;
    CanadianTire = 2800;
    var item;
    var quantity;
    var list;
    var shop;
    var distance;
    var price;
    var shopList;
    var cloestShop;
    var cheapestShop;
    var totalPrice = 0;
    var totalDistance = 0;
    var click = document.getElementById("click");
    var recomInfo = document.getElementById("recomInfo");
    var recomShop = document.getElementById("recomShop");
    var op1Shop = document.getElementById("op1Shop");
    var op1Info = document.getElementById("op1Info");
    var op2Shop = document.getElementById("op2Shop");
    var op2Info = document.getElementById("op2Info");
    var alt1 = document.getElementById("recomalt");
    var alt2 = document.getElementById("op1alt");
    var alt3 = document.getElementById("op2alt");
    

    click.onclick = function(){
        shopList = [];
        cloestShop = [];
        cheapestShop = [];
        totalPrice = 0;
        totalDistance = 0;
        clPrice = 0;
        clDistance = 0;
        chPrice = 0;
        chDistance = 0;
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var maxClDistance = 10000;
            var maxChPrice = 10000;
            var chDi = 0;
            var clPri = 0;
            var maxdistance = 10000;
            var maxprice = 10000;
            var shopC;
            var shopB;
            var shopA;
            if (localStorage.getItem(localStorage.key(i)) == "b"){
                continue;
            }
            item = localStorage.key(i);
            quantity = localStorage.getItem(localStorage.key(i));
            item = item.toLowerCase();
            list = database[item];
            for (var j = 0; j < list.length; j++){
                shop = list[j][0];
                switch (shop){
                    case "Metro":
                        distance = Metro;
                        break;
                    case "FoodBasic":
                        distance = FoodBasic;
                        break;
                    case "Costco":
                        distance = Costco;
                        break;
                    case "CanadaComputer":
                        distance = CanadaComputer;
                        break;
                    case "Dollarama":
                        distance = Dollarama;
                        break;
                    case "CanadianTire":
                        distance = CanadianTire;
                        break;
                    case "PetValu":
                        distance = PetValu;
                        break;
                    case "GlobalPetFood":
                        distance = GlobalPetFood;
                        break;
                }
                price = list[j][1] * quantity;
                //Cheapest
                if (price < maxChPrice){
                    maxChPrice = price;
                    shopB = shop;
                    chDi = distance;
                }
                //Cloest
                if (distance < maxClDistance){
                    maxClDistance = distance;
                    shopA = shop;
                    clPri = price;
                }
                //recommend
                if (distance < maxdistance && price < maxprice){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }else if(distance < maxdistance + 200 && price < maxprice + 5){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }else if(price < maxprice + 10 && distance < maxdistance - 200){
                    maxdistance = distance;
                    maxprice = price;
                    shopC = shop;
                }
            }
            //cloest distance
            if (!cloestShop.includes(shopA)){
                cloestShop.push(shopA);
                clPrice += clPri;
                clDistance += maxClDistance;
            }else{
                clPrice += clPri;
            }
            //Cheapest
            if (!cheapestShop.includes(shopB)){
                cheapestShop.push(shopB);
                chPrice += maxChPrice;
                chDistance += chDi;
            }else{
                chPrice += maxChPrice;
            }
            //Recommend
            if (!shopList.includes(shopC)){
                shopList.push(shopC);
                totalPrice += maxprice;
                totalDistance += maxdistance;
            }else{
                totalPrice += maxprice;
            }
        }

        var op1;
        var op2;
        var shopName = "";
        var cloest = "";
        var cheapest = "";
        var recompara = "";
        var op1para = "";
        var op2para = "";
        for (var i = 0; i < shopList.length; i++){
            shopName += "&nbsp-&nbsp" + shopList[i];
            if (i == 2 && shopList.length > 3){
                shopName += "\n";
            }
            recompara = shopList.join();
        }
        for (var i = 0; i < cloestShop.length; i++){
            cloest += "&nbsp-&nbsp" + cloestShop[i];
            if (i == 2 && cloestShop.length > 3){
                cloest += "\n";
            }
            op1para = cloestShop.join();
        }
        for (var i = 0; i < cheapestShop.length; i++){
            cheapest += "&nbsp-&nbsp" + cheapestShop[i];
            if (i == 2 && cheapestShop.length > 3){
                cheapest += "\n";
            }
            op2para = cheapestShop.join();
        }
        recomShop.innerHTML = shopName;
        op1Shop.innerHTML = cloest;
        op2Shop.innerHTML = cheapest;
        document.getElementById("recommap").href='map.html?route='+ recompara;
        document.getElementById("op1map").href='map.html?route='+ op1para;
        document.getElementById("op2map").href='map.html?route='+ op2para;
        recomInfo.innerHTML = "Est.&nbsp$" + parseInt(totalPrice,10) + "&nbsp||&nbsp" + totalDistance +"m";
            op1Info.innerHTML = "Est.&nbsp$" + parseInt(clPrice,10) + "&nbsp||&nbsp" + clDistance +"m";
            op2Info.innerHTML = "Est.&nbsp$" + parseInt(chPrice,10) + "&nbsp||&nbsp" + chDistance +"m";
    }
    click.click();
    //localStorage.clear();
    
});




