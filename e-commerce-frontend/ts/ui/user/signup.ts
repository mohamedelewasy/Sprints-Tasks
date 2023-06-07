import { fetchData } from "../../fetch";
import { env } from "../../environment/env";
import { endpoints } from "../../types/endpoints";
import { userContext } from "../../auth/userContext";
import { registerReq, registerRes } from "../../types/api";

const signupBtn = document.querySelector(".signup-btn") as HTMLButtonElement;
const firstNameInput = document.querySelector(
  ".first-name-signup-input"
) as HTMLInputElement;
const lastNameInput = document.querySelector(
  ".last-name-signup-input"
) as HTMLInputElement;
const emailInput = document.querySelector(
  ".email-signup-input"
) as HTMLInputElement;
const passwordInput = document.querySelector(
  ".pwd-signup-input"
) as HTMLInputElement;

if (userContext.isLoggedIn()) {
  window.location.href = "/index.html";
}

signupBtn.addEventListener("click", async () => {
  const first_name = firstNameInput.value;
  const last_name = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const res = await fetchData<registerReq, registerRes>({
      url: env.API + endpoints.registerUser.url,
      method: endpoints.registerUser.method,
      body: { first_name, last_name, email, password },
    });
    userContext.signin(res.token);
    window.location.href = "/index.html";
  } catch (error) {
    console.error(error.message);
  }
});
