function myfunc(id){
  //alert(id.innerHTML);
  if (id.innerHTML == "Fuck it !"){
    id.innerHTML = "Changed";
    id.style.color = 'red';
  }
  else if (id.innerHTML == "Changed"){
    id.innerHTML = "Fuck it !";
    id.style.color = "";
  }
}

function about_us_function(){
  text_node = document.createElement("p");
  text_node.innerHTML = "some text";
  document.getElementById("after_body").appendChild(text_node);
}
