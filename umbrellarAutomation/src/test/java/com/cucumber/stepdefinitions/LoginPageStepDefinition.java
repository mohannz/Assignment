package com.cucumber.stepdefinitions;


import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import com.umbrellar.qa.base.TestBase;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefinition extends TestBase {	
		
   LoginPageStepDefinition ls; 
   
	public LoginPageStepDefinition() {		
	super();		
	}
	
	@Before
	public void testSetup(Scenario scenario) {	
		ls=new LoginPageStepDefinition();
		ls.initialization();
	}
	
	@After
	public void testShutDown(Scenario scenario) {		
		ls.shutDown(scenario);
	}
		

@Given("^the user navigates to react login page$")
public void the_user_navigates_to_react_login_page() throws Throwable { 	
	driver.get(prop.getProperty("url"));	
    driver.manage().window().maximize();     
    driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);    
    driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    

}

@When("^the user enters the ([^\\\"]*) and ([^\\\"]*)$")
public void the_user_enters_the_username_and_password(String username,String password) throws Throwable {
	WebDriverWait wait=new WebDriverWait(driver,60);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("userName_xpath"))));
	driver.findElement(By.xpath(prop.getProperty("userName_xpath"))).sendKeys(username);
	driver.findElement(By.xpath(prop.getProperty("password_xpath"))).sendKeys(password);
	
}

@When("^the user clicks on Login button$")
public void the_user_clicks_on_Login_button() throws Throwable {
	driver.findElement(By.xpath(prop.getProperty("loginButton_xpath"))).click();  
}

@Then("^verify the user ([^\\\"]*) is correctly displayed once logged in$")
public void verify_the_user_s_firstname_is_correctly_displayed_once_logged_in(String FirstName) throws Throwable {	
	boolean b=driver.findElement(By.xpath("//h1")).getText().contains(FirstName);	
	Assert.assertEquals(b, true);   
}

@Then("^verify the user ([^\\\"]*) appears under the Allregisteredusers list$")
public void verify_the_user_fullname_appears_under_the_Allregisteredusers_list(String FullName) throws Throwable {

	boolean b=driver.findElement(By.xpath("//li")).getText().contains(FullName);	
	Assert.assertEquals(b, true);  
   
}

@When("^the user clicks on the Register link$")
public void the_user_clicks_on_the_Register_link() throws Throwable {		
	System.out.println("test1");
	driver.findElement(By.xpath(prop.getProperty("registerLink_xpath"))).click();
 
	
}

	

}
