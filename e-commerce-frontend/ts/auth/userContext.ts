export const userContext: {
  token?: string;
  isLoggedIn(): boolean;
  signin(token: string): void;
  signout(): void;
} = {
  isLoggedIn: () => {
    if (userContext.token != undefined) return true;
    const token = localStorage.getItem("token");
    if (token) {
      userContext.token = token;
      return true;
    }
    return false;
  },
  signin: (token: string) => {
    userContext.token = token;
    localStorage.setItem("token", token);
  },
  signout: () => {
    localStorage.removeItem("token");
    userContext.token = undefined;
  },
};
