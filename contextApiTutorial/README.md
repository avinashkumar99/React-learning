# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. What is Context API?
   The Context API is a React feature that allows you to manage global state and share it between components without the need to pass props through multiple levels of the component tree.

2. When to Use Context API?
   a) Sharing data like the authenticated user, theme, or preferred language.
   b) Avoiding "prop drilling" (passing props through many levels).

3. Basic Workflow
   Create a Context: A context is a container to hold and provide the state/data.
   Provide Context Value: Use the Provider to make state accessible to any component in the tree.
   Consume Context Value: Use the useContext hook to access the context in a child component.
