import { portfolioList } from "../data/data.js";

(function () {
  console.log(portfolioList);

  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  console.log("id: ", id);

  var pofolTitle = document.getElementById("pofolTitle");
  var pofolMainImg = document.getElementById("pofolMainImg");
  var pofolContent = document.getElementById("pofolContent");

  var pofolItem = portfolioList[id];
  console.log(pofolItem);

  var title = pofolItem["title"];
  var mainImg = pofolItem["mainImg"];
  var contentHtml = pofolItem["contentHtml"];

  pofolTitle.innerText = title;
  pofolMainImg.innerHTML = `<img src="${mainImg}"/>`;
  pofolContent.innerHTML = contentHtml;
})();
