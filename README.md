# Meet App

## Project description

To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events


## The app's key features, User Stories and BDD Scenarios, “Given-When-Then” steps

### **Feature 1. Filter events by city.**

**User Story:** As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

**Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.
*Given* user hasn’t searched for any city.
*When* the user opens the app.
*Then* the user should see a list of all upcoming events.
**Scenario 2:** User should see a list of suggestions when they search for a city.
*Given* the main page is open.
*When* user starts typing in the city textbox.
*Then* the user should see a list of cities (suggestions) that match what they’ve typed.
**Scenario 3:** User can select a city from the suggested list.
*Given* the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing.
*When* the user selects a city (e.g., “Berlin, Germany”) from the list.
*Then* their city should be changed to that city (i.e., “Berlin, Germany”). And the user should receive a list of upcoming events in that city.


### **Feature 2. Show/hide event details.**

**User Story:** As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.

**Scenario 1:** An event element is collapsed by default.
*Given* the main page is open. The user should received a list of upcoming events in specific city/all cities.
*When* the user should see a list of all upcoming events in this city.
*Then* the event details shouldn't be visible to the user.
**Scenario 2:** User can expand an event to see its details.
*Given* a list of all upcoming events in specific city/all cities is showing.
*When* the user clicks on the “Show details” button of the event.
*Then* the user should see more information about this event.
**Scenario 3:** User can collapse an event to hide its details.
*Given* an event details is open. The user should received a list of upcoming events in specific city/all cities.
*When* the user clicks on the “Hide details” button of the event.
*Then* the details of the event should be hidden. 


### **Feature 3. Specify number of events.**

**User Story:** As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

**Scenario 1:** When user hasn’t specified a number, 32 is the default number.
*Given* the main page is open. The user should received a list of upcoming events in specific city/all cities.
*When* the user hasn’t specified the number of the events.
*Then* the page should display 32 upcoming events. Or less when in specific city it is less upcoming events than 32.
**Scenario 2:** User can change the number of events they want to see.
*Given* the page displayed 32 upcoming events in specific city/all cities. Or less when in specific city it is less upcoming events than 32.
*When* the user specifies the number of events that should be loaded.
*Then* the number of events in the list should be changed to the one selected by the user.


### **Feature 4. Use the app when offline.**

**User Story:** As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

**Scenario 1:** Show cached data when there’s no internet connection.
*Given* the application has already been previously opened online by the user.
*When* the user	opens	the	app	without	internet	connection.
*Then* the user	receives cashed data from their	last session.
**Scenario 2:** Show error when user changes the settings (city, time range).
*Given* the user opens	the	app	without	internet	connection and receives cashed data from their last session.
*When* the user change some settings on the application.
*Then* the user should become an error.


### **Feature 5. View a chart showing the number of upcoming events by city.**

**User Story:** As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

**Scenario 1:** Show a chart with the number of upcoming events in each city.
*Given* the main page is open. 
*When* The user should received a list of upcoming events in specific city/all cities.
*Then* a chart with the number of events in specific city/all cities is served categorized by type.


## Link to hosted project:
Click [here](https://maryna7.github.io/meet/) to go to my meet-app. 
