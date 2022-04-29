
/* eslint-disable no-undef */

describe("Our first suite", () => {
    before(()=> {
        cy.visit("/landing");
        cy.get("button").contains("Login")
        .then(dropdown => {
            cy.wrap(dropdown).click({force:true});
            cy.get(".dropdown-menu.dropdown-menu-right.show");
            cy.get("a.dropdown-item").contains("Login").click({force:true});
            cy.get(".modal-body").click({force:true});
          cy.get(".form-group").contains("Phone Number");
          cy.get("[placeholder=\"Phone Number\"]")
          .clear()
        .type("+218321321321");
      cy.get(".modal-body").find("[type=\"password\"]").type("password");
      cy.get(".modal-body").find("button").contains("Log In").click({force:true});
      
    })
    .then(() => {
        cy.wait(3000);
    });       
});

it("This Module is for Clinic appointment", () => {
    cy.url()
      .should("eq", Cypress.config().baseUrl + "/doctor/dashboard")
      .then(() => {
        cy.get("#side-menu");
      });
    });
});