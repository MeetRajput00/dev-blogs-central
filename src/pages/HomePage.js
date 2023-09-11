import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden min-w-full">
      <Navbar />
      <section className="text-gray-700 body-font max-w-full flex items-center justify-center flex-col h-4/5 bg-white">
        <div className="flex flex-row items-center justify-center p-4 mx-auto md:flex-row w-3/4 h-fit">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 flex flex-col" data-aos="zoom-y-out">Welcome to<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-300">DevBlog Central</span></h1>
            <p className="mb-8 leading-relaxed">
            Are you a passionate developer seeking knowledge, inspiration, and a vibrant community to connect with? Look no further! DevBlog Central is your one-stop destination for all things related to programming, development, and technology.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={require("../assets/logo_illustration.png")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
