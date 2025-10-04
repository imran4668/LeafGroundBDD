Feature: Navigate to Alert Page in LeafGround

    Scenario: Open LeafGround and navigate to every alert page
        Given I open the LeafGround homepage
        When I navigate to the "Alert" page
        Then I should see the "Alert" page

        When I trigger the simple alert
        Then I should see and accept the simple alert

        When I trigger the confirm alert
        Then I should see and accept the confirm alert

        When I trigger the sweet alert (simple dialog)
        Then I should see and close the sweet alert

        When I trigger the sweet modal dialog
        Then I should see and close the sweet modal dialog

        When I trigger the prompt alert
        Then I should see, enter text, and accept the prompt alert

        When I trigger the sweet alert (confirmation)
        Then I should see and confirm the sweet alert

        When I trigger the minimize and maximize dialog
        Then I should see and close the dialog