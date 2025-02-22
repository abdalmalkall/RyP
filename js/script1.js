document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", (event) => {
        cursor.style.left = event.pageX + "px";
        cursor.style.top = event.pageY + "px";
    });
});
