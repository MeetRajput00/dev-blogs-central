import LoginComponent from "../components/LoginComponent";
import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden w-full">
      <Navbar />
      <div className="text-gray-700 body-font w-full flex items-center justify-center flex-col h-4/5 bg-white">
        <div className="flex flex-row items-center w-full h-fit justify-center">
          <div className="w-1/4 m-20">
            <img
              alt="hero"
              src={require("../assets/logo_illustration.png")}
            />
          </div>
          <LoginComponent/>
        </div>
      </div>
    </div>
  );
}
