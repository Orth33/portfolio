"use client"

import { useEffect, useState } from "react";

//#region Components import
import NavBar from "./components/nav_bar/navbar";
import TopHeader from "./components/top_header/topheader";
import About from "./components/about/about";
import Project from "./components/project/project";
//#endregion

export default function Home() {
  const [projects,setprojects]=useState([]);
  useEffect(() => {
    fetch('http://103.180.207.11:3258/entries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setprojects(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  return (
    <main className="w-full flex flex-col  my-2">
        <TopHeader />
        <NavBar />
        <div className="w-full flex flex-col items-center bg-[var(--colorForeground)]">
          <div className="page_contents">
            <br/>
            <br/>
              <div className="about_me_quote">
                <h1>Turning ideas into reality!</h1>
              </div>
              <div className="about_container">

                  <div className="about_details_container">
                      <div className="main_img">
                          <img
                              src="https://files.catbox.moe/ueov89.jpg" />
                      </div>
                      <div className="about_me_details">
                          <div role="about_me" className="w-full">
                              <a>About Myself</a>
                              <div className="w-full my-6 p-0 flex flex-col gap-7 text-black">
                                  <p>I'm an adaptable Computer Science student with experience in web development, databases, and system analysis. Focused on creating efficient, user-friendly solutions and always learning new skills to improve. </p>
                                  <p>Doing the best I can. </p>
                              </div>
                          </div>

                      </div>
                  </div>

              </div>

              <div className="bio_container">
                  <div className="w-full h-full flex flex-row gap-20 p-2 text-white">
                    <About title={'EDUCATION'} value={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>
                    <About title={'SKILLS'} value={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>
                    <About title={'HOBBIES'} value={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>

                  </div>
              </div>
              <br/>
              <br/>
              <br/>

              <div className="w-full flex px-[5rem]">
                <h1 className="projects_header">MY PROJECTS</h1>
              </div>
              <br/>

              <div className="w-full h-60 px-20">
                <div className="projects_list  w-full h-full rounded-lg flex gap-24 overflow-x-auto">
                  {projects.map((item,index)=>(
                    <Project key={index} img={item.image} title={item.title} description={item.description} onClick={()=>window.open(item.git,'_blank')}/>
                  ))}

                </div>
              </div>


              <div className="bottom_header">
                <div className="w-full h-[1px] bg-[--colorText]"></div>
                <div role="bottom_header" className="w-full h-full flex flex-col gap-6 items-center justify-center text-[--colorText]">
                  <h1 className="contact text-lg">Ready to make it official?</h1>
                  <a className="contact transition-colors hover:text-[var(--colorActive)]" href="mailto:urbana.jaman.cse@ulab.edu.bd">GET IN TOUCH</a>
                  <div className="w-full h-6 flex flex-row justify-center items-center gap-6">
                    <div className="contact_action" onClick={()=>window.open('https://www.facebook.com/ttttttagasiehvege','_blank')}>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#000" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
                    </div>
                    <div className="contact_action" onClick={()=>window.open('Insta URL HERE','_blank')}>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFFFFF"  stroke="#000" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>                    
                    </div>

                    <div className="contact_action" onClick={()=>window.open('https://github.com/Orth33','_blank')}>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#000" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>                    
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>



    </main>
  );
}
