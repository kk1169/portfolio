const feNav = document.getElementById("feNav");
const feMenuBtn = document.getElementById("feMenuBtn");
const feMenuCloseBtn = document.getElementById("feMenuCloseBtn");

$(feMenuBtn).on("click", function () {
  $(feNav).addClass("show");
});

$(feMenuCloseBtn).on("click", function () {
  $(feNav).removeClass("show");
});
