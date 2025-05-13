import { createRoot } from "react-dom/client";
import React from "react";
// import { Route } from "react-router/client";
// import Collections from "./pages/collections";
import AllCollections from "./pages/AllCollections";
const App = () => {
    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Collections</h1>
        <AllCollections/>
        </div>
    )

}

const root = createRoot(document.getElementById("root"));
root.render(<App/>)
