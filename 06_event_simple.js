var clickHandler = function(evt){
  console.log("clicked");
  console.log(evt);
  var src = evt.srcElement || evt.target;
  console.log("src === target");
  console.log(src === this);
  console.log(this); //ce this représente le btn clické
  console.log(src); // src aussi
};

var applyCSS = function(evt){
  var cible = document.getElementById("cible");
  cible.classList.toggle("rounded");
  console.log(cible);
  console.log("this ->");
  console.log(this);

};

/*
var suiteCSS = function(){
  var suite = document.getElementById("suite");
  suite.addEventListener("mouseover", function(){
  this.classList.toggle("isactive");
  //event.target.style.backgroundColor = "red";
  //console.log(suite);
  //console.log(this);

});
  suite.addEventListener("mouseleave", function(){
    this.classList.toggle("suite");
  });
  suite.onmouseenter = suiteCSS;
  suite.onmouseleave = suiteCSS;
};
*/

var setActiveOnHover = function(){
  var cibleHover = document.getElementById("suite");

  var setHoverStyle = function(evt) {
    if(evt.type === "mouseenter") cibleHover.classList.add("isactive");
    else cibleHover.classList.remove("isactive");
  };

  cibleHover.onmouseenter = setHoverStyle;
  cibleHover.onmouseleave = setHoverStyle;
}

var start = function(){
  console.log("dom ready");
  var domElement = document.getElementById('mon_btn');
  console.log(domElement);
  //suiteCSS();
  setActiveOnHover();
  //domElement.addEventListener("click", clickHandler);
  mon_btn.addEventListener("click", function(e){
    console.log("this ->");
    console.log(this);
    clickHandler(e);
    applyCSS(e);
  //domElement.onclick = clickHandler; //syntaxe alternative
  //clickHandler(e, "choubidou");
});
};

window.addEventListener("DOMContentLoaded", start); //start est le addEventListener de DOMContentLoaded
