const themeBtn = document.querySelector(".theme-btn")
const themeSwitch = document.querySelector(".status-indicator")
const cal = document.querySelector(".calculator")

const numberBtns = document.querySelectorAll('[data-number]')
const operatorBtns = document.querySelectorAll('[data-operator]')
const deleteBtn = document.querySelector('.del')
const allClearBtn = document.querySelector('[data-allclear]')
const equalsBtn = document.querySelector('[data-equals]')
const currentOperation = document.querySelector('.result-text')

function handler(event) {
  const deleteBtn = document.querySelector('.del')
  const value = event.target.innerText
  const currentOperation = document.querySelector('.result-text')
  
  switch(value) {
    case "AC":
      currentOperation.innerText = ""
      break

    case '<':
      currentOperation.innerText = currentOperation.innerText.slice(0, -1)
      break
      
    case "=":
      currentOperation.innerText = eval(currentOperation.innerText)
      break
    
    default:
      currentOperation.innerText += value
  }
}

Array
  .from(
    document.getElementsByTagName("button")
  )
  .forEach(
    (button) => {
      button.addEventListener("click", handler)
    }
  )




themeSwitch.addEventListener("click", function() {

  
    if(cal.classList.contains("dark-theme")) {
      cal.classList.add("light-theme")
      cal.classList.remove("dark-theme")
      themeSwitch.classList.add("day")
      themeSwitch.classList.remove("night")
      localStorage.setItem("theme", "light-mode");
    } else {
      cal.classList.add("dark-theme")
      cal.classList.remove("light-theme")
      themeSwitch.classList.add("night")
      themeSwitch.classList.remove("day")
      localStorage.setItem("theme", "dark-mode");
    }
})


if (localStorage.getItem("theme") === "light-mode") {
  themeSwitch.classList.add("day")
  themeSwitch.classList.remove("night")
  cal.classList.add("light-theme")
  cal.classList.remove("dark-theme")
} else {
  themeSwitch.classList.add("night")
  themeSwitch.classList.remove("day")
  cal.classList.add("dark-theme")
  cal.classList.remove("light-theme")
}

