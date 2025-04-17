# Muhammad Moosa Khalil - Portfolio

A professional portfolio website showcasing skills, projects, and contact information.

## Features

- Modern UI with 3D elements and animations
- Responsive design that works on all devices
- Sections for About, Skills, Projects, and Contact
- Interactive 3D elements using Three.js
- Smooth animations with Framer Motion
- Contact form functionality

## Technologies Used

- React.js
- Tailwind CSS
- Three.js with React Three Fiber
- Framer Motion for animations
- React Router
- EmailJS (commented implementation)

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app will open in your browser at http://localhost:3000.

## Customizing the Portfolio

### Personal Information

Edit the `src/constants/index.js` file to update your:
- Personal information
- Skills
- Projects
- Education history

### Styling

The project uses Tailwind CSS for styling. You can customize colors and other design elements in the `tailwind.config.js` file.

### 3D Models

The 3D elements are created using Three.js and React Three Fiber. You can customize them in the `src/components/canvas` directory.

## Deployment

To build the app for production:

```bash
npm run build
```

This will create a `build` folder with all the optimized files ready for deployment.

## License

This project is open source and available for anyone to use and modify.

## Acknowledgments

- Three.js for 3D graphics
- React Three Fiber for 3D integration with React
- Framer Motion for animations
- Tailwind CSS for styling
