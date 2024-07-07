function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);

    var darkModeStyle = document.getElementById("darkModeStyle");
    var lightSyntaxStyle = document.getElementById("lightSyntaxStyle");
    var darkSyntaxStyle = document.getElementById("darkSyntaxStyle");

    if (mode === "dark") {
        darkModeStyle.disabled = false;
        lightSyntaxStyle.disabled = true;
        darkSyntaxStyle.disabled = false;
    } else if (mode === "light") {
        darkModeStyle.disabled = true;
        lightSyntaxStyle.disabled = false;
        darkSyntaxStyle.disabled = true;
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

var savedTheme = localStorage.getItem("theme-storage") || "light";
setTheme(savedTheme);
