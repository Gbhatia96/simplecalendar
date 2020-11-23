# simplecalendar
Add a simple yet fully customizable calendar to your website along with Calendar events

## Features
* Full Calendar created and loaded with script
* The format for names of week is easily customizable by modifying one array in js
eg.  weekDays = ["S", "M", "T", "W", "T", "F", "S"];
     weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
     weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
* The number of weeks to display in the calendar is also very easy to customize
eg. numberOfCalendarRows = 5;
    numberOfCalendarRows = 6;
* It is designed to fill the div container. So just adjust the width and height of the div to resize calendar
* Add events in the calendar by feeding date and event name

 ## Steps To Integrate
* Refer <strong>calendarEvent.js</strong> and <strong>calendarEvent.css</strong> in your html file
* Create a div tag with id "Calendar"
* Create a array of events in below format<br>
 <code>var jsonEvents=[ {date:"2020-10-10",eventTitle:"Jessie Bday"},<br>
                  {date:"2020-12-22",eventTitle:"Anniversary"}<br>
               ];</code>
 * Initialize calendar by calling<code> CreateCalendarEvents(jsonEvents); </code>in your script
 * Style the calendar as per your needs

## Live Demo
https://gbhatia96.github.io/simplecalendar
