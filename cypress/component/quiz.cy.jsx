import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
        },
        {
            fixture: 'questions.json',
            statusCode: 200,
        }
        ).as('getRandomQuestion');
    })

    it('should start the quiz and make the first question appear', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('be.visible');
    });

    it ('should answer the first question', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
        cy.get('h2').contains('Which of the following is a mutable data type in Python?');
    });

    it ('should complete the quiz from start to finish', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('3').click();
    });
    
    it ('should restart the quiz after completion', () => {
        cy.mount(<Quiz/>);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('3').click();
        cy.get('.card').contains('Quiz Completed');
        cy.get('.alert-success').should('be.visible').and('contain','Your score: 3/3');
        cy.get('button').contains('Take New Quiz').should('be.visible');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('h2').contains('What is the output of print(2 ** 3)?');
    })
})
