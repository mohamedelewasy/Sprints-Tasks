import { fetchData } from "../../fetch";
import { env } from "../../environment/env";
import { endpoints } from "../../types/endpoints";
import { getCategoriesReq, getCategoriesRes, Icategory } from "../../types/api";

const handleDropDownList = (categories: Icategory[]) => {
  const categoryElement = document.querySelector(
    ".categories-drop-down-list"
  ) as HTMLDivElement;
  categoryElement.innerHTML = categories
    .map((cat) => `<a href="" class="nav-item nav-link">${cat.name}</a>`)
    .join("");
};

const handleCards = (categories: Icategory[]) => {
  const cardsContainer = document.querySelector(
    ".categories-cards"
  ) as HTMLDivElement;
  cardsContainer.innerHTML = categories
    .map(
      (cat) =>
        `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a class="text-decoration-none" href="">
            <div class="cat-item d-flex align-items-center mb-4">
              <div class="overflow-hidden" style="width: 100px; height: 100px">
                <img class="img-fluid" ${
                  cat.image ? `src="${cat.image.slice(6)}"` : ""
                } alt="" />
              </div>
              <div class="flex-fill pl-3">
                <h6>${cat.name}</h6>
                <small class="text-body">${cat.productCount} Products</small>
              </div>
            </div>
          </a>
        </div>`
    )
    .join("");
};

try {
  const res = await fetchData<getCategoriesReq, getCategoriesRes>({
    url: env.API + endpoints.getCategories.url,
    method: endpoints.getCategories.method,
    body: undefined,
  });
  const categories = res.data;
  handleDropDownList(categories);
  handleCards(categories);
} catch (error) {
  console.error(error.message);
}
