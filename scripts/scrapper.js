function pageTextGet(url)
{
  document.write("smo v pageTextGet!");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, true ); // synchronous request
    xmlHttp.send( null );
    xmlHttp.onreadystatechange=function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        var type = request.getResponseHeader("Access-Control-Allow-Origin");
        if (type.indexOf("text") !== 1){
          return xmlHttp.responseText;
        }
      }
    }
}

function makeUrl()
{
  var d = new Date();
  var year = d.getFullYear().toString();
  var month = d.getMonth().toString();
  var day = d.getDay().toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  return ("http://www.restavracija123.si/api/getDailyMenu/3798/" + year + "-" + month + "-" + day + "/");
}

function matchFood()
{
  //var urlToday = makeUrl();
  //test case:
  var urlToday = "http://www.restavracija123.si/api/getDailyMenu/3798/2018-05-14/";
  var parseText = pageTextGet(urlToday);
  var reg = /"foodId":"(.+?)","title":"(.+?)"/;
  var matches = [];
  var match;
  while (match = reg.exec(parseText)) {
    matches.push(match[1]);
  }
  return matches;
}

var ulist = document.getElementById("ulist_food");
var food_list = matchFood();

for (var i = 0; i < food_list.length; i++) {
  var food_item = document.createTextNode(food_list[i]);
  var item_holder = document.createElement("li");
  item_holder.appendChild(food_item);
  ulist.appendChild(item_holder);
}
