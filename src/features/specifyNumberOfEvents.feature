Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the main page is open. The user should received a list of upcoming events in a specific city/all cities
When the user hasn’t specified the number of the events
Then the page should display 32 upcoming events. Or less when in specific city are less upcoming events than 32

Scenario: User can change the number of events they want to see
Given the page displayed 32 upcoming events in specific city/all cities. Or less when in specific city are less upcoming events than 32
When the user specifies the number of events that should be loaded
Then the number of events in the list should be changed to the one selected by the user