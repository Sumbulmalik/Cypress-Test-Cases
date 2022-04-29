

/* eslint-disable no-undef */

describe("Our first suite", () => {
    before(() => {
      cy.visit("/landing").then(() => {
        cy.get("button")
          .contains("Login")
          .then(dropdown => {
            cy.wrap(dropdown).click({force:true});
            cy.get("a.dropdown-item").contains("Login").click({force:true});
            cy.get(".modal-body")
              .find("[placeholder=\"Phone Number\"]")
              .clear()  
              .type("+923121547324");
            cy.get(".modal-body").find("[type=\"password\"]").type("password");
            cy.get(".modal-body").find("button").contains("Log In").click();
          })
          .then(() => {
            cy.wait(3000);
          });
      });
    });

  
    it("it will test notification module", () => {
      cy.url()
        .should("eq", Cypress.config().baseUrl + "/patient/dashboard")
        .then(() => {
          cy.get("#side-menu")
            .contains("Notification")
            .click()
            .then(() => {
              cy.wait(4000);
              assert.isOk("everything", "everything is ok");
            })
            .then(() => {
              cy.get(".nav-item").contains("Read").click();
              cy.wait(3000);
              cy.get(".nav-item").contains("System Notifications").click();
              cy.wait(3000);




            });
        });
    });
  });


  