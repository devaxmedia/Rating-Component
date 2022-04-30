const btn = document.querySelector(".btn");
const ratingNumbers = document.querySelectorAll(".rate-number");
const ratingNumber = document.querySelector(".rating-numbers");
const rating = document.querySelector(".rating");
const thankYouCard = document.querySelector(".thank-you-card");
const container = document.querySelector(".container");
const errMsg = document.querySelector(".err-msg");

let rateChosen = 0;

ratingNumbers.forEach((ratingNumber) => {
  ratingNumber.addEventListener("click", (e) => {
    removeActive();

    ratingNumber.classList.add("active");

    rateChosen = e.target.textContent;
  });
});

btn.addEventListener("click", () => {
  if (rateChosen > 0) {
    rating.style.display = "none";

    hideRatingAndShowThankyou();
  }

  ratingNumber.insertAdjacentElement("beforebegin", generateErrorMsg("Please choose a rating number"));

  return;
});

function removeActive() {
  ratingNumbers.forEach((ratingNumber) => ratingNumber.classList.remove("active"));
}

function hideRatingAndShowThankyou() {
  container.innerHTML = `
    <div class="thank-you-card">
        <img src="./images/illustration-thank-you.svg" alt="" />
        <p class="selected-count">You selected ${rateChosen} out of 5</p>
        <h2>Thank you!</h2>
        <p class="thank-you-msg">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  `;
}
function generateErrorMsg(msg) {
  const err = document.createElement("p");
  err.textContent = msg;
  err.classList.add("err-msg");

  removeFromDom(err, 3000);

  return err;
}

function removeFromDom(el, time) {
  setTimeout(() => el.remove(), time);
}
