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

    // Creates divs for each hour value of 'day' from html template.
    function createTimerBlock(hour) {
        var newTime = $("#template").clone();
        console.log(hour);
        newTime.removeAttr("id");
        newTime.attr("data-time", hour.mTime);
        console.log(newTime);
        newTime.find(".hour").text(hour.time);
        $(".container").append(newTime);
    }

    // Updates the css style of time-block based on the current time.
    function evaluateTime() {
        $(".time-block").each (function() {
            hourField = Number($(this).attr("data-time"));
            currentHour = Number(moment().format("k"));
            if (hourField < currentHour) {
                $(this).addClass("past");
            } else if (hourField > currentHour) {
                $(this).removeClass("present");
                $(this).addClass("future");
            } else {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        });
    }

    for (var i = 0; i < day.length; i++) {
        var hour = day[i];
        createTimerBlock(hour);
    }

    $("#template").remove();

    evaluateTime();

    setInterval(function () {evaluateTime()}, 60000);

});