import React from "react";
import ReactDOM from "react-dom/client"; // Import từ react-dom/client cho React 18
import "./index.css"; // Tệp CSS khởi tạo của ứng dụng, có thể chứa các cấu hình chung
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from "./App";

// Thêm các bộ biểu tượng vào thư viện
library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById("root")); // Sử dụng createRoot cho React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
