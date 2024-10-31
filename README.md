# Animations Homework

This project demonstrates various animations and interactive elements using HTML, CSS, and JavaScript. The project includes smooth scrolling, a "Scroll to Top" button, and animated elements on different pages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alashchev17/animations-homework.git
   ```
2. Navigate to the project directory:
   ```bash
   cd animations-homework
   ```

## Usage

1. Open the `index.html` file in your web browser to view the project.

## Features

### Smooth Scrolling

The project includes smooth scrolling behavior for anchor links. When you click on a navigation link, the page will smoothly scroll to the corresponding section.

### Scroll to Top Button

A "Scroll to Top" button appears when you scroll down the page. Clicking this button will smoothly scroll the page back to the top.

### First Page: Title Fade In

The first page includes a `<h1>` element with a fade-in animation. The title fades in over 1.5 seconds when the page loads.

### Second Page: Bobbing Image

The second page includes an image with an infinite bobbing animation. The image moves up and down continuously.

### Third Page: Amazing Circle

The third page includes a circular `<div>` that animates around the page. A button is provided to start and stop the animation. The button text changes based on the current animation state.

## Code Explanation

### JavaScript

The `index.js` file contains the following functionality:

- **Smooth Scrolling**: Adds click event listeners to anchor links to smoothly scroll to the target section.
- **Scroll to Top Button**: Shows or hides the "Scroll to Top" button based on the scroll position and smoothly scrolls to the top when clicked.
- **Toggle Animation**: Toggles the animation state of the amazing circle and updates the button text accordingly.

### CSS

The `styles.css` file contains the following styles:

- **Smooth Scrolling**: Ensures smooth scrolling behavior.
- **Scroll to Top Button**: Styles the "Scroll to Top" button and adds transition effects.
- **Title Fade In**: Adds a fade-in animation to the `<h1>` element on the first page.
- **Bobbing Image**: Adds an infinite bobbing animation to the image on the second page.
- **Amazing Circle**: Styles the circular `<div>` and adds an animation that moves it around the page.

### HTML

The `index.html` file contains the structure of the web page, including navigation links, sections for each page, and the "Scroll to Top" button.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
