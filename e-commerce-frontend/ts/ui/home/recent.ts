import { fetchData } from "../../fetch";
import { env } from "../../environment/env";
import { endpoints } from "../../types/endpoints";
import { Iproduct, getRecentReq, getRecentRes } from "../../types/api";

const handleRecentProducts = (products: [Iproduct]) => {
  const featuredContainer = document.querySelector(
    ".recent-products"
  ) as HTMLDivElement;
  featuredContainer.innerHTML = products
    .map(
      (prod) => `
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div class="product-item bg-light mb-4">
            <div class="product-img position-relative overflow-hidden">
              <img class="img-fluid w-100" ${
                prod.image ? `src="${prod.image.slice(6)}"` : ""
              } alt="" />
              <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div class="text-center py-4">
              <a class="h6 text-decoration-none text-truncate" href="">${
                prod.name
              }</a>
              <div class="d-flex align-items-center justify-content-center mt-2">
                <h5>$${(prod.price - prod.price * prod.discount).toFixed(
                  2
                )}</h5>
                <h6 class="text-muted ml-2"><del>${prod.price}</del></h6>
              </div>
              <div class="d-flex align-items-center justify-content-center mb-1">
              ${`<small class="fa fa-star text-primary mr-1"></small>`.repeat(
                Math.floor(prod.rating)
              )}
              ${
                prod.rating % 1 != 0
                  ? `<small class="fa fa-star-half-alt text-primary mr-1"></small>`
                  : ""
              }
              ${`<small class="far fa-star text-primary mr-1"></small>`.repeat(
                5 - Math.ceil(prod.rating)
              )}
              <small>(${prod.rating_count})</small>
              </div>
            </div>
          </div>
        </div>
  `
    )
    .join("");
};

try {
  const res = await fetchData<getRecentReq, getRecentRes>({
    url: env.API + endpoints.getRecentProducts.url,
    method: endpoints.getRecentProducts.method,
    body: undefined,
  });
  handleRecentProducts(res.data);
} catch (error) {
  console.error(error.message);
}
