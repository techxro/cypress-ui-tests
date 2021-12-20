import { DigitalAssistant } from '../pages/DigitalAssistant';

describe('submit digital insurance information', () => {
    const digitalAssist = new DigitalAssistant()
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })

    it('should be able to submit insurance info', () => {
        digitalAssist.insuranceDigitalAssist();
    })
})
