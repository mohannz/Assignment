package com.cucumber.stepdefinitions;

import org.openqa.selenium.By;
import org.testng.Assert;
import com.umbrellar.qa.base.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationPageStepDefinition extends TestBase {
	
	RegistrationPageStepDefinition rs;	
	public RegistrationPageStepDefinition() {		
	super();		
	}	
	
	@When("^the user enters the ([^\\\"]*) in the FirstName Field$")
	public void the_user_enters_the_FirstName_in_the_FirstName_Field(String FirstName) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("firstName_Xpath"))).sendKeys(FirstName);
	}

	@When("^the user enters the ([^\\\"]*) in the LastName Field$")
	public void the_user_enters_the_LastName_in_the_LastName_Field(String LastName) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("lastName_Xpath"))).sendKeys(LastName);

	}

	@When("^the user enters the ([^\\\"]*) in the UserName Field$")
	public void the_user_enters_the_UserName_in_the_UserName_Field(String UserName) throws Throwable {    
		driver.findElement(By.xpath(prop.getProperty("userName_xpath"))).sendKeys(UserName);
		
	}

	@When("^the user enters the ([^\\\"]*) in the Password Field$")
	public void the_user_enters_the_Password_in_the_Password_Field(String Password) throws Throwable {		
		driver.findElement(By.xpath(prop.getProperty("password_xpath"))).sendKeys(Password);	
	}

	@When("^the user clicks on Register button$")
	public void the_user_clicks_on_Register_button() throws Throwable {		
		driver.findElement(By.xpath(prop.getProperty("registerButton_xpath"))).click();
	}

	@Then("^the user verify the Registration$")
	public void the_user_verify_the_Registration() throws Throwable {	    
		Thread.sleep(2000);		
		String success_text=driver.findElement(By.xpath(prop.getProperty("registrationSuccess_Xpath"))).getText();			
		Assert.assertEquals(success_text,"Registration successful");
	
	}

}
