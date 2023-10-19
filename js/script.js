let inputSearch = document.getElementById("search");
const submitFormSearch = (document.forms["form-search"].onsubmit = () => {
  let query = inputSearch.value;
  let goggleSearchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.open(goggleSearchUrl);
  //   window.open(goggleSearchUrl, "_self");
});

document.addEventListener("keydown", function (event) {
  inputSearch.focus();
});

// ####################################################################################################
function showData() {
  data = JSON.parse(localStorage.getItem("user"));
  document.getElementById(
    "folowers"
  ).textContent = `${data.followers} Followers`;
  document.getElementById(
    "folowing"
  ).textContent = `${data.following} Following`;
  document.getElementById(
    "repository"
  ).textContent = `${data.public_repos} Repository`;
}
showData();

let dataUser;
function getData() {
  const request = new Request("https://api.github.com/users/ariafatah0711", {
    method: "GET",
  });
  const response = fetch(request);
  return response.then((response) => response.json());
}

async function getDataAsync() {
  try {
    data = await getData();
    localStorage.setItem("user", JSON.stringify(data));
    return localStorage.getItem("user");
  } catch (e) {
    console.info(e);
    return localStorage.getItem("user");
  }
}

getDataAsync()
  .then((data) => {
    data = localStorage.getItem("user");
  })
  .catch(() => {
    data = localStorage.getItem("user");
  })
  .finally(() => {
    showData();
    console.log(data);
  });

// ####################################################################################################
