

// window.logout = function logout(){
//     alert("log out now")

// }

// window.showAuthModal = function showAuthModal(){


// }

// window.showSingUpModel = function showSingUpModel(){
//   const div = document.createElement("div");
//   div.id = "main-div";

//   const form = document.createElement("form");

//   const formTitle = document.createElement("h1");
//   formTitle.textContent = "singup menu";

//   const userName = createInputElement("name", "text", "name");
//   const email = createInputElement("email", "email", "email");
//   const password = createInputElement("password", "password", "password");

//   const submitButton = document.createElement("input");
// //   submitButton.type = "submit";

//   form.append(
//     userName,
//     email,
//     password,
//     submitButton
//   );

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const singupValues = {};

//     formData.forEach((value, key) => {
//       singupValues[key] = value;
//     });
//     let dataInLocalStorage = localStorage.getItem("singupValues");
//     dataInLocalStorage = dataInLocalStorage? JSON.parse(dataInLocalStorage): [];
//     dataInLocalStorage.push(singupValues);
//     localStorage.setItem("singupValues", JSON.stringify(dataInLocalStorage));

//     form.reset();

//     const successMessage = document.createElement("div");
//     successMessage.textContent = "התחברת בהצלחה!";
//     successMessage.className = "success-message";
//     div.appendChild(successMessage);

//     // הסרה אחרי 3 שניות באנימציה
//     setTimeout(() => {
//       successMessage.classList.add("hide");
//       setTimeout(() => successMessage.remove(), 500);
//     }, 3000);
//   });
//   div.append(form);
//   root.append(div)

// };
