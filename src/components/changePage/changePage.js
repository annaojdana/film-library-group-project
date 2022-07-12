import popularMovies from "../popularMovies/popularMovies";

const element = document.querySelector(".pagination ul");
element.addEventListener('click', supportForChangePage);

function supportForChangePage(evt) {
  const pageBtn = evt.target;
  pageNum = pageBtn.id.split("_").slice(1);

  popularMovies(pageNum);
}