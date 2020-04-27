$(document).ready(function() {

    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    var day = [
        {"time":"9AM","mTime":9,"notes":""},
        {"time":"10AM","mTime":10,"notes":""},
        {"time":"11AM","mTime":11,"notes":""},
        {"time":"12AM","mTime":12,"notes":""},
        {"time":"1PM","mTime":13,"notes":""},
        {"time":"2PM","mTime":14,"notes":""},
        {"time":"3PM","mTime":15,"notes":""},
        {"time":"4PM","mTime":16,"notes":""},
        {"time":"5PM","mTime":17,"notes":""}
    ]

    function createTimerBlock(hour) {
        var newTime = $("#template").clone();
        console.log(hour);
        newTime.removeAttr("id");
        newTime.attr("data-time", hour.mTime);
        console.log(newTime);
        newTime.find(".hour").text(hour.time);
        $(".container").append(newTime);
    }

    function evaluateTime() {
        if (moment().isAfter($(".time-block").attr("data-time"))) {
            console.log("It's past that time.")
        }
    }

    console.log("time is " + moment().format("hA"))

    for (var i = 0; i < day.length; i++) {
        var hour = day[i];
        createTimerBlock(hour);
    }

    $("#template").remove();

       


    // Do we set an updating timer that checks every minute if the hour has changed?

    // console.log($(".time-block").attr("data-time").match(/[0-9]+/g).toString());

});