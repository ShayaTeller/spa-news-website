window.createForm = function createForm(root) {
  const mainDiv = document.createElement("div");
  const form = document.createElement("form");
  const h1 = document.createElement("h1");
  h1.textContent = "send hot news";
  const author = createInputElemnt("author", "text", "author");
  const title = createInputElemnt("title", "text", "title");
  const description = createInputElemnt("description", "text", "description");
  const content = createInputElemnt("content", "text", "content");
  const urlToImage = createInputElemnt("urlToImage", "img", "urlToImage");
  const submit = createInputElemnt("submit", "submit", "submit");
  form.append(
    h1,
    ...author,
    ...title,
    ...description,
    ...content,
    ...urlToImage,
    ...submit
  );

  mainDiv.style.marginRight = "300px";
  mainDiv.style.marginTop = "100px";



  
  mainDiv.append(form);
  return mainDiv;
  saveInLocalStorege();
};

window.createInputElemnt = function createInputElemnt(name, type, textContent) {
  const label = document.createElement("label");
  const input = document.createElement("input");

  input.id = name;
  input.name = name;
  input.type = type;

  label.htmlFor = name;
  label.textContent = textContent;
  return [label, input];
};

window.saveInLocalStorege = function saveInLocalStorege() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    localStorage.setItem("formData", JSON.stringify(data));
  });
}

//     "author": "אלי ברק",
//     "title": "סטארטאפ ישראלי גייס 50 מיליון דולר",
//     "urlToImage": "https://picsum.photos/id/1074/400/250",
//     "description": "חברת טכנולוגיה צעירה מתל אביב הצליחה לגייס סכום שיא בסבב B.",
//     "content": "חברת סטארטאפ ישראלית מתחום הבינה המלאכותית הודיעה על גיוס מרשים של 50 מיליון דולר בסבב השקעות שני. ההשקעה צפויה לשמש להרחבת הפעילות לשווקים בינלאומיים, גיוס מאות עובדים נוספים ופיתוח טכנולוגיות חדשות. החברה מתכננת לפתוח מרכזי פיתוח נוספים באירופה ובארה״ב, ולבסס את מעמדה כחברה מובילה בתחום. המשקיעים הביעו אמון רב בפוטנציאל החברה, וציינו את הצוות המנוסה ואת הפתרונות החדשניים שהיא מציעה. מדובר בעוד דוגמה בולטת ליכולת של חברות ישראליות להתחרות בהצלחה בזירה הגלובלית.",
//     "url": "https://example.com/news/startup"
//   }
