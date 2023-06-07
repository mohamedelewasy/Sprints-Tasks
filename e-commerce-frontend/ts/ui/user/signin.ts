import { fetchData } from "../../fetch";
import { env } from "../../environment/env";
import { endpoints } from "../../types/endpoints";
import { userContext } from "../../auth/userContext";

const signinBtn = document.querySelector(".signin-btn") as HTMLButtonElement;
const emailInput = document.querySelector(
  ".email-signin-input"
) as HTMLInputElement;
const passwordInput = document.querySelector(
  ".pwd-signin-input"
) as HTMLInputElement;

if (userContext.isLoggedIn()) {
  window.location.href = "/index.html";
}

signinBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const res = await fetchData<
      { email: string; password: string },
      { token: string }
    >({
      url: env.API + endpoints.loginUser.url,
      method: endpoints.loginUser.method,
      body: { email, password },
    });
    userContext.signin(res.token);
    window.location.href = "/index.html";
  } catch (error) {
    console.error(error.message);
  }
});
