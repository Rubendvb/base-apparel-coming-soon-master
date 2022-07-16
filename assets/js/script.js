let infoInput = document.getElementById("info__input");
let btnEmail = document.getElementById("info__input-arrow");

function validaEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

btnEmail.addEventListener("click", () => {
  if (infoInput.value.length > 0) {
    if (validaEmail(infoInput.value)) {
      document.querySelector(".info__input-erro").style.display = "none";
      document.querySelector(".info__input-").style.display = "none";
    } else {
      document.querySelector(".info__input-erro").style.display = "block";
      document.querySelector(".info__input-span").style.display = "block";
    }
  }
});
