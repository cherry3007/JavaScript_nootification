export function showNotification(type, message) {
    const container = document.getElementById("notifications");
  
    const notif = document.createElement("div");
    notif.textContent = message;
  
    notif.style.padding = "10px 15px";
    notif.style.borderRadius = "8px";
    notif.style.color = "white";
    notif.style.fontWeight = "bold";
    notif.style.display = "flex";
    notif.style.justifyContent = "space-between";
    notif.style.alignItems = "center";
    notif.style.gap = "10px";
    notif.style.maxWidth = "250px";
  
    if (type === "success") notif.style.backgroundColor = "#28a745";
    if (type === "fail") notif.style.backgroundColor = "#dc3545";
    if (type === "warning") notif.style.backgroundColor = "#fd7e14";
  
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.style.background = "transparent";
    closeBtn.style.color = "white";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
  
    closeBtn.onclick = () => {
      container.removeChild(notif);
    };
  
    notif.appendChild(closeBtn);
    container.appendChild(notif);
  
    setTimeout(() => {
      if (container.contains(notif)) {
        container.removeChild(notif);
      }
    }, 3000);
  }
  