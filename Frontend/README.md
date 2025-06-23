# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Workspace Context

This workspace contains the `Frontend` directory, which includes the client-side code for the application.

### Frontend
The `Frontend` directory contains the client-side code for the application. It includes:
- `src/`: Contains the main source code for the React application.
  - `App.jsx`: The main application component.
  - `main.jsx`: The entry point for rendering the React application.
  - `pages/`: Contains React components for different pages like `Home`, `UserLogin`, `UserSignup`, `CaptainLogin`, and `CaptainSignup`.
  - `assets/`: Contains static assets like images and icons.
- `public/`: Contains public files like `index.html` and other assets.
- Configuration files like `eslint.config.js` and `vite.config.js` for project setup.

## Notes

### App.jsx
- This file serves as the main application component.
- It defines routes for different pages using `react-router-dom`.
- Pages included are `Home`, `UserLogin`, `UserSignup`, `CaptainLogin`, and `CaptainSignup`.

### main.jsx
- This file is the entry point for rendering the React application.
- It wraps the `App` component with `BrowserRouter` for routing.
- Uses `StrictMode` for highlighting potential issues in the application.

### pages/Home.jsx
- This file defines the `Home` page component.
- Includes a background image and a link to the login page.
- Uses `react-router-dom` for navigation.

### pages/UserLogin.jsx
- This file defines the `UserLogin` page component.
- Includes a login form with fields for email and password.
- Provides a link to the signup page for new users.
- Includes a button for logging in as a captain.

### pages/UserSignup.jsx
- This file defines the `UserSignup` page component.
- Currently contains a placeholder text "Sign up".
- Can be expanded to include a signup form for new users.

### assets/
- This directory contains static assets like images and icons used in the application.
- Assets are organized in subdirectories by type, such as `images/` and `icons/`.

### public/
- This directory contains public files that are served directly by the web server.
- The `index.html` file is the main HTML file for the application.
- Other assets in this directory are referenced by the application but are not processed by Vite.
