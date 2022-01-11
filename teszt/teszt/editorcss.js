
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var css = first.textContent;
  iframe.src = "data:text/css;charset=utf-8," + encodeURI(css);
});


first.addEventListener('keyup',()=>{
  var css = first.textContent;
  iframe.src = "data:text/css;charset=utf-8," + encodeURI(css);
})

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
