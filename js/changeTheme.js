export function changeTheme() {
  const btnTheme = document.querySelector(".btn-theme");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    btnTheme.classList.add(savedTheme);

    const themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";
    themeLink.href = `./css/${savedTheme}-theme.css`;
    document.head.appendChild(themeLink);
  }

  btnTheme.addEventListener("click", () => {
    const lightTheme = document.querySelector(
      `link[href="./css/light-theme.css"]`
    );
    const darkTheme = document.querySelector(
      `link[href="./css/dark-theme.css"]`
    );

    if (btnTheme.classList.contains("light")) {
      btnTheme.classList.remove("light");
      btnTheme.classList.add("dark");
      if (lightTheme) {
        document.head.removeChild(lightTheme);
      }

      if (!darkTheme) {
        const darkLink = document.createElement("link");
        darkLink.rel = "stylesheet";
        darkLink.href = "./css/dark-theme.css";
        document.head.appendChild(darkLink);
      }
      localStorage.setItem("theme", "dark");
    } else if (btnTheme.classList.contains("dark")) {
      btnTheme.classList.remove("dark");
      btnTheme.classList.add("light");
      if (darkTheme) {
        document.head.removeChild(darkTheme);
      }

      if (!lightTheme) {
        const lightLink = document.createElement("link");
        lightLink.rel = "stylesheet";
        lightLink.href = "./css/light-theme.css";
        document.head.appendChild(lightLink);
      }
      localStorage.removeItem("theme");
    }
  });
}