import addContext from 'mochawesome/addContext';
import './commands'

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === 'failed') {
        const screenshot = `${Cypress.config('screenshotsFolder')}/${
            Cypress.spec.name
            // @ts-ignore
        }/${runnable.parent.title} -- ${test.title} (failed).png`;
        // @ts-ignore
        addContext({ test }, screenshot);
    }
});
