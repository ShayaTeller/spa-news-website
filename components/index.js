// "root" is the main connection betwen the js & html, the root is the big parent
// of all elemnts in any page.
const root = document.getElementById("root");

// this arrey declere the names of the <a> tags in the <nav> => navigation bar,
// we use this arrey in the jenrateNavBar(links)function.
links = ["home", "news", "addstory", "Contact us"];
// this vaireble takes the "click" event from any <a> tag in the <nav>,
// in order the value of "aEveteClick" is the "pagesload" function now what to run.
let aEveteClick = "";


// this fn() takes an array of strings and create for any elemnt in the arrey
// an navigation-bar whit a elemnts in them, exsampel: <nav><a>arrey[index]<a><nav>.
function jenrateNavBar(links) {
  const nav = document.createElement("nav");
  links.forEach((link) => {
    const a = document.createElement("a");
    a.addEventListener("click", (event) => {
      pagesload(event.target.textContent);
    });
    a.textContent = link;
    nav.append(a);
  });
  return nav;
}

// this function loads the corrent page , wite look of the "aEveteClick" vaireble,
// any click on the nav-bar start an event-listener that take the value that the client press them.
function pagesload(aEveteClick = "news") {
  let page = "";
  // this line: "root.innerHTML = ""; declere that the html will be clean in evry new load,
  // its solve the problem thet is load in the html a lut of elemnts and is going oto be bed.
  root.innerHTML = "";
  root.append(jenrateNavBar(links));
  switch (aEveteClick) {
    case "home":
      page = homePage(); //from "./home.js"
      root.append(page);
      break;
    case "news":
      page = newsPage(); //from "./newsPage.js"
      root.append(page);
      break;
    case "addstory":
      page = createNewsForm(root); // from "./addstory.js"
      root.append(page);
      updateDataFromLocalS(); // from "./dataupdate.js"
      // dataUpdate();
      break;
    case "Contact us":
      page = connecctToGoogleForms(); //from "./connecction.js"
      root.append(page);
      break;

    default:
      root.append(homePage());
      break;
  }
}

// in this 2 lins is starting the game:)
root.append(jenrateNavBar(links)); // this line initilized the navigation bar
pagesload(aEveteClick); // this line start the main loop that runs the pages
