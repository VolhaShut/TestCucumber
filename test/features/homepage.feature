Feature: Habrahabr 
  As a user of site
  I want to visit the startpage
  So that I can access the various features on offer

    @important
  Scenario: Visit page
    Given I am on website page
    When I click on Login button
    Then I enter 'testingcucumber@gmail.com' and 'Testing2016' correctly
    Then I click to profile button and go to the profile page
    Then I check a username
    Then I set up avatar in profile
    Then I go to publications page

    @art
  Scenario Outline: Write comment
    Given I am on publications page
    When I search '<textsearch>' in articles
    Then I click to first article
   # Then I write a comment


    
    Examples:
        | textsearch                                    |
        |Новости онлайн-курсов Mail.Ru Group на Stepik  |
        |JavaScript                                     |
        |Программа                                      |
 
