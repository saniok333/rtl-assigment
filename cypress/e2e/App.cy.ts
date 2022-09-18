import * as data from '../../src/mocks/mock.json';

const {
  bundelItems: [{ urlAlias }],
} = data;

describe('Application E2E', () => {
  it('should go to the proper page after article item click', () => {
    cy.visit('/');

    cy.get('main > div:first-of-type').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(urlAlias);
    });
  });
});
