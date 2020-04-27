$(document).ready(function() {
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
    function createTimerBlock() {
        for (var i = 0; i < day.length; i++) {
            var hour = day[i];
            var newTime = $("#template").clone();
            newTime.removeAttr("id");
            newTime.attr("data-time", hour.mTime);
            newTime.find(".hour").text(hour.time);
            $(".container").append(newTime);
        }
        $("#template").remove();
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

    $("#currentDay").text(moment().format('dddd, MMMM Do'));
    createTimerBlock();
    evaluateTime();
    setInterval(function () {evaluateTime()}, 60000);

    $(".saveBtn").on("click", function() {
        var time = $(this).parent().parent().attr("data-time");
        var note = $(this).prev().val();
        console.log(time);
        console.log(note);
        day[(time - 9)].notes = note;
        console.log(day[(time - 9)]);
    })


});