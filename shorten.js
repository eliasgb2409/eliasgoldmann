document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running");
    var projectDescriptions = document.querySelectorAll(".project-description");

    // Define the word limit
    var wordLimit = 30;

    // Iterate through each project description
    projectDescriptions.forEach(function (description) {
        var words = description.textContent.split(" ");
        if (words.length > wordLimit) {
            // Truncate the text to the word limit
            description.textContent = words.slice(0, wordLimit).join(" ") + " ...";
            console.log("Short done");
        }
    });
});
