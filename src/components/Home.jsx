import windmill1 from "../assets/windmill1.avif";
import windmill2 from "../assets/windmill2.avif";
import logo from "../assets/Logos.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  let tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(".heroText", {
      y: -30,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
    });
    gsap.to(".heroBtn", {
      y: 10,
      opacity: 1,
      duration: 1,
    });

    gsap.from("#windmillLeft", {
      x: -500,
      duration: 2,
      ease: "expo.out",
    });

    gsap.from("#windmillRight", {
      x: 500,
      duration: 2,
      ease: "expo.out",
    });

    gsap.from("#circle", {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "none",
    });
  }, []);

  const serviceContainer = [
    {
      name: "Residential Solar",
      img: "https://images.unsplash.com/photo-1538309639218-3432f79e0894?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hydropower System",
      img: "https://images.unsplash.com/photo-1589726096666-8bb135284e21?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wind Turbine",
      img: "https://images.unsplash.com/photo-1620415629284-975004d37752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <main>
        <section id="Hero-Section">
          <div className="relative w-full h-180 bg-[url(/src/assets/windmill.avif)] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
            <div
              id="overlay "
              className="absolute inset-0 z-2 w-full h-full bg-[#1111107a]"
            ></div>

            <div className="z-10 text-center px-20 text-white">
              <h1 className="text-6xl heroText">
                Creating a Sustainable Future with Renewable Energy Solutions.
              </h1>
              <h2 className="text-2xl mt-5 px-80 heroText">
                Discover the amazing ways solar energy can transform your home
                or business
              </h2>
              <button className="bg-[#C7F43E] py-2 px-5 mt-2 rounded-3xl font-meduim text-xl heroBtn">
                <i class="ri-arrow-right-fill"></i>Get A free Quote
              </button>
            </div>

            <div className="w-137.5  h-45  flex gap-2 z-10 mt-10">
              <div
                id="windmillLeft"
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
                id="windmillRight"
                className="w-50  h-full bg-white/15 backdrop-blur-sm 
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

        <section id="About-Us" className="w-full h-screen flex relative">
          <div id="aboutUsText" className="w-[40%] p-10">
            <h3 className="text-[#001A00] font-bold bg-[#F2F2F2] inline-block py-2 px-5 rounded-4xl mt-5">
              About us
            </h3>
            <h1 className="text-4xl font-bold text-[#004700] mt-20">
              The Green Power
            </h1>
            <p className="text-xl mt-5">
              The Green Power is our commitment to a cleaner, smarter, and more
              sustainable future. We believe energy should not harm the planet —
              it should protect it. By using solar and renewable solutions, we
              help homes and businesses reduce carbon emissions, lower
              electricity costs, and move towards energy independence. Our
              systems are designed to deliver maximum efficiency while
              respecting nature.<br></br>
              <br></br> We don’t just generate power — we generate impact.
            </p>
            <button className="bg-[#C7F43E] text-[#001A00] py-2 px-5 rounded-4xl mt-5">
              Learn More
            </button>
          </div>

          {/* right-Section */}
          <div
            id="aboutUsImg"
            className="relative flex flex-col justify-center ml-40"
          >
            <img
              src={windmill2}
              alt=""
              className="w-full h-[80%] object-cover rounded"
            />
            {/* absolute Value */}
            <div
              className="absolute w-3xs bg-[#C7F43E]/40 backdrop-blur-md 
                    border border-white/25 rounded p-2  left-2/2 bottom-25 -translate-x-1/2"
            >
              <h1 className="text-2xl text-[#001A00] font-bold ">
                05+
                <span className="text-xl text-[#001A00] font-medium">
                  Experience
                </span>
              </h1>
              <p className="text-[#001A00] text-sm mt-2">
                hands-on experience delivering efficient and eco-friendly solar
                energy solutions for a sustainable tomorrow
              </p>
            </div>
            <div
              className="absolute w-3xs bg-[#C7F43E]/40 backdrop-blur-md 
                    border border-white/25 rounded p-2  left-85 top-30"
            >
              <h1 className="text-2xl text-[#001A00] font-bold ">
                87%
                <span className="text-xl text-[#001A00] font-medium">
                  Success
                </span>
              </h1>
              <p className="text-[#001A00] text-sm mt-2">
                87% project success rate achieved through reliable planning,
                skilled execution, and high-quality solar solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="w-screen h-screen p-20">
          <img
            src={logo}
            alt=""
            id="circle"
            className="absolute w-25 translate-x-275"
          />
          <div
            id="serviceInnerContainer"
            className="bg-[#e6e3e35e] w-full h-full p-10"
          >
            <h1 className="text-[#001A00] font-bold bg-[#F2F2F2] inline-block py-2 px-5 rounded-4xl mt-5">
              Services
            </h1>
            {/* ------------------serviceText-------------------- */}
            <div
              id="serviceText"
              className="flex justify-between items-center mt-5"
            >
              <h1 className="text-4xl font-bold text-[#004700] ">
                Our Solar Solutions
              </h1>
              <p className="text-xl font-sm">
                we believe in the power of solar<br></br> energy to transform
                lives and commmunities
              </p>
            </div>
            {/* ----------------serviceContainer---------------------- */}
            <div
              id="serviceContainer"
              className="flex gap-5 justify-center items-center mt-10"
            >
              {serviceContainer.map((elem, inx) => (
                <div
                  className="w-[28%]  h-55 flex items-end  rounded bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${elem.img})` }}
                >
                  <div className="bg-[#11111134] w-full h-full absolute"> </div>

                  <h1 className="text-white text-xl font-medium z-10 p-2">
                    {elem.name}
                    <span>
                      <i className="ri-arrow-right-up-line "></i>
                    </span>
                  </h1>
                </div>
              ))}
            </div>
            {/* -------------------------------------- */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
