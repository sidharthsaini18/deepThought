function addCard() {
  const container = document.getElementById("asset-container");
  const assetCount = 4;

  for (i = 1; i <= assetCount; i++) {
    const asset = document.createElement("div");
    const blackArea = document.createElement("div");
    blackArea.className = "black-area";
    asset.className = "asset";
    container.appendChild(asset);
    asset.appendChild(blackArea);
  }
}
addCard();

fetch("../Js/data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    var task = data.tasks[0];
    renderTask(task);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

function renderTask(task) {
  var container = document.getElementById("task-container");
  createTaskElement(task);
}
function createTaskElement(task) {
  var taskContainer = document.getElementById("task-container");

  // Task title
  var taskTitle = document.createElement("h2");
  taskTitle.textContent = task.task_title;
  taskContainer.appendChild(taskTitle);

  // Task Description
  var taskDescription = document.createElement("p");
  taskDescription.textContent = task.task_description;
  taskContainer.appendChild(taskDescription);

  return taskContainer;
}
function createAssetElement(asset) {
  var assetContainer = document.getElementById("asset");

  var assetTitle = document.createElement("h3");
  assetTitle.textContent = asset.asset_title;
  assetContainer.appendChild(assetTitle);

  // Asset Description
  var assetDescription = document.createElement("p");
  assetDescription.textContent = asset.asset_description;
  assetContainer.appendChild(assetDescription);

  // Asset Content
  if (asset.asset_content_type === "video") {
    var video = document.createElement("iframe");
    video.src = asset.asset_content.trim();
    video.width = "560";
    video.height = "315";
    assetContainer.appendChild(video);
  } else if (asset.asset_content_type === "article") {
    var link = document.createElement("a");
    link.href = asset.asset_content.trim();
    link.textContent = "Read More";
    assetContainer.appendChild(link);
  }

  return assetContainer;
}
