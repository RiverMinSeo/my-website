import { portfolioList } from "../data/data.js";

(function () {
  console.log(portfolioList);
  renderList(Object.values(portfolioList));
})();

function renderList(listData) {
  var pofolList = document.getElementById("pofolList");

  var htmls = listData.map((item) => {
    var id = item["id"];
    var title = item["title"];
    var subTitle = item["subTitle"];
    var mainImg = item["mainImg"];
    var mainStyle = item["mainStyle"];
    return `
      <article class="${mainStyle}">
        <span class="image">
          <img src="${mainImg}" alt="" />
        </span>
        <a href="generic.html?id=${id}">
          <h2>${title}</h2>
          <div class="content">
            <p>${subTitle}</p>
          </div>
        </a>
      </article>
    `;
  });

  pofolList.innerHTML = htmls.join("");
}
