document.getElementById("color-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the color value from the input field
    var colorValue = document.getElementById("colorInput").value;

    // Update the header text color
    var header = document.getElementById("header");
    header.style.color = colorValue;

    // Clear the input field
    document.getElementById("colorInput").value = "";
});