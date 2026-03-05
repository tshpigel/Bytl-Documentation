import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";
import '../App.css'

export default function Main() {
  return (
    <div className="App">
      <Topbar />
      <Outlet />
    </div>
  );
}