
/* eslint-disable no-undef */
describe("Our first suite", () => {


    it("Patient will login with Sumbul", ()=> {
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
            .type("+923121547324");
          cy.get(".modal-body").find("[type=\"password\"]").type("password");
          cy.get(".modal-body").find("button").contains("Log In").click({force:true});
        });
        

    });
    //All Appointment test case
    
    //it("it will check All Appointments module", ()=> {
      //by ID
      //cy.url()
     // cy.get("#side-menu");
  

    });

