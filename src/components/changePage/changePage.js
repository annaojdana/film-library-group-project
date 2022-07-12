import popularMovies from "../popularMovies/popularMovies";

const element = document.querySelector(".pagination ul");
element.addEventListener('click', supportForChangePage);

const header = document.querySelector("header");

function supportForChangePage(evt) {
  const pageBtn = evt.target;
  pageNum = pageBtn.id.split("_").slice(1);

  popularMovies(pageNum);
  header.scrollIntoView({behavior: 'smooth'});
}