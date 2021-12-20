export class DigitalAssistant {
    selector = {
        calculateContinue: 'intro-calculate-continue',
        employmentStatus: 'employment-status-option-employed',
        moneyInput: 'money-sum-input',
        insuranceProductContinue: 'insurance-product-continue',
        employmentStatusContinue: 'employment-status-continue',
        birthdaySelector: 'otto-input-birthday-zodiac',
        errorMessage: '.error-message',
        day: 'input.day',
        month: 'input.month',
        year: 'input.year',
        birthdayContinue: 'birthday-continue'
    }

    insuranceDigitalAssist = () => {
        cy.dataCy(this.selector.calculateContinue).click()
            .then(() => {
                cy.dataCy(this.selector.employmentStatus).click()
            })
        cy.fixture('testData.json').then(data => {
            cy.dataCy(this.selector.moneyInput).type(data.amount)
            cy.dataCy(this.selector.employmentStatusContinue).click()
                .then(() => {
                    cy.contains(data.name).click()
                    cy.get('select').select(data.startDate)
                    cy.dataCy(this.selector.insuranceProductContinue).click()
                    this.enterBirthdate('01', '01', '2010')
                    cy.get(this.selector.errorMessage)
                        .should('have.text', data.messageTextOne)
                    this.enterBirthdate('01', '01', '2022')
                    cy.get(this.selector.errorMessage)
                        .should('have.text', data.messageTextTwo)
                    this.enterBirthdate('18', '10', '1984')
                    cy.dataCy(this.selector.birthdayContinue).click()
                })
        })
    }
    enterBirthdate = (day: string, month: string, year: string) => {
        cy.get(this.selector.birthdaySelector).shadow().find(this.selector.day)
            .type(day, {force: true})
        cy.get(this.selector.birthdaySelector).shadow().find(this.selector.month)
            .type(month, {force: true})
        cy.get(this.selector.birthdaySelector).shadow().find(this.selector.year)
            .type(year, {force: true})
    }
}
