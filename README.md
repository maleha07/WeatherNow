#Weather Now 🌤️
Weather Now is a simple, real-time weather app that displays the current temperature and weather condition for any city. This project is built using React and fetches data from the Open-Meteo API to deliver up-to-date weather information based on user-input city names.

#Features
Real-Time Weather Data: Fetches the current temperature and condition for a user-specified city.
Error Handling: Notifies the user if an invalid city name is entered.
Dynamic UI: Displays weather data in a clean and responsive layout with weather-based color themes.
Demo
<!-- Replace with actual path to a screenshot -->

#Tech Stack
Framework: React
API: Open-Meteo API for weather data, OpenCage Geocoding API for city-to-coordinates conversion
Styling: Plain CSS with responsive design
Installation
Follow these steps to set up and run the project locally:

#Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-now.git
cd weather-now
Install dependencies:

bash
Copy code
npm install
API Key Setup:

Register at OpenCage to get a free API key for geocoding.
In the project’s root directory, create a .env file.
Add your API key in the .env file:
env
Copy code
REACT_APP_OPENCAGE_API_KEY=YOUR_OPENCAGE_API_KEY
#Start the app:

bash
Copy code
npm start
Access the app:

Open http://localhost:3000 in your browser.
Usage
Enter a city name in the input field.
Click "Get Weather" to fetch real-time weather information.
View the current temperature and weather conditions displayed in a styled card.
Project Structure
plaintext
Copy code
├── src
│   ├── App.js          # Main component
│   ├── App.css         # Styling for the app
│   ├── index.js        # Entry point
│   └── components      # Any additional UI components
├── .env                # API key (do not share publicly)
├── README.md           # Project documentation
└── package.json        # Project metadata and dependencies
#Key Files
App.js: Contains the main logic for fetching and displaying weather data.
App.css: Contains styling for the app, including weather-based themes and responsive design.
API References
OpenCage Geocoding API: Used to convert city names into latitude and longitude.
Open-Meteo API: Provides real-time weather data.
Contributing
Contributions are welcome! To contribute:

#Fork the project.
Create a new branch for your feature (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add a new feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
License
This project is licensed under the MIT License. See LICENSE for more information.

#Acknowledgments
Thanks to OpenCage and Open-Meteo for providing free APIs.
Special thanks to ChatGPT for support during development.
