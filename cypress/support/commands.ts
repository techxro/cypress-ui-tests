export {}
declare global {
    namespace Cypress {
        interface Chainable {
            dataCy: typeof dataCy;

        }
    }
}

const dataCy = (value: string, timeout = 11000) => {
    return cy.get(`[data-cy="${value}"]`, {timeout: timeout}).should('be.visible')
}
Cypress.Commands.add('dataCy', dataCy)

