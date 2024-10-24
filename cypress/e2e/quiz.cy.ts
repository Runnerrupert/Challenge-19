describe('Quiz Component', () => {
    // Visits the root route before each test is ran
    beforeEach(() => {
        cy.visit('/');
    });

    // Checks if the quiz starts and shows the first question
    it('should start the quiz and make the first question appear', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('be.visible');
    });

    // Checks if the next question shows after the first is answered
    it ('should answer the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
    });

    // Answers all 10 questions using a for loop
    it ('should complete the quiz from start to finish', () => {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        cy.get('.card').contains('Quiz Completed');
        cy.get('.alert-success').should('be.visible').and('contain','Your score:');
    });

    // Checks if the quiz restarts after finishing, makes sure the completion screen is visible
    it ('should restart the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        cy.get('.card').contains('Quiz Completed');
        cy.get('.alert-success').should('be.visible').and('contain','Your score:');
        cy.get('button').contains('Take New Quiz').should('be.visible');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('be.visible');
        
    })
})