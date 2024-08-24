# Fertilizer Dashboard Application

Welcome to the Fertilizer Dashboard Application! This project aims to provide an easy-to-use and visually informative dashboard to help a fertilizer company track the availability and requirement of various fertilizers across different states in India throughout the year.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Development Approach](#development-approach)
4. [Component Overview](#component-overview)
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
7. [Getting Started](#getting-started)
8. [Future Enhancements](#future-enhancements)

## Overview

The Fertilizer Dashboard Application is designed to improve supply chain management by displaying fertilizer data in a user-friendly manner. With sortable tables, insightful graphs, and quick access to top-performing fertilizers, this tool helps streamline operations and decision-making.

## Architecture

The application follows a component-based architecture using React.js to ensure modularity, reusability, and easy maintenance. Below is a high-level architecture diagram:

```
| Fertilizer Dashboard |
+---------------------------------------------------+
| +------------------+ +------------------------+ |
| | Navbar | | Top Bar | |
| +------------------+ +------------------------+ |
| +------------------------------------------------+|
| | ||
| | Main Content ||
| | +-----------------+ +------------------------+||
| | | Fertilizers | | Tab Section |||
| | | (Top 5 & Least | | +--------------------+ |||
| | | 5 Row) | | | Table/Chart | |||
| | +-----------------+ | +--------------------+ |||
| +------------------------------------------------+|
+---------------------------------------------------+
```

## Development Approach

### 1. **Planning and Requirements**

- Define the main goals and features: displaying tables and charts for fertilizer data, top 5 fertilizers by requirement, and least 5 by availability.
- Ensure responsive design for both desktop and mobile users.

### 2. **Component Design**

- **App Component**: Manages overall layout and state.
- **Navbar**: Navigation across different sections.
- **TopFertilizers**: Displays top and least fertilizers.
- **Table**: Provides a sortable and filterable data grid.
- **Chart**: Visualizes fertilizer data trends.

### 3. **State Management**

- Use React state management to handle active tab states and data filtering dynamically.

### 4. **Styling and Responsiveness**

- Utilize CSS Flexbox and Grid for a responsive and clean layout.
- Ensure the application adapts seamlessly to various screen sizes, enhancing usability on both mobile and desktop devices.

### 5. **Testing and Deployment**

- Implement unit tests for all components to ensure functionality.
- Deploy using modern platforms like Vercel or Netlify.

## Component Overview

### 1. **App Component**

- Entry point for the application, coordinating layout and state.

### 2. **Navbar**

- Fixed top navigation for easy access to different sections.

### 3. **TopFertilizers**

- Shows the top 5 fertilizers in demand and the 5 with the least availability side-by-side.

### 4. **Table**

- Displays detailed fertilizer data with advanced sorting and filtering using `ag-grid-react`.

### 5. **Chart**

- Visualizes fertilizer availability and requirements over time using `Recharts`.

## Technologies Used

- **React.js**: Core framework for building the UI.
- **React Testing Library & Jest**: For unit and integration testing.
- **CSS Flexbox and Grid**: For responsive design.
- **ag-Grid**: For advanced table functionalities.
- **Recharts**: For data visualization.

## Testing

### Strategy

- **Unit Tests**: Ensure each component renders correctly and functions as expected.
- **Integration Tests**: Verify that components interact correctly, especially during state changes like switching tabs.

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Getting Started

Follow these steps to set up the Fertilizer Dashboard Application locally:

### Clone the Repository:

```bash
git clone <repository-url>
cd fertilizer-dashboard
```

### Install Dependencies:

```bash
npm install
```

### Run the Application:

```bash
npm start
```

### Run Tests:

```bash
npm test
```

## Setup and Installation

### Prerequisites

**Node.js**: Ensure you have Node.js installed (version 12 or later).
npm: Node Package Manager is included with Node.js, used for managing dependencies.
Installation Steps
Clone the Project:
Clone the repository to your local machine using the provided URL.

### Navigate to Project Directory:

Open a terminal and navigate to the project's directory.

### Install Dependencies:

Run npm install to install all required dependencies.

### Start the Development Server:

Use npm start to run the application in development mode. Open http://localhost:3000 to view it in your browser.

### Run Unit Tests:

Run npm test to execute unit tests and ensure everything is working correctly.

## Future Enhancements

Real-Time Data Fetching: Integrate with an API for real-time updates and more dynamic data handling.
User Authentication: Add authentication and authorization features to secure data and personalize user experiences.
Advanced Analytics: Implement more detailed analytics and forecasting based on historical data trends to provide actionable insights.
Localization: Introduce support for multiple languages to cater to a wider audience.
Accessibility Improvements: Enhance accessibility features to ensure the application is usable by everyone, including those with disabilities.
