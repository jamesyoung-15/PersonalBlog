let toggle = document.getElementById("theme-toggle");
const darkTheme = document.getElementById("dark-theme");
const lightTheme = document.getElementById("light-theme");

const storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
console.log(storedTheme);

if (storedTheme == "dark") {
  document.documentElement.setAttribute("data-theme", storedTheme);
  darkTheme!.style.display = "flex";
  lightTheme!.style.display = "none";
} else {
  document.documentElement.setAttribute("data-theme", storedTheme);
  darkTheme!.style.display = "none";
  lightTheme!.style.display = "flex";
}

toggle!.onclick = (): void => {
  let currentTheme: string | null =
    document.documentElement.getAttribute("data-theme");
  // console.log(currentTheme);
  if (currentTheme === "dark") {
    currentTheme = "light";
    darkTheme!.style.display = "none";
    lightTheme!.style.display = "flex";
  } else {
    currentTheme = "dark";
    darkTheme!.style.display = "flex";
    lightTheme!.style.display = "none";
  }

  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
};
