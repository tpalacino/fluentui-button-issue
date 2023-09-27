import { createRoot } from "react-dom/client";
import { App } from "./pages";
// import { initializeIcons } from '@fluentui/react'
/*

Steps to resolve the issue:
    1. Uncomment line 3

*/

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
