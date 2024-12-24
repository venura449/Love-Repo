const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const text = document.querySelector(".text-2");
const text1 = document.querySelector(".text-3");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  text.classList.remove("hide");
  text1.classList.remove("hide");
  setTimeout(()=>{
    window.location.href = "mailto:Vidaththeekshana@gmail.com?subject=%F0%9F%92%8C%20You%E2%80%99ve%20Made%20My%20Day!%20%F0%9F%92%95&body=Hi%20%2C%0A%0AWow%2C%20I%20can%E2%80%99t%20stop%20smiling%20right%20now!%20%F0%9F%98%84%20Hearing%20you%20say%20yes%20just%20made%20my%20day%2C%20my%20week%2C%20my%20everything!%20%F0%9F%8C%9F%0A%0AI%E2%80%99m%20super%20excited%20for%20us%20to%20spend%20time%20together%2C%20and%20I%20can%E2%80%99t%20wait%20to%20make%20it%20special.%20%F0%9F%8E%89%E2%9C%A8%20Let%E2%80%99s%20plan%20something%20amazing%E2%80%94you%20deserve%20it!%20%F0%9F%A5%B0%0A%0ALet%20me%20know%20what%20works%20for%20you%2C%20and%20I%E2%80%99ll%20make%20sure%20it%E2%80%99s%20perfect.%20%F0%9F%97%93%EF%B8%8F%F0%9F%92%AB%0A%0AThanks%20for%20making%20me%20the%20happiest%20person%20today!%20%F0%9F%A5%B3%F0%9F%92%96%0A%0AWarmly%2C%0AMal%20Kumari%20%F0%9F%98%8A%F0%9F%92%8C";
  },10000)
});
