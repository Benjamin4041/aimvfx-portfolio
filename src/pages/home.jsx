import React from "react";
import Nav from "../components/Nav";
import Section from "../components/section";
import BottomNav from "../components/BottomNav";
import Project from "../components/project";
import Cursor from "../components/cursor/cursor";
import ThreeDBtn from "../components/ThreeDBtn";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-bgGalaxy  overflow-x-hidden ">
      <Cursor />
      <Nav />
      <BottomNav />
      <Section myStyle={"flex justify-center h-screen items-center"}>
        <div className="w-full h-screen ">
          <video className="w-full h-full object-cover" muted autoPlay loop>
            <source src="./assets/videos/showreel.mp4" type="video/mp4" />
          </video>
        </div>
      </Section>
      <Section
        myStyle={
          "flex justify-center h-[50vh] xl:h-screen flex-col items-center"
        }
      >
        <h3 className="font-semibold  lg:text-4xl xl:text-4xl text-wrap lg:w-[17em] w-[19em] xl:w-[17em] text-center text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum
          provident placeatNemo earum provident placeatNemo earum provident
          placeat.
        </h3>
        <p className="font-semibold text-sm text-wrap mt-14 text-center text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error amet
          libero sint repudiandae face
        </p>
      </Section>
      <Section myStyle={" w-screen h-fit "}>
        <img
          src="./assets/images/6NypBt90bcUoC9vfE92K7YLZGcI (1).svg"
          alt=""
          className=""
        />
        <div className="bg-white h-full w-screen flex justify-center items-center px-10">
          <div className=" ">
            <h1 className="font-bold lg:text-5xl text-3xl mb-[1.9em] text-black  ">
              Projects
            </h1>
            <img
              src="./assets/images/mweaoeyt_1668186378575.jpg"
              alt=""
              className="mask-folder1 overflow-hidden"
            />

            {/* turn to component */}
      <ThreeDBtn name={'See More'} myStyle={"md:my-16 lg:mb-24 xl:my-0 my-24 " }/>
          </div>
        </div>
      </Section>
      <Section myStyle={"w-screen bg-white lg:h-screen xl:pt-[7em]"}>
        <div
          className="flex gap-[40] lg:gap-[13em] justify-center items-center overflow-x-auto w-full  "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...Array(5)].map((_, index) => (
            <div key={index} className=" w-[65vw] lg:w-[45vw] flex-shrink-0">
              <Project image={"/assets/images/digkyxc6_1668183723356.jpg"} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        myStyle={
          " bg-white w-screen xl:min-h-screen lg:min-h-screen flex flex-col justify-center item-center xl:px-[3.7em] lg:px-[12.9em] md:px-[] xl:pt-0 lg:pt-0 md:pt-0 pt-16 "
        }
      >
        <h1 className="text-center font-bold text-xl lg:text-9xl text-wrap md:w-[60%] w-[50%] self-center lg:mb-20 mb-9">
          Acing the Impossible. Creativity for the future
        </h1>
        <div className="flex justify-center gap-[2.5em] items-center  xl:flex-row lg:flex-row md:flex-col flex-col">
        <div className="xl:w-[28.9em] lg:w-[28.9em] md:w-[50%] w-[80%]" >
        <img src="/assets/images/301620502_5319703588065942_1436250938706757434_n.jpg" alt="" />
        <ThreeDBtn myStyle={'md:my-16 lg:mt-[60em] xl:mt-7 md:mt-7 mt-9 '} name={'about me'}/>
        </div>
          <p className="xl:w-[25em] lg:w-[25em] w-[50%]">
            I have a strong passion for working with companies that specialize
            in both tech and lifestyle products, as well as start-ups. My
            expertise lies in creating captivating branded campaigns that
            effectively communicate a story and drive promotional efforts
            forward.
          </p>
        </div>

      </Section>
      <Section myStyle={"h-screen pt-[6em] bg-white lg:px-[32]"}>
        <h1 className="font-bold text-2xl lg:text-5xl w-fit lg:px-52 xl:px-[13.5em] md:px-[0em] px-11">Areas of Expertise </h1>
      </Section>
      <Footer/>
    </div>
  );
}
