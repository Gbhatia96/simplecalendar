function CreateBasicCalendar() {
    CreateCalendar(new Date(), "");
}

function CreateCalendarEvents(json) {
    CreateCalendar(new Date(), json);
}

var weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var numberOfCalendarRows = 6;
var inputDate;

function CreateCalendar(date, jsonEvents) {

    inputDate = date;

    //get first day of month of the input date
    var fdayMonth = inputDate;
    fdayMonth.setDate(inputDate.getDate() - inputDate.getDate() + 1);

    //find first day of the calendar
    var fdayCalendar = new Date(fdayMonth);
    for (var i = 0; i < 7; i++) {
        //Check if this date falls on sunday if not subtract one day and continue
        if (fdayCalendar.getDay() != 0) {
            fdayCalendar.setDate(fdayCalendar.getDate() - 1);
        }
        else {
            break;
        }
    }
    //finding element in html to add calendar to
    var calendarElement = document.getElementById("Calendar");

    var calendarTemplate = "";
    calendarTemplate += `<table id="calendartable">
    <thead>
    <tr>
    <th colspan="7">
    ${inputDate.getFullYear()}
    </th>
    </tr> 
         <tr id="monthheader">  
            <th colspan="2">
                <button class="calendar-button" onclick="NavigateLeft(jsonEvents)"><</button>
            </th>
            <th colspan="3">
                ${inputDate.toLocaleString('default', { month: 'long' })}&nbsp; 
            </th>
            <th colspan="2">
                <button class="calendar-button" onclick="NavigateRight(jsonEvents)">></button>
            </th>
         </tr>
         <tr>`;

    weekDays.forEach(function (weekday) {
        calendarTemplate += `<th style="color:crimson">${weekday}</th>`;
    })

    calendarTemplate += `       
        </tr>
     </thead>
     <tbody>`;

     var loopDay=fdayCalendar;
    //Iterating calendar rows
    for (var i = 0; i < numberOfCalendarRows; i++) {

        //adding tr for each calendar row
        calendarTemplate += `<tr>`;

        //iterating for each day in a calendar row
        for (var j = 0; j < 7; j++) {

            var date = new Date(loopDay);
            var event = { eventTitle: "" };
            //Check if we have any events to show
            if (jsonEvents) {
                //find the event for current date in the loop and assign to event variable
                var eventForCurrentLoopdate = jsonEvents.find(a => new Date(a.date).withoutTime() === date.withoutTime());
                if (eventForCurrentLoopdate)
                    event = eventForCurrentLoopdate;
            }

            //Check if current loop date is the today's date 
            if (date.withoutTime() == (new Date()).withoutTime()) {
                calendarTemplate += `
                    <td class="today">
                        <span class="date">${date.getDate()}</span>
                        <span class="event">${event.eventTitle}</span>
                    </td>`;
            }
            else if (date.getMonth() === inputDate.getMonth()) {
                calendarTemplate += `
                   <td class="active-month">
                        <span class="date">${date.getDate()}</span>
                        <span class="event">${event.eventTitle}</span>
                   </td>`;
            }
            else {
                calendarTemplate += `
                    <td class="inactive-month">
                        <span class="date">${date.getDate()}</span>
                        <span class="event">${event.eventTitle}</span>
                    </td>`;
            }
            loopDay.setDate(loopDay.getDate() + 1);
        }
        //weekdays loop ends
        calendarTemplate += "</tr>"
    }
    //rows loop ends
    calendarTemplate += "</tbody></table>";
    calendarElement.innerHTML = calendarTemplate;

}
function NavigateLeft(events) {
    inputDate = new Date(inputDate.setMonth(inputDate.getMonth() - 1));
    CreateCalendar(inputDate, events);
}
function NavigateRight(events) {
    inputDate = new Date(inputDate.setMonth(inputDate.getMonth() + 1));
    CreateCalendar(inputDate, events);
}
Date.prototype.withoutTime = function () {
    var d = new Date(this);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}