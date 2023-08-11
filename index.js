const mainContainer = document.querySelector(".main-square")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.querySelector(".submit")
const ratings = document.querySelectorAll(".circle")
const actualRating = document.getElementById("rating")

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.textContent = rating.textContent
  })
})

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
})

