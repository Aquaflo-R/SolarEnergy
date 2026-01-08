import windmill1 from "../assets/windmill1.avif";
function Home() {
  return (
    <>
      <main>
        <section id="Hero-Section">
          <div className="relative w-full h-[720px] bg-[url(/src/assets/windmill.avif)] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
            <div
              id="overlay "
              className="absolute inset-0 z-2 w-full h-full bg-[#1111107a]"
            ></div>

            <div className="z-10 text-center px-20 text-white">
              <h1 className="text-6xl">
                Creating a Sustainable Future with Renewable Energy Solutions.
              </h1>
              <h2 className="text-2xl mt-5 px-80">
                Discover the amazing ways solar energy can transform your home
                or business
              </h2>
              <button className="bg-[#C7F43E] py-2 px-5 mt-2 rounded-3xl font-meduim text-xl">
                <i class="ri-arrow-right-fill"></i>Get A free Quote
              </button>
            </div>

            <div className="w-[550px]  h-[180px]  flex gap-2 z-10 mt-10">
              <div
                className="w-full h-full  flex p-2 gap-5 bg-white/15 backdrop-blur-sm 
                    border border-white/25 rounded  "
              >
                <img
                  src={windmill1}
                  alt="img"
                  className="object-cover rounded"
                />
                <div className="">
                  <h1 className="text-2xl text-white">Alternative Energy</h1>
                  <p className="text-white">
                    harnesses the sun's light and heat, converting it into
                    usable power like electricity
                  </p>
                </div>
              </div>
              <div
                className="w-[200px]  h-full bg-white/15 backdrop-blur-sm 
                    border border-white/25 flex items-end p-2 rounded"
              >
                <p className="text-white">
                  Solar energy captures the sun's light and heat, converting it
                  into clean,renewable electricity or thermal energy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
