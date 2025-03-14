/// <reference types = "cypress"/>
import { SignInPage } from "../PageObject/SignInPage";
const signIn = new SignInPage
describe("Sign-In Page Validation", () => {
  

  beforeEach(() => {
    cy.visit('/login')
  })

  it("Verify All Elements on the Sign-In Page", () => {
     signIn.verifyAllElementsSignInPage();  
  })
    it("Verify the Sign-in Functionality & Redirection on Dashboard  ", () => {
      signIn.verifyLoginFuntionality("qatesthub2@gmail.com", "sZWL5WDbCoaKMmNh");
    });
  });

