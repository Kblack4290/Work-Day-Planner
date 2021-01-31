// GIVEN I am using a daily planner to create a schedule



// WHEN I click into a time block

// THEN I can enter an event

// WHEN I click the save button for that time block

// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

$(document).ready(function () {
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

        if (resNumber == 24) {

            $("textarea").addClass("past")

        }
        // if it is pastime then color is grey / if resNumber < currentHour change class to .past

        if (currentHour > resNumber) {

            $("textarea").addClass("past")


        }
        // if it is the current time then the color is red

        else if (currentHour == resNumber) {

            $(this).addClass("current")
            $("textarea").addClass("current")

        }



    })
    console.log(moment().hours());

});