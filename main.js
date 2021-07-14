var table = document.getElementById("proyecto");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function () {
    if (this.hasAttribute("data-clicked")) {
      return;
    }
    this.setAttribute("data-clicked", "yes");
    this.setAttribute("data-text", this.innerHTML);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = this.innerHTML;
   // input.style.width = this.offsetWindth - this.clientLeft * 2 + "px";
  //  input.style.height = this.offsetHeight - this.clientTop * 2 + "px";
    input.style.border = "0px";
    input.style.fontFamily = "inherit";
    input.style.fontSize = "inherit";
    input.style.textAlign = "center";
    input.style.background = "grey";

    input.onblur = function () {
      var td = input.parentElement;
      var orig_text = input.parentElement.getAttribute("data-text");
      var current_text = this.value;
      if (orig_text != current_text) {
        td.removeAttribute("data-clicked");
        td.removeAttribute("data-text");
        td.innerHTML = current_text;
        td.style.cssText = "padding: 5px";
        console.log(orig_text + "fue cambiada por " + current_text);
      } else {
        td.removeAttribute("data-clicked");
        td.removeAttribute("data-text");
        td.innerHTML = current_text;
        td.style.cssText = "padding: 5px";
        console.log("no hubo cambios");
      }
    }
    input.onkeypress = function () {
      if (event.keyCode==13) {
          this.blur();
      }
    };
    this.innerHTML = "";
    this.style.cssText = "padding: 0px ";
    this.append(input);
    this.firstElementChild.select();
  };
}
console.log(cells);


//codigo de view seccion 