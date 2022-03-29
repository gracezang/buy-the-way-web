function clearCart(){
    if (confirm("You Sure You Want To Clear the Cart?")){
        localStorage.clear();
        localStorage.setItem("Deleting","reload");
        location.reload();
    }
}

function showList(showCheckList,checkList){
    if (showCheckList){
         checkList.style.display = "block";
         checkList.style.pointerEvents = "auto";
    }
    return !showCheckList;
}

function enterOption(){
    if (localStorage.length == 0){
        alert("Please Add Something to Your Cart!")
    }else{
        window.location = "route.html";
    }
}

function emptyList(){
    localStorage.clear();
    window.location = "index.html";
}

function toSubmit(){
    var x = document.getElementById("SearchBox").value;
    if (x.length == 0){
        alert("Please Input the Search Box")
    }else{
        var term;
        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.getItem(localStorage.key(i)) == "b"){
                term = localStorage.key(i);
                break;
            }
        }
        localStorage.removeItem(term);
        x = x.toLowerCase();
        let search = x.concat("!");
        localStorage.setItem(search,"b");
        document.newForm.action = "search.html";
    }
}

function closeList(showCheckList,checkList){
    if(!showCheckList){
        //localStorage.clear();
        checkList.style.display = "none";
        checkList.style.pointerEvents = "none";
    }
    return !showCheckList;
}


function createContentList(){
    var OneContent = document.getElementById("1");
    var TwoContent = document.getElementById("2");
    var ThreeContent = document.getElementById("3");
    var FourContent = document.getElementById("4");
    var FiveContent = document.getElementById("5");
    var SixContent = document.getElementById("6");
    var SevenContent = document.getElementById("7");
    var EightContent = document.getElementById("8");
    var NineContent = document.getElementById("9");
    var Tenontent = document.getElementById("10");
    var contentList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
    return contentList;
}

function createIdList(){
    var OneContent = document.getElementById("Od");
    var TwoContent = document.getElementById("Td");
    var ThreeContent = document.getElementById("THd");
    var FourContent = document.getElementById("Fd");
    var FiveContent = document.getElementById("FId");
    var SixContent = document.getElementById("Sd");
    var SevenContent = document.getElementById("SEd");
    var EightContent = document.getElementById("Ed");
    var NineContent = document.getElementById("Nd");
    var Tenontent = document.getElementById("TEd");
    var idList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
    return idList;
}

// function createQuanlityList(){
//     var OneContent = document.getElementById("Q1");
//     var TwoContent = document.getElementById("Q2");
//     var ThreeContent = document.getElementById("Q3");
//     var FourContent = document.getElementById("Q4");
//     var FiveContent = document.getElementById("Q5");
//     var SixContent = document.getElementById("Q6");
//     var SevenContent = document.getElementById("Q7");
//     var EightContent = document.getElementById("Q8");
//     var NineContent = document.getElementById("Q9");
//     var Tenontent = document.getElementById("Q10");
//     var quanlityList = [OneContent,TwoContent,ThreeContent,FourContent,FiveContent,SixContent,SevenContent,EightContent,NineContent,Tenontent];
//     return quanlityList;
// }

function increase(index,contentList,getListId){
    let key = localStorage.key(index);
    let data = localStorage.getItem(key);
    data++;
    localStorage.removeItem(key);
    localStorage.setItem(key,data.toString());
    display(localStorage,contentList,getListId);
}

function decrease(index,contentList,getListId){
    let key = localStorage.key(index);
    let data = localStorage.getItem(key);
    data--;
    localStorage.removeItem(key);
    localStorage.setItem(key,data.toString());
    display(localStorage,contentList,getListId);
}


