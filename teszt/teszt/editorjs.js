
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var js = first.textContent;
  iframe.src = "data:text/js;charset=utf-8," + encodeURI(js);
});


first.addEventListener('keyup',()=>{
  var js = first.textContent;
  iframe.src = "data:text/js;charset=utf-8," + encodeURI(js);
})

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
