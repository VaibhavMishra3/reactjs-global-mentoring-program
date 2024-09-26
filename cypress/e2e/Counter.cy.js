/* eslint-disable no-undef */
describe("Counter Component", () => {
  it("increments and decrements the counter value", () => {
    cy.visit("/"); // Adjust the URL to match your dev server

    // Initial value check
    cy.contains("Count: 0");

    // Click increment button
    cy.contains("+").click();
    cy.contains("Count: 1");

    // Click decrement button
    cy.contains("-").click();
    cy.contains("Count: 0");
  });
});
