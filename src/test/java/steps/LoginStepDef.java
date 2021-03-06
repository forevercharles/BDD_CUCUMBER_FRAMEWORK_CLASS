package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDef {
	WebDriver driver;

//	initializing an object
	LoginPage loginPage;


	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given("^User is on the Techfios login page$")
	public void User_is_on_the_techfios_login_page() {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}
	
	
	@Given("^User is on the \"([^\\\"]*)\" login page$")
	public void User_is_on_the_login_page(String page) throws InterruptedException {
		if (page.equalsIgnoreCase("Techfios")) {
			driver.get("http://www.techfios.com/billing/?ng=admin/");
		} else if (page.equalsIgnoreCase("GoogleSearch")) {
			driver.get("http://www.google.com");
		}
		Thread.sleep(3000);
	}

	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
//  I have to define the loginpage here coz its a page object model so I have to define all the elements in class		
		
		loginPage.enterUserName(username);
		Thread.sleep(2000);
	}
	

	 @When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
		public void  user_enters_and(String username, String password) throws Throwable {	
			loginPage.enterCredentials(username, password);
			Thread.sleep(2000);
		}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws InterruptedException {
		loginPage.enterPassword(password);
		Thread.sleep(2000);
	}

	@When("^user clicks signin button$")
	public void user_clicks_signin_button() throws Throwable {
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);
		
	}

	@Then("^user will land on the Dashboard page$")
	public void user_will_land_on_the_Dashboard_page() throws Throwable {
         String expectedTitle = "Dashboard- iBilling";
         String actualTitle = loginPage.getPageTitle();
         Assert.assertEquals(expectedTitle, actualTitle);
         loginPage.takeScreenshotAtEndOfTest(driver);
	}

	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}
}
