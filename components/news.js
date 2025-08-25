window.newsPage = function newsPage() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "welcome to news page";
  div.append(h1);
  div.id = "main-div";

  div.append(newsCard());

  return div;
};

window.newsCard = function newsCard() {
  const main = document.createElement("main");

  data.forEach((element) => {
    const article = document.createElement("article");
    const textdiv = document.createElement("div");
    textdiv.classList.add("content");
    const h1 = document.createElement("h1");
    const address = document.createElement("address");
    textdiv.append(h1, address);

    const img = document.createElement("img");

    address.textContent = element.author;
    h1.textContent = element.title;

    img.src = element.urlToImage;
    article.id = element.title;
    article.classList.add("newsCard");
    article.append(textdiv, img);
    article.addEventListener("click", (e) => {
      const title = e.currentTarget.querySelector("h1").textContent;
      console.log(title);
      articlePage(element, article);
      //articalPage(e.target.id)
    });
    main.append(article);
  });
  return main;
};

window.articlePage = function articlePage(element, article) {
  root.innerHTML = "";
  root.append(jenrateNavBar(links));
  const div = document.createElement("div");
  div.classList.add("artical-in-new-page");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h1.textContent = element.title;
  h2.textContent = element.description;
  p.textContent = element.content;
  img.src = element.urlToImage;

  div.append(h1, h2, p, img);
  root.append(div);
};
