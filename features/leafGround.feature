Feature: Navigate to Alert Page in LeafGround
    @regression
    Scenario: Open LeafGround and navigate to Alert page
        Given I open the LeafGround homepage
        When I navigate to the "Alert" page
        Then I should see the "Alert" page

    Scenario: Handle simple alert
        When I trigger the simple alert
        Then I should see and accept the simple alert

    Scenario: Handle confirm alert
        When I trigger the confirm alert
        Then I should see and accept the confirm alert

    Scenario: Handle sweet alert (simple dialog)
        When I trigger the sweet alert
        Then I should see and close the sweet alert

    Scenario: Handle sweet modal dialog
        When I trigger the sweet modal dialog
        Then I should see and close the sweet modal dialog

    Scenario: Handle prompt alert
        When I trigger the prompt alert
        Then I should see, enter text, and accept the prompt alert

    Scenario: Handle sweet alert (confirmation)
        When I trigger the sweet Delete alert (confirmation)
        Then I should see and confirm the sweet alert

    