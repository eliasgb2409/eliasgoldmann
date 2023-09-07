document.addEventListener("DOMContentLoaded", function () {
    var projectDescriptions = document.querySelectorAll(".project-description");

    var wordLimit = 30;

    projectDescriptions.forEach(function (description) {
        var words = description.textContent.split(" ");
        if (words.length > wordLimit) {
            description.textContent = words.slice(0, wordLimit).join(" ") + " ...";
        }
    });
});
