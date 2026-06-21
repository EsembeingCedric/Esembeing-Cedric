/**
 * Flytify Brochure Generator — JavaScript
 *
 * This file handles the interactive parts of the
 * brochure builder. Right now only ONE feature
 * works — the primary colour preview.
 *
 * YOUR TASK:
 *   - Make the secondary colour preview work too
 *   - Add form validation (check fields are filled)
 *   - Show a preview of the selected logo image
 *   - Add a live character counter for the tagline
 */

document.addEventListener('DOMContentLoaded', function () {

    // ─── PRIMARY COLOUR (works!) ────────────────
    // When the user picks a colour, the swatch
    // next to it updates to match.

    var primaryInput = document.getElementById('primary-color');
    var primarySwatch = document.getElementById('primary-swatch');

    if (primaryInput && primarySwatch) {
        primaryInput.addEventListener('input', function () {
            primarySwatch.style.backgroundColor = this.value;
        });
    }

    // ─── SECONDARY COLOUR (broken — fix me!) ────
    // TODO: Add an event listener on the secondary
    // colour input that updates secondary-swatch.
    //
    // Hint: It works the same way as primary above.
    // You need:
    //   1. Get the element with id="secondary-color"
    //   2. Get the element with id="secondary-swatch"
    //   3. Add an 'input' event listener that sets
    //      swatch.style.backgroundColor = input.value

    var secondaryInput = document.getElementById('secondary-color');
    var secondarySwatch = document.getElementById('secondary-swatch');

    // TODO: Your code goes here
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const fullName = document.getElementById("fullName");
        form.addEventListener("submit", function (e) {
            // check is Full Name is empty
            if(fullName.value.trim() === "") {
                e.preventDefault(); // stop form from submitting
                alert("Full Name cannot be empty!");
                fullName.focus();
            }
        });
    });


    // ─── LOGO PREVIEW ───────────────────────────
    // TODO: When the user selects a logo file,
    // show a small preview of it on the page.
    //
    // Hint: Use the FileReader API:
    //   var reader = new FileReader();
    //   reader.onload = function(e) { ... };
    //   reader.readAsDataURL(file);

    // ─── FORM VALIDATION ────────────────────────
    // TODO: Before the form submits, check that
    // required fields (like Full Name) are filled.
    // Show an alert if something is missing.

    // ─── TAGLINE COUNTER ────────────────────────
    // TODO: Show a live "X / 100 characters" count
    // below the tagline input field.

});
