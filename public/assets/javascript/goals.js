$(function () {
    $(".change-sleep").on("click", function (event) {
        var id = $(this).data("id");
        var newAccomplished = $(this).data("newAccomplished");

        var newAccomplishedState = {
            accomplished: newAccomplished
        };

        // Send the PUT request.
        $.ajax("/api/goals/" + id, {
            type: "PUT",
            data: newAccomplishedState
        }).then(
            function () {
                console.log("changed accomplished to", newAccomplished);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#goal").val().trim(),
            accomplished: $("[name=accomplished]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/goals", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new goal");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-goal").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/goals/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted goal", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});