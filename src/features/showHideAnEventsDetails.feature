Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the main page is open. The user should received a list of upcoming events in specific city/all cities
When the user should see a list of all upcoming events in this city
Then the event details shouldn’t be visible to the user

Scenario: User can expand an event to see its details
Given a list of all upcoming events in specific city/all cities is showing
When the user clicks on the “Show details” button of the event
Then the user should see more information about this event

Scenario: User can collapse an event to hide its details
Given an event details is open. The user should received a list of upcoming events in specific city/all cities
When the user clicks on the “Hide details” button of the event
Then the details of the event should be hidden