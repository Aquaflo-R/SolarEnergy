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
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
