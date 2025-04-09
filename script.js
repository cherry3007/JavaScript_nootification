// Стилизация кнопок
const styleButton = (btn, bgColor, hoverColor) => {
  btn.style.padding = "12px 24px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";
  btn.style.transition = "background 0.3s";
  btn.style.backgroundColor = bgColor;

  btn.addEventListener("mouseover", () => btn.style.backgroundColor = hoverColor);
  btn.addEventListener("mouseout", () => btn.style.backgroundColor = bgColor);
};

// Получаем кнопки
const successBtn = document.getElementById("successBtn");
const failBtn = document.getElementById("failBtn");
const warningBtn = document.getElementById("warningBtn");

// Применяем стили
styleButton(successBtn, "#28a745", "#218838");
styleButton(failBtn, "#dc3545", "#c82333");
styleButton(warningBtn, "#fd7e14", "#e96c0a");

// Обработчики кликов с уведомлениями
successBtn.addEventListener("click", async () => {
  const perm = await Notification.requestPermission();
  if (perm === "granted") {
    new Notification("Well done!");
  }
});

failBtn.addEventListener("click", async () => {
  const perm = await Notification.requestPermission();
  if (perm === "granted") {
    new Notification("Oh snap! Change a few things up and try again.");
  }
});

warningBtn.addEventListener("click", async () => {
  const perm = await Notification.requestPermission();
  if (perm === "granted") {
    new Notification("Warning!");
  }
});
