document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");

    // Add a paragraph about charitable work
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Lionel Messi is also known for his charitable work and has a foundation to support children in need.";
    mainContent.appendChild(newParagraph);

    // Add a button to add more info
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

    // Add a list of Messi's favorite hobbies
    const hobbiesSection = document.createElement("section");
    const hobbiesHeader = document.createElement("h3");
    hobbiesHeader.textContent = "Messi's Favorite Hobbies";
    hobbiesSection.appendChild(hobbiesHeader);

    const hobbiesList = document.createElement("ul");
    const hobbies = ["Playing with his kids", "Listening to music", "Playing video games"];
    hobbies.forEach(hobby => {
        const listItem = document.createElement("li");
        listItem.textContent = hobby;
        hobbiesList.appendChild(listItem);
    });
    hobbiesSection.appendChild(hobbiesList);
    mainContent.appendChild(hobbiesSection);

    // Add a button to toggle the visibility of the image
    const toggleImageButton = document.createElement("button");
    toggleImageButton.textContent = "Toggle Image Visibility";
    mainContent.appendChild(toggleImageButton);

    toggleImageButton.addEventListener("click", function () {
        const image = document.querySelector("figure img");
        if (image.style.display === "none") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});
