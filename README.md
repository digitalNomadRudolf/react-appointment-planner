# Project Description
Focused on deepening my understanding of foundational knowledge in React.

Issues and solutions:
 State variables & function implementation using React Context API. In the Codecademy course the props were passed to the Contacts and Appointments components. But the state was not updating due to the Router constantly re-rendering. This was fixed by using useMemo on the router & using context API to extract the state to be used in any component without passing props.

The use of "useMemo" for creating the router in "App.jsx" is a good practice to optimize performance by memoizing the router configuration.

useCallback is used for the "addContact" and "addAppointment" functions to prevent unnecessary re-creations of these functions on every render.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
