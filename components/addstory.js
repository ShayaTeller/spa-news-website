window.createNewsForm = function createNewsForm(rootElement) {
  const formContainer = document.createElement("div");
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
  const imageUpload = createInputElement("urlImg","text","img url")
  const submitButton = document.createElement("input")
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
    formContainer.appendChild(successMessage);

    // הסרה אחרי 3 שניות באנימציה
    setTimeout(() => {
      successMessage.classList.add("hide");
      setTimeout(() => successMessage.remove(), 500);
    }, 3000);
  });


  formContainer.style.marginRight = "300px";
  formContainer.style.marginTop = "100px";
  formContainer.append(form);

  return formContainer;
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




// window.saveInLocalStorege = function saveInLocalStorege() {
//   const form = document.getElementById("form");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     localStorage.setItem("formData", JSON.stringify(data));
//   });
// };

//     "author": "אלי ברק",
//     "title": "סטארטאפ ישראלי גייס 50 מיליון דולר",
//     "urlToImage": "https://picsum.photos/id/1074/400/250",
//     "description": "חברת טכנולוגיה צעירה מתל אביב הצליחה לגייס סכום שיא בסבב B.",
//     "content": "חברת סטארטאפ ישראלית מתחום הבינה המלאכותית הודיעה על גיוס מרשים של 50 מיליון דולר בסבב השקעות שני. ההשקעה צפויה לשמש להרחבת הפעילות לשווקים בינלאומיים, גיוס מאות עובדים נוספים ופיתוח טכנולוגיות חדשות. החברה מתכננת לפתוח מרכזי פיתוח נוספים באירופה ובארה״ב, ולבסס את מעמדה כחברה מובילה בתחום. המשקיעים הביעו אמון רב בפוטנציאל החברה, וציינו את הצוות המנוסה ואת הפתרונות החדשניים שהיא מציעה. מדובר בעוד דוגמה בולטת ליכולת של חברות ישראליות להתחרות בהצלחה בזירה הגלובלית.",
//     "url": "https://example.com/news/startup"
//   }
