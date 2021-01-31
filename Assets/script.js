// GIVEN I am using a daily planner to create a schedule



// WHEN I click into a time block

// THEN I can enter an event

// WHEN I click the save button for that time block

// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

$(document).ready(function () {

    // time to display using moments api
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    $(".hour").each(function () {
        console.log(hour);

        var currentHour = moment().hours();
        console.log(currentHour);

        var timeBlock = $(this).text();
        console.log(timeBlock);

        var res = timeBlock.split(":");
        var timeOfDay = timeBlock.split(" ")
        console.log(timeOfDay);

        var resNumber = parseInt(res);
        console.log(resNumber);

        if (timeOfDay[1].startsWith("P") || timeOfDay[1].startsWith("p")) {

            resNumber += 12;
        } console.log(resNumber);
        console.log(this);


        // if it is pastime then color is grey / if resNumber < currentHour change class to .past

        if (currentHour > resNumber || resNumber == 24) {

            $(this).parent().siblings("textarea").addClass("past")

        }
        // if it is the current time then the color is red

        else if (currentHour == resNumber) {

            $(this).parent().siblings("textarea").addClass("current-time")

        }

        // if it is future then the color is green
        else {

            $(this).parent().siblings("textarea").addClass("future")
        }

    })

    // save text content to local storage when I click the save button
    $(".saveBtn").on("click", save)

    function save() {

        var comments = $(this).parent().siblings("textarea").val();
        console.log(comments);
        var time = $(this).attr("id");
        console.log(time);
        window.localStorage.setItem(time, comments);

        console.log(this);
    }

    // when I refresh the page the content in the text area remains
    $("#comment9am").val(localStorage.getItem("button9am"));
    $("#comment10am").val(localStorage.getItem("button10am"));
    $("#comment11am").val(localStorage.getItem("button11am"));
    $("#comment12pm").val(localStorage.getItem("button12pm"));
    $("#comment1pm").val(localStorage.getItem("button1pm"));
    $("#comment2pm").val(localStorage.getItem("button2pm"));
    $("#comment3pm").val(localStorage.getItem("button3pm"));
    $("#comment4pm").val(localStorage.getItem("button4pm"));
    $("#comment5pm").val(localStorage.getItem("button5pm"));

});