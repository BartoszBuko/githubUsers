const userInput = document.querySelector("[data-user-input]");
const username = document.querySelector("[data-username]");
const profileLink = document.querySelector("[data-link]");
const createdAt = document.querySelector("[data-created-at]");
const bio = document.querySelector("[data-bio]");
const profileImage = document.querySelector("[data-img]");
let apiData;

const APILINK = "https://api.github.com/users/";

userInput.addEventListener("keydown", async (e) => {
  if (e.keyCode === 13) {
    let username = userInput.value.replace(/ /g, "");
    await getJson(username);
    updateUser();
  }
});

async function getJson(username) {
  return fetch(`${APILINK}${username}`)
    .then((res) => res.json())
    .then((data) => (apiData = data));
}

function updateUser() {
  if (apiData.message) {
    userInput.value = "user not found!";
    userInput.disabled = true;
    setTimeout(() => {
      userInput.value = "";
      userInput.disabled = false;
    }, 1000);
  } else {
    console.log(apiData);
    profileLink.textContent = apiData.html_url.slice(8);
    profileLink.href = apiData.html_url;
    username.textContent = apiData.login;
    createdAt.textContent = apiData.created_at.slice(0, 10);
    profileImage.src = apiData.avatar_url;
    bio.textContent = apiData.bio;
  }
}
