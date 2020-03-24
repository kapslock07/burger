

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("burgerid");

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurgerName").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});



// const burgers = ""
// module.exports = burgers;

