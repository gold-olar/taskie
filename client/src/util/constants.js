export const queries = [
  "(min-width: 1024px)", // isDesktop
  "(min-width: 768px)", // isTab
  "(min-width: 310px)", // isMobile
];
export const queryValues = ["isDesktop", "isTab", "isMobile"];

export const AUTH_TYPES = {
  register: {
    title: "Get an account",
    buttonText: "Register",
  },
  login: {
    title: "Welcome back",
    buttonText: "Login",
  },
  "forgot-password": {
    title: "Recover your account",
    buttonText: "Send me a link",
  },
  "change-password": {
    title: "Set a new password",
    buttonText: "Reset",
  },
};

export const taskStats = ["Total Tasks", "Completed Tasks", "Pending Tasks"];

export const EDIT_PROFILE = "EDIT_PROFILE";
export const ADD_TASK = "ADD_TASK";
export const VIEW_TASK = "VIEW_TASK";
export const EDIT_TASK = "ADD_TASK";
export const ADD_COLECTION = "ADD_COLECTION";
