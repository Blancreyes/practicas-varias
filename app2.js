$(document).ready(function() {
    // Initialize the calendar
    $("#calendar").fullCalendar({
        defaultView: "agendaWeek",
        editable: true,
        selectable: true,
        events: [{
                title: "Event 1",
                start: "2023-03-08T09:00:00",
                end: "2023-03-08T10:30:00",
            },
            {
                title: "Event 2",
                start: "2023-03-09T12:00:00",
                end: "2023-03-09T14:00:00",
            },
            {
                title: "Event 3",
                start: "2023-03-10T10:00:00",
                end: "2023-03-10T11:30:00",
            },
        ],
        select: function(start, end) {
            // Open a dialog box to create a new event
            let title = prompt("Enter event title:");
            if (title) {
                let eventData = {
                    title: title,
                    start: start,
                    end: end,
                };
                $("#calendar").fullCalendar("renderEvent", eventData, true); // stick? = true
            }
            $("#calendar").fullCalendar("unselect");
        },
        eventClick: function(event) {
            // Open a dialog box to edit an existing event
            let title = prompt("Edit event title:", event.title);
            if (title) {
                event.title = title;
                $("#calendar").fullCalendar("updateEvent", event);
            }
        },
    });
});