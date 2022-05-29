var currentPlayer = "player1";
var column = $(".column");
var allSlots = $(column.children());
function switchPlayer() {
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}
$(".column").on("click", function (e) {
    var col = $(e.currentTarget);

    var slots = col.children();
    console.log(slots, "this is slots");

    for (var i = slots.length - 1; i >= 0; i--) {
        var currentSlot = slots.eq(i);
        var hole = currentSlot.children();

        if (!hole.hasClass("player1") && !hole.hasClass("player2")) {
            hole.addClass(currentPlayer);

            // Check for a victory:
            // Vertical:
            // var verticalVictory = checkForVerticalVictory(slots);
            // Horizontal:
            var horizontalVictory = checkForHorizontalVictory(slots);

            // if (verticalVictory) {
            // Victory dance / start over
            // }
            if (horizontalVictory) {
            }

            switchPlayer();
            break;
        }
    }
});

// function checkForVerticalVictory(slots) {
//     var count = 0;

//     for (var i = 0; i < slots.length; i++) {
//         console.log(slots.length, "this is slots length in vertical");
//         var currentSlot = slots.eq(i);
//         var hole = currentSlot.children();

//         if (hole.hasClass(currentPlayer)) {
//             count++;
//         } else {
//             count = 0;
//         }
//         console.log(count, "this is count!");

//         if (count == 4) {
//             alert("you won! 🎉");
//             return true;
//         }
//     }

//     console.log("no wins yet ❌");

//     return false;
// }

function checkForHorizontalVictory(slots) {
    var count = 0;

    for (var i = 0; i < allSlots.length - 7; i++) {
        var thisSlot = allSlots.eq(i);
        var thisHole = thisSlot.children(i);

        if (
            allSlots
                .eq(i + 6)
                .children()
                .hasClass(currentPlayer) ||
            allSlots
                .eq(i - 6)
                .children()
                .hasClass(currentPlayer)
        ) {
            count++;
        } else {
            count = 0;
        }

        console.log("this is count", count);

        if (count == 4) {
            console.log("you won! 🎉");
            return true;
        }
    }

    console.log("no wins yet ❌");

    return false;
}
