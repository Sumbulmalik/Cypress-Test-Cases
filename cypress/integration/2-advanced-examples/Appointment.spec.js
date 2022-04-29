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
    //Clinic appointment test
    it("This Module is for Clinic appointment", () => {
      cy.url()
        .should("eq", Cypress.config().baseUrl + "/patient/dashboard")
        .then(() => {
          cy.get("#side-menu")
          .contains("Book Appointment").click({force:true});
          cy.then(() => {
            cy.contains("Clinic Appointments").click({force:true});
            cy.get(".page-content");
            cy.get("[placeholder=\"Doctor Name\"]").click({force:true}).type("Ahmeddd");
            cy.get("button").contains("Search").click().then(()=>{
            cy.wait(3000);
            cy.get("a").contains("View Profile").click().then(()=>{
               cy.wait(8000);
              cy.get("h4").contains("Ahmeddd").then(()=>{
               
                assert.isOk("everything", "everything is ok");
                

                
              });
              cy.get(".page-content");
              cy.get(".react-calendar").click();
              cy.get(".react-calendar__navigation");
              cy.get(".react-calendar__navigation__next-button").click().then(()=>{
                cy.get(".react-calendar__viewContainer");
                cy.get("button.react-calendar__month-view__days__day").contains(19).click();
               cy.get(".col-md-12");
                 cy.get("button");
            cy.get( "#custom-scrollbar");
            cy.get("#availabilityButton0") .click().then(()=>{
              cy.get(".modal-body");
              cy.get("button").contains("Book Appointment").click();
              // cy.get("[type=\"radio\"]").first().check()
              cy.get(".form-check-label").contains("For Someone Else").click();
              // cy.get("radio").contains("selectModeTypeRadionButtons");
              
            });
            cy.get("#modeFirstName").type("Sumbul").then(()=>{
              cy.get("#modeLastName").type("Malik");
              cy.get("#modeAge").type("22");
              cy.get("#modeGenderFemale").click();
              cy.get("[placeholder=\"Phone Number\"]")
              .clear()  
              .type("+923121547324");
              cy.get("button").contains("Next").click();
              assert.isOk("everything", "everything is ok");

            });
            cy.get(".card-body");
            cy.get("#appointmentType2").click().then(()=>{
              cy.get("[placeholder=\"Problem Description\"]").clear().type("I Am Sumbul and I Am anesthesia Patient");
              cy.get("button").contains("Next").click();
              assert.isOk("everything", "everything is ok");


            
            });
            cy.get(".card-body");
            cy.get("button").contains("Next").click();

           cy.get(".card-body").then(()=>{

          
           cy.get("[placeholder=\"Name\"]").clear().type("Sumbul");
           cy.get("[placeholder=\"Description\"]").clear().type("This patient is my Sister");
           cy.get(".dropzone").click();

           cy.xpath("//*[@id='basic-pills-wizard']/div/div[4]/div/div[3]/div[1]/div[1]/div/div/i");

           cy.get("[type=\"file\"]")

              .attachFile("../fixtures/Ahmeedd.png");


         cy.get("button").contains("Next").click();

         cy.get("button").contains("Next").click();
         cy.get("button").contains("Book Appointment").click();


           });

              });
              
            });
           

          });
         

    });
});
    });
  });