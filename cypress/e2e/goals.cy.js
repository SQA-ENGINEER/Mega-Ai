import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";
import { GoalsProject } from "../PageObject/GoalsPage";


const signIn = new SignInPage();
const clients = new ClientsPage();
const projectPage = new ProjectPage();
const createProject = new CreateProject();
const goalsProject = new GoalsProject();

describe("CreateProject Page", () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality("qatesthub2@gmail.com", "sZWL5WDbCoaKMmNh");
    });

    it("Goals step redirection.", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
       // goalsProject.verifyGoalsStepupRedirection();
    });
    it("Goals step redirection.", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
       goalsProject.VerifyAllElementsGoalsForm();
    });

});
