const refs = {
  input: document.querySelector('[name="website"]'),
  makeScreenshotBtn: document.querySelector('[name="make-screenshot"]'),
  saveScreenshotBtn: document.querySelector('[name="save-screenshot"]'),
  libraryScreenshotsBtn: document.querySelector('[name="library-screenshots"]'),
  libraryList: document.querySelector(".screenshots-list"),
};

const BASE_URL_SCREENSHOT_API =
  "https://website-screenshot6.p.rapidapi.com/screenshot/";
const KEY_API_SCREENSHOT = "default-application_7160449";

const BASE_URL_CRUD_CRUD = " https://crudcrud.com/api";
const KEY_API_CRUD_CRUD = "5b127da1ec9b44eab72f4d5992846501";

let screenshotUrl = "";

refs.makeScreenshotBtn.addEventListener("click", onMakeScreenshotBtnClick);
refs.saveScreenshotBtn.addEventListener("click", onSaveScreenshotBtnClick);
refs.libraryScreenshotsBtn.addEventListener(
  "click",
  onLibraryScreenshotsBtnClick
);
refs.libraryList.addEventListener("click", onDeleteBtnClick);

function onMakeScreenshotBtnClick() {
  refs.libraryList.innerHTML = "Wait, it's might take some time";

  fetchScreenshotApi(refs.input.value)
    .then((data) => {
      createOneScreenshotMarkup(data.screenshotUrl);
      screenshotUrl = data.screenshotUrl;
      console.log(screenshotUrl);
      if (!screenshotUrl) {
        refs.libraryList.innerHTML = `Vi did not find any matches`;
      }
    })
    .catch((error) => console.log(error));
}

function onSaveScreenshotBtnClick() {
  refs.libraryList.innerHTML = "Screenshot saved in library";
  console.log(screenshotUrl);
  fetchSavingScreenshot(screenshotUrl)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function onLibraryScreenshotsBtnClick() {
  fetchLibraryScreenshots()
    .then((data) => {
      refs.libraryList.innerHTML = "";
      createLibraryMarkup(data);
    })
    .catch((error) => console.log(error));
}

function onDeleteBtnClick(event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
    console.log(id);
    fetchDeleteScreenshot(id);
    setTimeout(() => {
      fetchLibraryScreenshots()
        .then((data) => createLibraryMarkup(data))
        .catch((error) => console.log(error));
    }, 2000);
  }
}

async function fetchScreenshotApi(website) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4375eace25msh493d4bce134a3cbp1743a9jsn80069769671c",
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${BASE_URL_SCREENSHOT_API}?RapidAPI =${KEY_API_SCREENSHOT}&url=https://${website}&width=400&height=600&fullscreen=false&Request=rapidapi.com`,
    options
  );
  const data = await response.json();
  console.log(data);
  return data;
}

async function fetchSavingScreenshot(url) {
  const savedUrl = {
    url,
  };
  console.log(savedUrl);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; UTF-8",
    },
    body: JSON.stringify(savedUrl),
  };

  const response = await fetch(
    `${BASE_URL_CRUD_CRUD}/${KEY_API_CRUD_CRUD}/library`,
    options
  );
  const data = await response.json();
  return data;
}

async function fetchLibraryScreenshots() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; UTF-8",
    },
  };

  const response = await fetch(
    `${BASE_URL_CRUD_CRUD}/${KEY_API_CRUD_CRUD}/library`,
    options
  );
  const data = await response.json();
  console.log("done library fetch", data);
  return data;
}

async function fetchDeleteScreenshot(id) {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(
    `${BASE_URL_CRUD_CRUD}/${KEY_API_CRUD_CRUD}/library/${id}`,
    options
  );
}

function createLibraryMarkup(data) {
  refs.libraryList.innerHTML = "";
  console.log("Work render");
  const markup = data
    .map(
      (element) =>
        `<li class="screenchot-item">
  <img class="screenchot-img" src="${element.url}" alt=""  />
 
  <button class="delete-btn" data-id="${element._id}">Delete</button>
  </li> `
    )
    .join(" ");
  return (refs.libraryList.innerHTML = markup);
}

function createOneScreenshotMarkup(url) {
  return (refs.libraryList.innerHTML = `<li class="screenchot-item">
  <img class="screenchot-img" src="${url}" alt="" data-id="" />
  </li>`);
}
