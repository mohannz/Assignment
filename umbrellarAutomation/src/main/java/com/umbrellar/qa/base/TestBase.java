package com.umbrellar.qa.base;


import java.io.FileInputStream;
import java.util.Properties;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.ProfilesIni;
import cucumber.api.Scenario;

public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	
public TestBase() {		
		try{			
			prop=new Properties();			
			FileInputStream ip=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\umbrellar\\qa\\config\\config.properties");
			prop.load(ip);			
		}catch(Exception e) {			
			e.printStackTrace();			
		}		
	}


public void initialization() {	
	System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\src\\main\\resources\\drivers\\geckodriver.exe");
    ProfilesIni prof=new ProfilesIni();
	FirefoxProfile seleniumProfile=prof.getProfile("Automation");	
	FirefoxOptions options = new FirefoxOptions();
	options.setProfile(seleniumProfile);	
	options.setCapability(FirefoxOptions.FIREFOX_OPTIONS,options);	
	 driver =new FirefoxDriver(options);

}


public void shutDown(Scenario scenario) {	
	if(scenario.isFailed()) {		
		scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES),"image/png");
	}	
	driver.quit();
}



}
