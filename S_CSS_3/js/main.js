// handle sub lists in the first nav
// last ul
const firstNavList =
  document.querySelector(".first-nav").firstElementChild.lastElementChild;

const list = [].slice.call(firstNavList.children);
list.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.firstElementChild.classList.contains("d-none")) {
      list.forEach((sub) => sub.firstElementChild.classList.add("d-none"));
      e.target.firstElementChild.classList.remove("d-none");
    }else{
      e.target.firstElementChild.classList.add("d-none")
    }
  });
});
