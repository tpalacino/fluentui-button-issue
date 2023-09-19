import { createRoot } from "react-dom/client";
import { App } from "./pages";
import { initializeIcons } from '@fluentui/react'

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);