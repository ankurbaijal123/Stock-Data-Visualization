# Stock Data Visualization📈📈📉📉
This project provides a web-based interface for visualizing stock data for various companies. Users can select companies, view their stock data in a chart, and download the chart as an image. The application is designed to be user-friendly and responsive, ensuring a smooth experience across various devices.


### Features

- **Company Selection**: A list of companies from which users can select.
- **Dynamic Charting**: Displays stock data in a line chart, allowing users to select different metrics to visualize.
- **Download Chart**: Users can download the displayed chart as a PNG image.
- **Search Functionality**: Users can filter the list of companies using a search input.
- **Responsive Design**: The interface adjusts gracefully to various screen sizes and animation is added when chart loads.

### Technologies Used📈📈📉📉

- **HTML**: Structure of the web application.
- **CSS**: Styling of the application.
- **JavaScript**: Functionality and interactivity of the application.
- **Chart.js**: Library for rendering charts.
- **Bootstrap**: Framework for responsive design and UI components.

### Images of the Project
![image](https://github.com/user-attachments/assets/61594956-85c7-4541-a22d-bf5f4be53f52)
![image](https://github.com/user-attachments/assets/1c3dadf9-d583-461e-90c6-7eafaf0d8ec5)
![image](https://github.com/user-attachments/assets/a261f8a6-7f39-4a34-bd34-a96bb388532f)

### Setup Instructions

Follow the steps below to set up the project locally:

### 1. Clone the Repository
Open your terminal and run the following commands:
```git clone https://github.com/ankurbaijal123/Stock-Data-Visualization.git```
```cd Stock-Data-Visualization```

### 2.Frontend Setup Instructions

  1. **Ensure Node.js is Installed**:
     Make sure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

  2. **Navigate to Your Project Directory**:
     Open your terminal and navigate to your project directory:

     ```cd Stock-Data-Visualization```
     ```npm install```

### 3. Backend Setup Instructions

  1. **Ensure Node.js is Installed**:
     Make sure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

  2. **Navigate to Your Project Directory**:
     Open your terminal and navigate to your project directory:

     ```bash```
     ```cd Stock-Data-Visualization```
   
     Initialize a New Node.js Project: If you haven't already set up a Node.js project, run the following command to create a package.json file:
     ```npm init -y```
     Install Necessary Dependencies: Install the required packages. You may need packages such as Express (for creating the server) and any others for handling your data (like axios for fetching data or mongoose for MongoDB if you're using a database). Here’s an example of installing Express:
   
     ```npm install express cors body-parser```

### 4. Project Structure
/project-root
    /frontend
        - index.html
        - styles.css
        - script.js
    /backend
        - server.js
    /data
        - dump.csv
    - package.json

### 5. Open the Project
Open the index.html file in your web browser to view the application. You can do this by either double-clicking on the file or running:
```start index.html```  # For Windows

### 6.Usage
Company List: The left side of the interface displays a list of companies. Click on a company name to load its stock data.
Chart Display: The right side shows a chart of the selected company's stock data. Users can select different metrics from the dropdown menu to change what data is displayed.
Download Button: Below the chart, there is a button to download the chart as a PNG image.
Search Functionality: Users can type in the search box to filter the list of companies based on their input.

### 7.Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

### 8.License
This project is licensed under the MIT License. See the LICENSE file for details.

### 9.Acknowledgments
Special thanks to the developers of Chart.js for their amazing charting library.
Thanks to Bootstrap for providing a responsive framework to enhance the user interface.
Thanks to Shakti D. for giving me this Project as Assignment that's why i got this opportunity to make this Project.

### 10. Video of the Project
https://drive.google.com/file/d/1JcCgEZsfUWp6B-dnuzGkPS8sUed_OIdD/view?usp=sharing

### 11. Future Advancements

The Stock Data Visualization project has several avenues for enhancement and growth. Below are some ideas for future advancements:

1. **Enhanced Data Filtering**:
   - Implement advanced filtering options that allow users to filter stock data based on date ranges, price ranges, and more.

2. **User Accounts and Personalization**:
   - Add user authentication to enable users to create accounts and save their favorite companies or metrics for quick access in the future.

3. **Additional Data Visualization Types**:
   - Introduce more chart types (e.g., bar charts, pie charts) to allow users to visualize stock data in various formats.

4. **Mobile Application Development**:
   - Develop a mobile version of the application or a dedicated mobile app to improve accessibility and user experience on mobile devices.

These advancements can help enhance the application's functionality, improve user experience, and expand its audience.



