# Disc Golf Website (MERN)

## Objective

The objective of this website is to create a community aurond each disc golf course. As the sport grows it is important to create a captivating an inviting experience so that everybody feels welcome as they embark of their Disc Golf journey. The website will also give a in-depth look at the course which includes; Park/Course Information, Layout information, and hole information. This website will dive into the course a little bit more and include a photo of each T-pad, a video of the hole, and two different routes that are usually taken by locals. 

Since disc golf is run by local leaders that put time and effort into their courses, it is important to provide tools that allows them to enhance their outreach with ease. The website will allow leaders to post weekly tournaments and league play. Since usually admin's run handicaps off of paper or an excel spreadsheet, I wanted to provide an automated system to apply handicaps based on the previous tournament play. This will allow admins to place more effort into the growth of the community and the maintenance of the course. 

## Types of Users

###### **Admin** 
Create, Update, Delete Course information ,  
Create Update Delete Layout information, 
Create Update Delete Hole Information, 
Create Update Delete Route Information, 
Create Update Delete Announcements/ Events
Delete Reviews 
Delete Play Date Comments 

###### **Non-Members****
Non-members are users that do not have a U-disc account. They will be able to view all pages. They will not be able to interact with the comments section or the Play Date Section. 

###### **Members**
Create Comments 
Create Play Date Comment 

Members will have the ability to view all pages. Since they are not the admin they will not have any Create, Update or Delete Functionality. They will be able to interact (Post) in the review section and Play Date Section on the home page.

# Component/ Webpage Layout

## Home page - https://adoring-pasteur-eb67f4.netlify.app/

###### Navigation Bar
The Nab bar will provide a way for the user to interact with the website. It will hold 5 different titles that each do something different. The titles will be presented from left to right (top to bottom)

U-Disc Logo - This will bring you back to the homepage if clicked, if you are on the home page it will bring you to the top of the page. 

Course Information - This will be an auto scroll, the contents of the course information is below the hero. If the course information button is pressed it will scroll to the second component that displays the information. 

Layout - The layout link will render a different page. It will bring up the layout contents. *To see more view the layout page information. 

Products - The products page is a prototype page that will connect disc venders with local communities so that they can create their own disc with a logo of their choosing. As more disc venders are created it is important they they are supported by local communities. 

Login - If a user is already a member they will be able to login.

# Hero Section
The Hero section will contain a static picture background. This will be the initial view of the park. This section will also contain contents such as, Park Title, Park City Location and two buttons. 

Sign-Up button - The left button will be a Sign up button that will link to a sign-up page. 

View Trailer- This button will be linked to a trailer that will show a flying view of the course. Either the button will pull up a modal or it will render the video inside the hero section. Once the trailer is done or the user clicks off, the contents will re-appear in the section 

# Park Information Section
This section will be split into two sections. The left side section will display the course information (below) while the other side will display the google maps API of the course location. The map will be a high level overview of the location. 

## **Information**
- Course Name : Name 
- Course Condition : Good Condition, Moderate Condition, Bad Conditions 
- Park location: City 
- Holes: Number of holes at park
- Services: Dog Friendly, Cart Friendly, 
- Established: Year 
- Property : Type of park, Mixed Use
- Tee's: (Dirt, Cement, Gravel,) 
- Availability: Time frame in which the park is open 
- Targets: Types of Baskets. 
- Map View - Right Side
- Park Photo: Google Map API

# Events And Announcements
This section will allow the admin to display events and create announcements. Each event will have its own Section, the section on the homepage will be a call for action. If the user selects on the event it will pop up a modal that will display more information about that specific event. Since the events do not have sign ups they will not need any more functionality than a display feature. 

## **Modal Home**
- Photo - Hopefully a photo of people in prior events
- Event Title - Includes day (Saturday Weekly Tournament)
- Small Event Description - This will display a small sentence that provides a high level overview of the Event
- Event Highlight - This will display the type of event (Handicap Round, Doubles Best Throw, Raw Scores, Rated Round)

## **Modal**
Once the user clicks on the Event call to action it will display a more thorough events page that includes information:

## **Event Title** 
- Title 
- Contact - Admin Information if they would like it to be displayed
- Day of the Week: Day or Days 
- Start Format - Shotgun, Flex
- Start Time : Specific time 
- Play Format - Singles / Doubles 
- Members - Total Number of members 
- Admins - Names of Admins 

