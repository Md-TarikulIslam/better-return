import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

function App() {
  return (
    <div className="bg-[#edf2f8]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
