# Project Overview -  [BookUsNow](https://saptarshi1211mondal.github.io/BookUsNow/)

This project is a website designed to showcase upcoming and recommended events. It utilizes APIs to fetch event data and presents it in a user-friendly and responsive manner. The design focuses on clean aesthetics and optimal performance to provide a seamless experience for users across desktop and mobile devices.

* [Desktop Video](https://drive.google.com/file/d/1MyRvMyiM9f4VE0kAziDlUIGARb0jFoL4/view?usp=sharing)
* [Mobile Video](https://drive.google.com/file/d/1JrJmJ8TLFJxf5quRM3GDYB4Qy7Rz4Psl/view?usp=sharing) 

# Setup and Local Run Instructions

To run this project locally, follow these steps:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   
2. Navigate to the project directory:
   ```bash
   cd your-repository

3. Install the necessary dependencies using npm:
   ```bash
   npm install
    
4. Start the development server:
   ```bash
   npm start
5. Open your web browser and visit http://localhost:3000 to view the website locally.

# Design and Technical Decisions
* Font and Color Scheme
* Font: Inter
* Heading Font Color: #1E2022
* Subtitle Font Color: #989090
* Background Color: #ffffff
* Logo Color: #CF2D2D
* Stroke/Border Color: #B0BABF

# API Integration
The website effectively fetches event data from the provided REST API endpoints and displays it in the appropriate sections (upcoming and recommended events).
  * **Recommended shows:** https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco
    
  * **Upcoming events:** https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming


# Responsiveness
The website is designed to be fully responsive, ensuring a consistent and enjoyable user experience across various screen sizes and devices.

# Horizontal Scrolling
Recommended events are presented in a horizontal scrollable format, allowing users to easily browse through them.

# Lazy Loading
For upcoming events, lazy loading is implemented to fetch data page by page. The next page of events is fetched from the API only when the user scrolls to the end of the page, improving performance and user interaction.

# Performance Optimization
Several optimization techniques are employed to ensure fast loading times, including minification of assets, image optimization, and caching strategies.

# Code Quality
The codebase is organized, well-structured, and thoroughly documented to maintain cleanliness and readability. Comments and clear naming conventions are used throughout the codebase to enhance understanding and maintainability.
For a live demonstration of the website, please visit Live Site [click me](https://saptarshi1211mondal.github.io/BookUsNow/)

If you have any questions or feedback, feel free to reach out to [saptarishimondal@gmail.com].



# Mobile Video
[mobileVideo.webm](https://github.com/saptarshi1211mondal/BookUsNow/assets/70250497/d4288add-45e3-4a1d-befa-8a50ed5ff183)


# Desktop Video
[laptop.webm](https://github.com/saptarshi1211mondal/BookUsNow/assets/70250497/fbada30d-0d18-4a09-ad32-e884c15815ec)

# Screenshots 

![small screen](https://github.com/saptarshi1211mondal/BookUsNow/assets/70250497/f3085c45-7c1c-442a-b5e4-505aa8327454)

![medium screen](https://github.com/saptarshi1211mondal/BookUsNow/assets/70250497/f5e125cd-a997-498f-9c62-52d87e6af3b2)

![large screen](https://github.com/saptarshi1211mondal/BookUsNow/assets/70250497/363feda3-2c22-4ddb-9435-f5fdaedb0de5)