# Park/Course Reviews
This will allow members (not non-members) to comment and rate the specific course 

# Play Date
This section will allow members(not non-members) to post a specific time that day that they will be playing on a specific day so that other player can meet up with them. This is useful for tournaments in which a card of at least 3 people is needed in order to play. This is also useful for single players that want to expand their friendships within the community and want other to play with. 


# Layout / Hole Page - wwww.chabotpark.com/:id
The layout page will be the most dynamic page of the entire website. I will contain the most in-depth view of each layout and specific hole. All the components will interact with each other so that it creates a congruent view in which viewers can encompasses all that the course has to offer. 

## Layout Information
This section will be spit up into two sections. The first section will display the all the layout information and the second section will contain the Google Maps API 

- Layout
- Layout title 
- Total Par 
- Total Holes 
- Total Feet 

*All Hole Details - with included details such as specific hole number, Par and Feet.  
*The hole number will be be a link that will be linked to both the bottom hole information (bottom component) and the google maps API. When the user clicks on a specific hole it will rotate the map to show the specific hole on the google maps API and it will also render the specific hole data. 

## Google Maps API - Satellite View
The Default map view will be a high level overview of the entire course. It will show Tee Pad and Pin locations. When a specific hole is selected it will rotate the API to show a specific view of that hole. 

## Hole Information
The default view for the hole page will be Hole 1. When a hole is selected from the information section it will render the content of that specific hole in this area.  This section will be slit up into two section. A picture view (Right) and all the hole information (left). In the left hand section at the bottom it will have a view video button that will allow the user to view a flying preview of that specific hole. 

## Picture Section
Picture of the Hole from the Tee Pad to the basket ( if possible). On the picture it will have a white line to show the end of the Tee Pad and a color triangle (based on course requirements) that shows the whereabout of the basket. If the basket is not in sight it can show a specific arrow that will show the general direction of the basket


### Hole Information Section
The Hole information will display the in-depth data for that specific hole 

- Hole Number 
- Par Number 
- Feet Number 
- Mando's - This will display mandatory information based on layout requirements. 
- Out of Bounds - This will display out of bounds information based on layout requirements
- View Video - This video button will show a flying view of the specific hole. This will either render on top of the picture section or pull up a modal that will show a video. 
- Forehand Route Video- This video button will show Forehand throw which is a palms up throw 
- Backhand Route Video - This video button will show Backhand throw which is a palms down throw


# Admin Dashboard
The admin dashboard will be the place where all information will be created, edited, updated or deleted. 

- Sidebar - This will have the various components Listed Below 
- Park Information - Edit / Update 
- Layout Information - Create / Edit / Update / Archive
- Event/ Announcement  Create / Edit / Update / Archive
- Handicap - This section is to help Admin's automate handicap rounds. This will take into consideration the first two establishing rounds. 

A player must play 6 tournaments in total before their handicap score is updated. Once they have played 6 tournaments the lowest score is dropped  and the remaining scores are used as a sum for their handicap score. This handicap score will be utilized with their raw scores to create the winners of the tournament. 

## **Park Information - Create, Update, Delete**
- Course Name 
- Course Condition
- Park location
- Holes
- Services
- Established
- Property 
- Tee's
- Availability
- Targets

## **Layout Information - Create / Edit / Update / Archive**
- Layout title 
- Total Par 
- Total Holes 
- Total Feet 

*All Hole Details - with included details such as specific hole number, Par and Feet.  

## **Event/ Announcement  Create / Edit / Update / Archive**
- Event Title 
- Contact 
- Day of the Week
- Start Format
- Start Time 
- Play Format
- Members
- Admins
- Handicap - Create, Edit, Archive - 2 Options 

Create Fake API with Sample Data 
or 
Scrape The U-Disc Website and utilize their data.

# Technologies
- Yarn
- Node.js
- Express
- MongoDB
- React.js
- Google-Maps-React

**WireFrames**

-[DG-HeroSection](https://i.imgur.com/ZTjjhsp.jpg)

-[DG-CourseInformation](https://i.imgur.com/0pesm2v.jpg)

-[DG-CourseReview](https://i.imgur.com/w51XLM5.jpg)

-[DG-LayoutSection](https://i.imgur.com/1hzxHmx.jpg)

-[DG-HoleSection](https://i.imgur.com/NaMztwH.jpg)
