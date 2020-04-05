# ITINERARY MAKER AND TRAVEL TRACKER
CCAPDEV1920T2 S12 GROUP 4

This repository contains all source codes to navigate through the whole web application. 
The web application is an itinerary maker in which the user can search for activities and others' itineraries for reference. This application also has a feature as that of a diary in which the user can compile memories of the travels he/she want to compile.

## Contents:

- [controllers](https://github.com/ccapdev1920T2/s12g4/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
- [models](https://github.com/ccapdev1920T2/s12g4/tree/master/models) - This folder contains files for database modeling and access.
- [public](https://github.com/ccapdev1920T2/s12g4/tree/master/public) - This folder contains static assets such as css, js, and image files.
- [routes](https://github.com/ccapdev1920T2/s12g4/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- [views](https://github.com/ccapdev1920T2/s12g4/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
- [add_data.js](https://github.com/ccapdev1920T2/s12g4/blob/master/add_data.js) - This file adds dummy data in the database.
- [delete_data.js](https://github.com/ccapdev1920T2/s12g4/blob/master/delete_data.js) - This file drops all collections in the database.
- [index.js](https://github.com/ccapdev1920T2/s12g4/blob/master/index.js) - The main entry point of the web application.

## Setting-Up:

1. Clone the repository either by downloading the contents of the repository [here](link), or using the command below (Note: git should be installed in your system for this to work).
```
git clone https://github.com/link
```
2. Open Command Prompt
3. Navigate to the project folder - the folder containing the contents of the cloned or downloaded repository.
4. Run the command `npm install` to initialize and install all necessary modules used in the project.

5. We may now run our server. To do this, we run the command `node index.js`. Upon running the command, your Command Prompt should display the following statements:
```
app listening at port 3000
{dummy data added}
```
6. Let's test our web application. Go to the link below to access the web application:
```
http://localhost:3000/
```

In this page, an 'About Us' page would be presented and by clicking on the 'Proceed to Home Page' button you can either login (as an existing user) or register (as a new user) to be able to navigate through the features.

About Us page is still navigable in the home page in the header bar. Once a user logs in, it will no longer be naviagble in the navigation bar.

7. If you want to rerun the application, you have to run the command `node delete_data.js` first and `ctrl + c` afterwards for termination before rerunning `node index.js` to avoid repetition of documents in the database.

## Navigating Features:

1. Register (Optional) - by clicking the 'Register' button, you will be redirected to the registration page and you can register as a user by filling up the registration form and clicking the 'Register' button afterwards. This will then create a new user account that has the inputted details in the registration and you will be redirected to a screen saying 'You have successfully created your account'. Then, click on 'Back to Home Page' to proceed to the login.

2. Login - by clicking the 'Login' button, you will be redirected to the sign in page wherein Username and Password is needed. If you registered as a new user, you may use your registered username and password to login. Otherwise, you may opt to choose from the existing user login details from the dummy data:

| Username          | Password           |
|-------------------|--------------------|
| Tricia            | gandaTricia        |
| Mao               | gandaMao           |
| Rhon              | machoRhon          |
| Vhino             | machoButGanda      |
| Justine           | silentButDeadly    |
| RealJed           | notJedwig          |
| +_xXTalaXx_+      | tamaBaTo           |
|-------------------|--------------------|

3. Dashboard - in the dashboard, all itineraries of existing users are displayed which are clickable for viewing and download sorted by latest date. In this page, all features are now navigable from the navigation bar, search bar, and clickable itineraries.

4. Itinerary Creator - by clicking on 'Itinerary Creator' on the navigation bar, you will be redirected to the itinerary creation page and you can create your own itinerary by filling up the itinerary form. The left form shows the itinerary details form. An auto-generated id can be seen but cannot be modified by the user, this is just for user-reference purposes. In this part, itinerary name, start date, end date, and location shall be filled up.

	--ADDING ACTIVITIES--
	In creating an itinerary, activites can be created by filling up the right side of the form below the 'Add Activities Here' text. 
	1. Activity name is required while all other information are optional. 
	2. To add contact details of the activity, click on 'Add Contact Details' button and fill up the corresponding form. 
	3. To add transportation details of the activity, click on 'Add Transportation Details' button and fill up the corresponding for. 
	4. To add the activity created in the itinerary, click on 'Add Activity' button and see that the activity will be appended to the lower part of the page. 
	5. Repeat these steps until all activities you want are added in the itinerary.

After adding all activities and its details on the itinerary, click on the 'Save Itinerary' button to save the itinerary created on the database and you will be redirected to a page where you can see all your account's past and current itineraries (Refer to My Itineraries feature). Otherwise, click on 'Back to Dashboard' button to cancel the itinerary creation which will redirect you back to the dashboard without saving the itinerary.

5. My Itineraries - by clicking on 'My Itineraries' on the navigation bar, you will be redirected to a page where you can see all your created itineraries and wherein you can create a new itinerary or view, edit, delete, and download a specific itinerary by clicking on its corresponding buttons in the page. 

	--CREATE NEW ITINERARY--
	by clicking on the 'Create New Itinerary Button', it will redirect you to the itinerary creator page.

	--VIEW--
	by clicking on the corresponding 'View' button of the itinerary you wish to view, you will be redirected to a page wherein you can view the details of the itinerary and activites you chose to view. To download the itinerary, click on the 'Download' button. To go back to your itineraries, click on 'Back to Itineraries' button.

	--EDIT--
	by clicking on the corresponding 'Edit' button of the itinerary you wish to edit, you will be redirected to a page wherein you can edit the itinerary details and each activity's details. Update the itinerary information (upper form) by filling up the form to modify it. If you intend to edit some activities as well, do not click on 'Save Itinerary' yet. 
	Updating and deleting of each activity is done individually:
	1. Fill up with new or modified information the row of activity that u want to edit then click on its corresponding 'update' button.
	2. Click on the corresponding 'delete' button of the activity row you wish to delete.
	2. Click on 'Save Itinerary' button to save the changes to your activities and itinerary.

	--DELETE--
	by clicking on the corresponding 'Delete' button of the itinerary you wish to delete, the itinerary together with its corresponding activities will be deleted and will not be anymore accessible in the 'My Itineraries' page.

	--DOWNLOAD--
	by clicking on the corresponding 'Download' button of the itinerary you wish to download, the itinerary together with its corresponding activities will be downloaded such as in 'view' format.

6. Search Itineraries - by typing into the 'Search for Itineraries' search bar a keyword such as itinerary location or itinerary name, you will be redirected to a page showing the itinerary results which are available for viewing and download by clicking on the 'view' or 'download' button corresponding to it.

7. My Past Travels - by clicking on your username in the navigation bar, click on 'My Past Travels' from the dropdown options. This will redirect you to a page where you can see all your created memories and wherein you can create a new memory, search for memories by typing into the search bar beside the 'New Memory' button a keyword such as dates and titles, or edit and delete a specific memory by clicking on its corresponding buttons in the page.

	--NEW MEMORY--
	by clicking on the 'New Memory', you will be redirected to the memory creation page and you can create a memory by filling up the form and optionally add pictures.

		--ADDING PICTURES--
		1. Click on the 'Choose Files' button.
		2. Choose picture that you want to upload.
		3. Picture will be added to your 'Photo Album'

	--EDIT--
	by clicking on the corresponding 'Edit' button of the memory you wish to edit, you will be redirected to a page wherein you can edit the memory details.
	1. Fill up with new or modified information the fields that you wish to edit.
	2. Reupload past photos and upload new photos you wish to add.
	3. Click on 'Save Memory' to save the changes in the edited memory.

	--DELETE--
	by clicking on the corresponding 'Delete' button of the memory you wish to delete, the memory together with its corresponding photos will be deleted and will not be anymore accessible in the 'My Travels' page.

8. Logout - by clicking on your username in the navigation bar, click on 'Logout' from the dropdown options. This will log you out of your account and redirected to a screen saying 'You have successfully logged out'. Click on the 'Back to Home' button to proceed to the Login/Register pag again.
