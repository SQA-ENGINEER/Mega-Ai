export class SignInPage  {
        verifyAllElementsSignInPage(){
        cy.get("img[alt='mega-logo']").should("be.visible");
        cy.contains("Sign in to your Mega Account").should("be.visible");
        cy.contains("Start automating your calls with Mega's powerful AI models.").should("be.visible");
        cy.get("#email").should("be.visible").and("have.attr", "placeholder", "Enter Email");
        cy.get("#password").should("be.visible").and("have.attr", "placeholder", "Enter Password");
        cy.get(".pi.pi-eye.input-icon.ng-star-inserted").should("be.visible");
        cy.get("#rememberme").should("be.visible");
        cy.contains("Remember me").should("be.visible");
        cy.get('.p-button-label').should("be.visible").and("contain", "Sign in");

    }
    verifyLoginFuntionality(email, password) {
        cy.get("#email").should("be.visible").clear().type(email)
        cy.get("#password").should("be.visible").clear().type(password)
        cy.get(".p-checkbox-box").click();
        cy.get(".p-button-label").should("be.visible").click();
        cy.url().should("include", "/admin-dashboard"); 
        cy.get(".flex-auto.text-base.font-semibold.line-height-3.text-900").should("be.visible").and('contain.text','Dashboard')
    }
    }