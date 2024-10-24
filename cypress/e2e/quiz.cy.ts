describe('Quiz Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should start the quiz and make the first question appear', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('be.visible');
    });

    it ('should answer the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
    });

    it ('should complete the quiz from start to finish', () => {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        cy.get('.card').contains('Quiz Completed');
        cy.get('.alert-success').should('be.visible').and('contain','Your score:');
    });

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