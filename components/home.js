function homePage(root) {
    
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "welcome to home page";
  div.append(h1);
  div.id = "main-div";
  return div;
}


