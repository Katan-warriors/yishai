const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-field");
const appsContainer = document.querySelector(".apps-container");
const noResultsFoundMsg = document.querySelector(".no-results-msg");

const backgroundColorOptions = document.getElementById("color-options")

backgroundColorOptions.addEventListener("change", () => {
  const selectedColor = backgroundColorOptions.value;
  document.body.style.backgroundColor = selectedColor;
})

searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchButton.addEventListener("click", () => {
  performSearch();
});

function performSearch() {
  const searchTerm = searchBar.value.toLowerCase();
  const selectedField = searchField.value;

  let isResultFound = false;

  for (const appElement of appsContainer.children) {
    if (appElement.classList.contains("app")) {
      let isMatch = false;

      switch (selectedField) {
        case "name":
          isMatch = appElement
            .querySelector(".app-name")
            .textContent.toLowerCase()
            .includes(searchTerm);
          break;
        case "description":
          isMatch = appElement
            .querySelector(".app-description")
            .textContent.toLowerCase()
            .includes(searchTerm);
          break;
        case "url":
          isMatch = appElement
            .querySelector("a")
            .href.toLowerCase()
            .includes(searchTerm);
          break;
      }

      if (isMatch) {
        isResultFound = true;
        appElement.style.display = "block";
      } else {
        appElement.style.display = "none";
      }
    }
  }
  noResultsFoundMsg.style.display = isResultFound ? "none" : "block";
}

function updateDateTime() {
  const now = new Date();
  const dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDateTime = now.toLocaleDateString('en-US', dateFormat);
  document.querySelector(".current-date").textContent = formattedDateTime;
}
updateDateTime()
setInterval(updateDateTime, 1000);
