# simplecalendar
Add a simple yet fully customizable calendar to your website along with Calendar events

 ## Steps To Integrate
* Refer <strong>calendarEvent.js</strong> and <strong>calendarEvent.css</strong> in your html file
* Create a div tag with id "Calendar"
* Create a array of events in below format<br>
 <code>var jsonEvents=[ {date:"2020-10-10",eventTitle:"Jessie Bday"},<br>
                  {date:"2020-12-22",eventTitle:"Anniversary"}<br>
               ];</code>
 * Initialize calendar by calling<code> CreateCalendarEvents(jsonEvents); </code>in your script
 * Style the calendar as per your needs
