describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(".day-buttons > :nth-child(2)").click();
    cy.get(".App > :nth-child(2) > div > :nth-child(2)").click();
    cy.get(".day-buttons > :nth-child(2)").click();
    cy.get(".day-buttons > :nth-child(4)").click();
    cy.get(".morningAfternoonButtons > :nth-child(1)").click();
    cy.get(".day-buttons > :nth-child(2)").click();
    cy.get(".main-section").click();
    cy.get(".commentplease").click();
    cy.get('[placeholder="Username here"]').clear("J");
    cy.get('[placeholder="Username here"]').type("Jimbob");
    cy.get(".submitButton").click();
    cy.get('[placeholder="Username here"]').click();
    cy.get(".commentplease").clear(" W");
    cy.get(".commentplease").type(" Whoops I forgot to speak{enter}");
    cy.get(".main-section").click();
    cy.get(".submitButton").click();
    cy.get(".day-buttons > :nth-child(3)").click();
  });
});
