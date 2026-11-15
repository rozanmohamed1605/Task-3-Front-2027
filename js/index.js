
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable common DevTools shortcuts
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
    ) {
        e.preventDefault();
        e.stopPropagation();
    }
});
