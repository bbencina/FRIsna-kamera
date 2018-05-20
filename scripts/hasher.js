String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function changePage(){
  window.location.href = "main.html";
}

checkHash = function() {
  var key = document.getElementById("passwd").value;
  //var hash = "bormasina".hashCode();
  var hash = 451434530;
  var keyHash = key.toString().hashCode();
  if (hash === keyHash) {
    console.log("success");
    changePage();
  } else {

  }
}
