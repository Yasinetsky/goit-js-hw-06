
const input = document.querySelector("#name-input");

const nameLabel = document.querySelector("#name-output");

const anonymous = nameLabel.textContent;

const changeLabelName = (name) => {
  if (name.currentTarget.value === "") {
    return (nameLabel.textContent = anonymous);
  }
  return (nameLabel.textContent = name.currentTarget.value);
};

input.addEventListener("input", changeLabelName);