//Author Zilong Zhang
//Still in development
function getKeyValue(){
    var list = {}
    for (var i = localStorage.length - 1; i >= 0; i--) {
        data = localStorage.getItem(localStorage.key(i));
        list[localStorage.key(i)] = parseFlot(data);
    }
    return list;
}

function totalCost(
)