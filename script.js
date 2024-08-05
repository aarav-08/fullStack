document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Lionel Messi is also known for his charitable work and has a foundation to support children in need.";
    mainContent.appendChild(newParagraph);
});
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");
    const addButton = document.createElement("button");
    addButton.textContent = "Add More Info";
    mainContent.appendChild(addButton);

    addButton.addEventListener("click", function () {
        const newSection = document.createElement("section");
        const newHeader = document.createElement("h3");
        newHeader.textContent = "More About Messi's Early Life";
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Lionel Messi was born on June 24, 1987, in Rosario, Argentina. He began playing football at a young age and joined the youth team of Newell's Old Boys when he was only six years old.";

        newSection.appendChild(newHeader);
        newSection.appendChild(newParagraph);
        mainContent.appendChild(newSection);
    });
});


