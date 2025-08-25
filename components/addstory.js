window.createNewsForm = function createNewsForm(rootElement) {
  const div = document.createElement("div");
  div.id = "main-div";

  const form = document.createElement("form");

  const formTitle = document.createElement("h1");
  formTitle.textContent = "Send Hot News";

  const authorField = createInputElement("author", "text", "Author");
  const titleField = createInputElement("title", "text", "Title");
  const descriptionField = createInputElement(
    "description",
    "text",
    "Description"
  );
  const contentField = createInputElement("content", "text", "Content");
  const imageUpload = createInputElement("urlToImage", "text", "urlToImage");
  const submitButton = document.createElement("input");
  submitButton.type = "submit";

  form.append(
    formTitle,
    ...authorField,
    ...titleField,
    ...descriptionField,
    ...contentField,
    ...imageUpload,
    submitButton
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    let dataInLocalStorage = localStorage.getItem("formData");
    dataInLocalStorage = dataInLocalStorage
      ? JSON.parse(dataInLocalStorage)
      : [];
    dataInLocalStorage.push(formValues);
    localStorage.setItem("formData", JSON.stringify(dataInLocalStorage));

    form.reset();

    const successMessage = document.createElement("div");
    successMessage.textContent = "✅ ההודעה נשלחה בהצלחה!";
    successMessage.className = "success-message";
    div.appendChild(successMessage);

    // הסרה אחרי 3 שניות באנימציה
    setTimeout(() => {
      successMessage.classList.add("hide");
      setTimeout(() => successMessage.remove(), 500);
    }, 3000);
  });

  // formContainer.style.marginRight = "300px";
  // formContainer.style.marginTop = "100px";
  div.append(form);

  return div;
};

window.createInputElement = function createInputElement(
  name,
  type,
  textContent
) {
  const label = document.createElement("label");
  const input = document.createElement("input");

  input.id = name;
  input.name = name;
  input.type = type;

  label.htmlFor = name;
  label.textContent = textContent;
  return [label, input];
};
