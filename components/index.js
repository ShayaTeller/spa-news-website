const root = document.getElementById("root");
let currentUser = null;

links = ["home", "news", "addstory"];
let aEveteClick = "";

function jenrateNavBar(links) {
  const nav = document.createElement("nav");
  links.forEach((link) => {
    const a = document.createElement("a");
    a.addEventListener("click", (event) => {
      pagesload(event.target.textContent);
      // console.log(aEveteClick)
    });
    a.textContent = link;
    nav.append(a);
  });

  return nav;
}

function pagesload(aEveteClick = "news") {
  let page = "";
  root.innerHTML = "";
  root.append(jenrateNavBar(links));
  switch (aEveteClick) {
    case "home":
      page = homePage();
      root.append(page);
      break;
    case "news":
      page = newsPage();
      root.append(page);
      break;
    case "addstory":
      page = createNewsForm(root);
      root.append(page);
      updateDataFromLocalS();
      // dataUpdate();
      break;

    default:
      // page = homePage();
      root.append(homePage());
      break;
  }
}

root.append(jenrateNavBar(links));
pagesload(aEveteClick);
