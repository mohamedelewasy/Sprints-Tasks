import { userContext } from "../../auth/userContext";
const userIcon = document.querySelector(".user-icon") as HTMLElement;
const userNestedList = document.querySelector(
  ".nested-user-list"
) as HTMLElement;

userIcon.addEventListener("click", () => {
  userNestedList.classList.toggle("d-none");
  if (userContext.isLoggedIn())
    userNestedList.innerHTML = `<a href="#">already logged in</a>`;
  else
    userNestedList.innerHTML = `<a href="/signin.html">signin</a><br /><a href="/signup.html">signup</a>`;
});
