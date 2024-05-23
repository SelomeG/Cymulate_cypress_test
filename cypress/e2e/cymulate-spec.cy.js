describe("The landing page", () => {
  it("loads", () => {
    cy.visit("/");
  });
});

describe("The Login Page", () => {
  it("It should login", function () {
   

    cy.get("input[id=email]", { timeout: 10000 }).type(Cypress.env('email'));

    cy.get("input[name=password]").type(`${Cypress.env('password')}{enter}`);

    cy.url().should("include", "/cym");
  });
});

describe("Go to Activity log and log three attack ID", () => {
  it("Should apply filters", () => {
    visit("/cym/activity_logs");
    cy.get("icon_").click();
    cy.contains("span", "Type").click();
    cy.xpath("//button[.='Advanced Scenarios']").click();
    cy.xpath("//button[.='Apply Filters']");

    // Query all elements containing attack IDs
    const attackIdElements = document.querySelectorAll(
      '.MuiChip-root[test-data-id="assessmentID"] .MuiChip-label .Text__StyledSpan-sc-a1dltl-1.ljpQOx'
    );

    // Extract the attack IDs
    const attackIds = [];
    for (let i = 0; i < 3 && i < attackIdElements.length; i++) {
      attackIds.push(attackIdElements[i].textContent);
    }

    // Log the first 3 attack IDs
    cy.log("First 3 Attack IDs:", attackIds);
  });
});
