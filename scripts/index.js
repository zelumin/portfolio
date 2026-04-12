const banner = document.querySelector(".banner");

for (let i = 0; i < 225; i++) {
    const slash = document.createElement("div");
    slash.classList.add("slash");
    slash.textContent = "*";
    slash.style.left = Math.random() * 100 + "%";
    slash.style.top = Math.random() * 100 + "%";
    slash.style.fontSize = 16 + Math.random() * 40 + "px";
    slash.style.animationDuration = 10 + Math.random() * 16 + "s";
    slash.style.animationDelay = Math.random() * 2 + "s";
    banner.appendChild(slash);
}