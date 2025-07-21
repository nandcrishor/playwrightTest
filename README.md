this project is to automate https://demoqa.com/automation-practice-form
Objective: 
Automate the entire flow of filling and submitting the "Student Registration Form" using Playwright with dynamic test data,and validate the submitted information in the confirmation modal. 
✅ Functional Steps: 
Navigate to the form at https://demoqa.com/automation-practice-form 
Pre-clean the page: 
Remove footer and ad banners via script or scroll (optional but recommended) 
Fill the form using dynamically generated data:
First Name, Last Name, Email 
Select Gender (randomly pick one) 
Phone Number (10-digit) 

Date of Birth: 20 April 1990

Subject: Type and select Maths 

Hobbies: Select multiple (e.g., Sports and Reading) 

Upload a file (provide a test image in project) 

Current Address 

State: NCR, City: Delhi 

Click Submit 

Validate Submission Modal: 

Ensure modal title is Thanks for submitting the form 

Verify submitted values match the filled data 

Log all values from the confirmation table 

Close the modal 

 

 

 

⚙️ Technical Requirements: 

Use Page Object Model (POM) structure 

Use faker.js or similar to generate input data 

Include screenshot on test failure 

Use a custom wait strategy (no hard waitForTimeout) 

Test should be cross-browser capable (Chrome, Firefox) 

Run in parallel execution 

Generate HTML test report 

Implement a data-driven test 

 

📁 Deliverables: 

Source code in GitHub repo 

README with setup & execution instructions 

Sample test report 

Screenshot from one successful run 
