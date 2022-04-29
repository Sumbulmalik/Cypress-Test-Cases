
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

it("This test case will Automate Doctor messaging portion" ,() => {

    cy.url().should("eq", cy.config().baseUrl+"/doctor/dashboard")
    .then(() => {
        cy.get("#side-menu").contains("Messaging").click();
        cy.wait(3000);
        cy.get(".page-content");
        cy.get(".col-md-12");
        cy.wait(4000)
        .then(()=>{
        cy.get(".page-content");
        cy.get("[placeholder=\"Search...\"]").click({force:true}).type("Muhammad Arslan");
        cy.get("#accordion").click();
        cy.get(".h5").eq(4).click();
        cy.wait(4000)
        .then(()=>{
        cy.get(".p-3.chat-input-section");
        cy.get("[placeholder=\"Enter Message...\"]").click()
        .type("MY NAME IS SUMBUL AND I AM SICK");
        cy.xpath("//*[@id=\"layout-wrapper\"]/div[2]/div/div/div/div[2]/div/div/div/div[2]/div/div[2]/div[2]/div/div[2]/button").click();
        
        });
    });   
});

});
});


