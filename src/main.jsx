import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Import store
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);





// The Provider component from react-redux makes the store available to all components.

// Now, any component can read from Redux state using useSelector() and update state using useDispatch().