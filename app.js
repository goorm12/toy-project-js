import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";
import getElement from "./utils/getElement.js";

const btn = getElement(".btn");

const showUser = async () => {
  const person = await getUser();

  displayUser(person);
};

window.document.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
