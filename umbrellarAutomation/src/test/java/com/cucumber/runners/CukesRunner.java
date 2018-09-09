package com.cucumber.runners;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;
 
	@CucumberOptions(
			
	plugin= {"html:target/reports/cucumber-html-report",	
			 "json:target/reports/cucumber.json",
			 "junit:target/reports/cucumber-results.xml",
	         "pretty:target/reports/cucumber-pretty.txt"},
	
	features= {"src/test/resources/features/"},
	glue= {"com.cucumber.stepdefinitions"}		
			
	)
	
public class CukesRunner extends AbstractTestNGCucumberTests{
}
