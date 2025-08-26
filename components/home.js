window.homePage = function homePage(root) {
  const div = document.createElement("div");
  div.id = "main-div";

  const h1 = document.createElement("h1");
  h1.textContent = "welcome to home page";
const h2 = document.createElement("h2")
h2.style.fontSize = "150px"
h2.textContent = " עבור נטפרי."
h2.style.marginLeft = "300px"
  // כפתור "אודות"
  const btn = document.createElement("button");
  btn.id = "aboutBtn";
  btn.textContent = "about";

  // קונטיינר ל-iframe (תחילה מוסתר)
  const aboutContainer = document.createElement("div");
  aboutContainer.id = "aboutContainer";
  aboutContainer.style.display = "none";
  aboutContainer.style.marginTop = "20px";

  // מאזין לחיצה – פותח/סוגר ויוצר IFRAME רק פעם אחת
  btn.addEventListener("click", () => {
    const isHidden = aboutContainer.style.display === "none";
    aboutContainer.style.display = isHidden ? "block" : "none";

    if (isHidden && !aboutContainer.querySelector("iframe")) {
      const iframe = document.createElement("iframe");
      // שים כאן את הדף שתרצה לפתוח:
      // לדוגמה README מעובד ל-HTML, עמוד about.html, או Google Form עם ?embedded=true
      iframe.src = "../readme.md";
      iframe.width = "100%";
      iframe.height = "600";
      iframe.style.border = "1px solid #ccc";
      iframe.style.borderRadius = "8px";
      iframe.loading = "lazy";
      aboutContainer.appendChild(iframe);
    }
  });

  // הרכבה
  div.append(h1, btn, aboutContainer,h2);
  return div;
};
