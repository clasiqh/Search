const input = document.getElementById("query");
const suggestions = document.getElementById("suggestions");
document.body.addEventListener("click", closeSuggestions);

let state = false;
const numberOfSuggestions = 5;

input.addEventListener("keyup", async (event) => {
  suggestions.innerHTML = ""; //remove previous elements
  const text = input.value;

  //if empty input
  if (text == "") {
    closeSuggestions();
    return;
  }
  let index = words.indexOf(text);

  //if word exists, print it and show suggestions
  if (index != -1) {
    for (let i = index; i < index + numberOfSuggestions && i < length; i++)
      addBox(words[i]);
    showSuggestions();
    return;
  }

  //if words doesn't exist
  closeSuggestions();
});

function search() {
  const text = input.value;
  window.open("https://www.google.com/search?q=" + text);
}

function closeSuggestions() {
  if (state) {
    suggestions.style.opacity = 0;
    suggestions.style.width = document.getElementById("query").style.width;
    setTimeout(() => {
      suggestions.style.display = "none";
    }, 200);
    state = false;
  }
}

function showSuggestions() {
  if (!state) {
    suggestions.style.display = "flex";
    suggestions.style.width = document.getElementById("query").style.width;
    suggestions.style.opacity = 100;
    state = true;
  }
}

const addBox = (text) => {
  let div = document.createElement("div");
  div.innerHTML = text;
  div.className = "box";
  div.addEventListener("click", () => {
    input.value = text;
  });
  suggestions.appendChild(div);
};

const length = words.length;