function display(localStorage,contentList,getListId){
    var data;
    var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
   // let a = 0;
   if (localStorage.length != 0){
    for (var i = localStorage.length - 1; i >= 0; i--) {
        if (localStorage.getItem(localStorage.key(i)) == "b"){
            continue;
        }
        if (localStorage.key(i) == "Turkey"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Chip"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }if (localStorage.key(i) == "Cookie"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Milk"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }if (localStorage.key(i) == "Screwdriver"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Cattree"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Dogfood"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Catfood"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Screw"){
             space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Hammer"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Soda"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Juice"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Salami"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Ham"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Sausage"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Cheese"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Broccoli"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Cucumber"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Apple"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Banana"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Grape"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        if (localStorage.key(i) == "Cracker"){
            space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
        data = localStorage.getItem(localStorage.key(i));
        contentList[i].innerHTML = localStorage.key(i) + space + data;
        //quanList[i].innerHTML = localStorage.key(i);
        getListId[i].style.display = "block";
        //a++;
    }
}
//    while (a < 11){
//        if (getListId[a] != null){
//            getListId[a].style.display = "none";
//        }
//        a++;
//   }
}

function remove(index,contentList,getListId){
    let deleted = localStorage.length - 1;
    //IDK how i wrote it but its working
    deleted = deleted = index;
    localStorage.removeItem(localStorage.key(deleted));
    localStorage.setItem("Deleting","reload");
    location.reload();
    //display(localStorage,contentList,getListId);
}


window.addEventListener('load', function(){

    var showCheckList = true;
    var myclick = document.getElementById("click");
    var checkList = document.getElementById('checkList');
    var close = document.getElementById("close");
    var contentList = createContentList();
    var getListId = createIdList();
    if (localStorage.getItem("Deleting") != null) {
        localStorage.removeItem("Deleting");
        display(localStorage,contentList,getListId);
        showCheckList = showList(showCheckList,checkList);
      }
     var de1 = document.getElementById("delete1");
     var de2 = document.getElementById("delete2");   
     var de3 = document.getElementById("delete3");
     var de4 = document.getElementById("delete4");
     var de5 = document.getElementById("delete5");
     var de6 = document.getElementById("delete6");
     var de7 = document.getElementById("delete7");
     var de8 = document.getElementById("delete8");
     var de9 = document.getElementById("delete9");
     var de10 = document.getElementById("delete10");
     de1.onclick = function(contentList,getListId){
        remove(0,contentList,getListId);
     }
     de2.onclick = function(contentList,getListId){
        remove(1,contentList,getListId);
     }
     de3.onclick = function(contentList,getListId){
        remove(2,contentList,getListId);
     }
     de4.onclick = function(contentList,getListId){
        remove(3,contentList,getListId);
     }
     de5.onclick = function(contentList,getListId){
        remove(4,contentList,getListId);
     }
     de6.onclick = function(contentList,getListId){
        remove(5,contentList,getListId);
     }
     de7.onclick = function(contentList,getListId){
        remove(6,contentList,getListId);
     }
     de8.onclick = function(contentList,getListId){
        remove(7,contentList,getListId);
     }
     de9.onclick = function(contentList,getListId){
        remove(8,contentList,getListId);
     }
     de10.onclick = function(contentList,getListId){
        remove(9,contentList,getListId);
     }

     var plus1 = document.getElementById("plus1");
     var plus2 = document.getElementById("plus2");   
     var plus3 = document.getElementById("plus3");
     var plus4 = document.getElementById("plus4");
     var plus5 = document.getElementById("plus5");
     var plus6 = document.getElementById("plus6");
     var plus7 = document.getElementById("plus7");
     var plus8 = document.getElementById("plus8");
     var plus9 = document.getElementById("plus9");
     var plus10 = document.getElementById("plus10");
     plus1.onclick = function(contentList,getListId,){
        increase(0,contentList,getListId);
     }
     plus2.onclick = function(contentList,getListId){
        increase(1,contentList,getListId);
     }
     plus3.onclick = function(contentList,getListId){
        increase(2,contentList,getListId);
     }
     plus4.onclick = function(contentList,getListId){
        increase(3,contentList,getListId);
     }
     plus5.onclick = function(contentList,getListId){
        increase(4,contentList,getListId);
     }
     plus6.onclick = function(contentList,getListId){
        increase(5,contentList,getListId);
     }
     plus7.onclick = function(contentList,getListId){
        increase(6,contentList,getListId);
     }
     plus8.onclick = function(contentList,getListId){
        increase(7,contentList,getListId);
     }
     plus9.onclick = function(contentList,getListId){
        increase(8,contentList,getListId);
     }
     plus10.onclick = function(contentList,getListId){
        increase(9,contentList,getListId);
     }

     var minus1 = document.getElementById("minus1");
     var minus2 = document.getElementById("minus2");   
     var minus3 = document.getElementById("minus3");
     var minus4 = document.getElementById("minus4");
     var minus5 = document.getElementById("minus5");
     var minus6 = document.getElementById("minus6");
     var minus7 = document.getElementById("minus7");
     var minus8 = document.getElementById("minus8");
     var minus9 = document.getElementById("minus9");
     var minus10 = document.getElementById("minus10");
     minus1.onclick = function(contentList,getListId,){
        decrease(0,contentList,getListId);
     }
     minus2.onclick = function(contentList,getListId){
        decrease(1,contentList,getListId);
     }
     minus3.onclick = function(contentList,getListId){
        decrease(2,contentList,getListId);
     }
     minus4.onclick = function(contentList,getListId){
        decrease(3,contentList,getListId);
     }
     minus5.onclick = function(contentList,getListId){
        decrease(4,contentList,getListId);
     }
     minus6.onclick = function(contentList,getListId){
        decrease(5,contentList,getListId);
     }
     minus7.onclick = function(contentList,getListId){
        decrease(6,contentList,getListId);
     }
     minus8.onclick = function(contentList,getListId){
        decrease(7,contentList,getListId);
     }
     minus9.onclick = function(contentList,getListId){
        decrease(8,contentList,getListId);
     }
     minus10.onclick = function(contentList,getListId){
        decrease(9,contentList,getListId);
     }



    this.window.onclick = function(){
        display(localStorage,contentList,getListId);
    };
    
    myclick.onclick = function(){
        showCheckList = showList(showCheckList,checkList);
   };





    close.onclick = function(){
        showCheckList = closeList(showCheckList,checkList);
    };

    //myList.addEventListener('click',showList(showCheckList));
    
  });
