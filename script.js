function about_function(){
  text_node = document.createElement("p");
  text_node.innerHTML = "I Love zwazoyati Habibati";
  document.getElementById("after_body").appendChild(text_node);
}

function fuck_it_function(id){
  //alert(id.innerHTML);
  if (id.innerHTML == "Fuuu"){
    id.innerHTML = "I Love You";
    id.style.color = 'red';
  }
  else if (id.innerHTML == "I Love You"){
    id.innerHTML = "Fuuu";
    id.style.color = "";
  }
}

var new_window_count = 0;
function comprar_function(){
  var new_window = window.open("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bear-with-a-bird-on-his-head-pencil-lenaer.jpg", "", "width=400,height=240,resizable=no");
  new_window_count += 1;
  new_window.focus();
  }

//window.onunload = alert("bslama!");
