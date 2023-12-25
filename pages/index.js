import Image from 'next/image'
import { Teko } from 'next/font/google'
import Nav from './components/Nav'
import Poster from './components/Poster'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from 'react'
import SplitType from "split-type";
import Typewriter from "typewriter-effect";
import styles from "@/styles/Animation.module.css"
import { Player } from '@lottiefiles/react-lottie-player';
import { MdOutlineWeb, MdOutlineBrandingWatermark, MdOutlineContentPasteSearch } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import Link from 'next/link'


const teko = Teko({ subsets: ['latin'] })

export default function Home() {
  const firstRef = useRef(null);
  const secRef = useRef(null);
  const thirdRef = useRef(null);
  const forthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  const mainRef = useRef(null);
  const wordRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const [loading ,setLoading] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setLoading(true)
    }, 1000);
    // Check if window and document are defined
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const splitTxt = document.querySelectorAll("#secText");

      const tl = gsap.timeline();


      tl.fromTo(
        "#word-animation", // Use a class selector
        {
          opacity: 0,
          top: 100,
        },
        {
          top: 50,
          opacity: 1,
          position: 'relative',
          scrollTrigger: {
            trigger: "#mainRef",
            start: "top 30%",
            end: "top 0%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play",
          },
          duration: 5,
        }
      ).to(
        "#word-animation", // Use a class selector
        {
          scale: 100,
          position: 'fixed',
          scrollTrigger: {
            trigger: "#mainRef",
            start: "top 10%",
            end: "top 0%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play",
          },
          onComplete: () => {
            tl.to(
              "#word-animation",
              {
                position: 'fixed',
                scrollTrigger: {
                  // scroller: "#mainRef",
                  trigger: "#secRef",
                  start: "top center",
                  end: "top 0%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },
                duration: 5,
              }
            );
          },
          duration: 5,
        }
      ).fromTo(
        "#secText", {
        opacity: 0
      },
        {
          opacity: 1,
          scrollTrigger: {
            // scroller: "#mainRef",
            trigger: "#secRef",
            start: "top 27%",
            end: "top 0%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play",
          },
          duration: 5,
        }
      )


        .fromTo(
          "#devices", {
          opacity: 0
        },
          {
            opacity: 1,
            scrollTrigger: {
              // scroller: "#mainRef",
              trigger: "#secRef",
              start: "top 27%",
              end: "top 0%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play",
            },
            duration: 5,
          }
        )
        .fromTo(
          "#company", {
          opacity: 0
        },
          {
            opacity: 1,
            scrollTrigger: {
              // scroller: "#mainRef",
              trigger: "#thirdRef",
              start: "top 27%",
              end: "top 10%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play",
            },
            duration: 5,
          }
        ).fromTo(
          "#imageCo", {
          x: "150%"
        },
          {
            x: 0,
            scrollTrigger: {
              // scroller: "#mainRef",
              trigger: "#thirdRef",
              start: "top 27%",
              end: "top 10%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play",
            },
            duration: 5,
          }
        )

        .fromTo(
          "#coBox", {
          y: "150%",
          opacity: 0,
        },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              // scroller: "#mainRef",
              trigger: "#forthRef",
              start: "top 27%",
              end: "top 10%",
              scrub: 0.1,
              stagger: {
                // wrap advanced options in an object
                each: 0.1,
                from: "center",
                grid: "auto",
                ease: "power2.inOut",
                repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
              },
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play",
            },
            duration: 5,
          }
        )
      const contentElements = document.querySelectorAll("#content");

      // Stagger animation for each element with the ID "content"



    }
  }, []); // 
  return (
    <main
      className={``}
      ref={mainRef}
    >
      
        <section className='h-screen' style={{ background: "linear-gradient(359deg, black, #380053)" }} id='firstRef'>
          <Nav />
          <br />
          <br />
          <br />
          <Poster />
        </section>
        <section style={{ background: "#030303" }} className='h-[100vh] flex justify-center items-start overflow-hidden' id='mainRef'>
          <div className='h-screen flex items-start w-[70%] '>
            <Image
              src="/asset/eq.svg"
              alt="What can we do"
              width={200}
              height={200}
              layout="responsive"
              id="word-animation"
              className=' relative top-10'
              quality={65}
            />
          </div>
        </section>
        <section className='h-auto relative z-30 flex flex-col md:flex-row items-center justify-center' id='secRef'>
          <div id='secText' className='flex flex-col sm: items-center gap-0 w-[70%] md:w-[50%] md:p-[5%]'>
            <h1 className={` text-gray-800 font-extrabold text-[4vmax]`}>
              We make,
            </h1>
            <div id="features" class="mx-auto max-w-6xl">

              <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-2">


                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>
                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <MdOutlineWeb className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium">Web development</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}
                  </p>

                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>

                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <CiMobile1 className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Interface Design.</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}</p>

                </li>

                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>

                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <LiaMoneyBillWaveSolid className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Interface Design.</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}</p>

                </li>

                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>

                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <MdOutlineBrandingWatermark className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Branding.</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}</p>

                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>

                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <LiaMoneyBillWaveSolid className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Interface Design.</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}</p>

                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-sm" style={{ border: "1px solid black" }} id='content'>

                  <div className='flex gap-2'>
                    <div className='text-base'>
                      <MdOutlineContentPasteSearch className='text-xl w-9' />
                    </div>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Interface Design.</h3>
                  </div>
                  <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    {`A digital agency isn't here to replace your internal team, we're here to partner`}</p>

                </li>

              </ul>
            </div>
          </div>
          <br />
          <div id='devices' className={`${styles.posterImage} rounded-full  w-[80%] sm:w-5/12 overflow-hidden`}>
            <Player
              src='/animation.json'
              className="w-[80%]"
              loop
              autoplay
            />
          </div>
        </section>
        <section className=' h-[50vh] sm:h-[30vh] flex justify-center items-center overflow-hidden z-30 relative' style={{ backgroundColor: "#ffff" }} id='thirdRef'>
          <div>
            <div className='p-3 w-[65vmax]'>

              <Image
                src="/asset/co.png"
                alt="Comapny"
                width={300}
                height={300}
                id='imageCo'
                layout="responsive"
                quality={65}
              />

            </div>
          </div>
        </section>
        <section className='h-auto overflow-hidden z-30 relative' style={{ backgroundColor: "#ffff" }} id='forthRef'>
          <div className='flex flex-wrap flex-col gap-20 content-center items-start'>
            <div className='p-3 flex'>
              <h1 id='company' className='text-black font-bold text-3xl sm:text-5xl'>Projects </h1>
            </div>
            {
              [1, 2, 3].map((function (i, e) {
                return (

                  <div key={i} id='coBox' className={styles.projects}>
                    <div className={styles.Image}>
                      <Image
                        src="/asset/project.png"
                        alt="Projects"
                        width={200}
                        height={200}
                        layout="responsive"
                        id=""

                        quality={65}
                      />
                    </div>
                    <div className={styles.imageText}>
                      <h1 className=' text-3xl font-extrabold md:text-5xl'>Designni</h1>
                      <p>a quick brown fox jumps over a lazy dog</p>
                    </div>
                  </div>

                )

              }))
            }


          </div>
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>

        <section className='h-auto overflow-hidden z-30 relative' style={{ backgroundColor: "#ffff" }} id='forthRef'>


          <div className='flex flex-wrap flex-row gap-5 bg-black content-center items-start p-8'>
            <div className={`p-3 flex origin-top rotate-[270] md:origin-right`} >
              <h1 id='article' className={`text-white font-bold text-3xl sm:text-5xl ${teko.className}`}>Related Story</h1>
            </div>
            <div className='flex gap-16 flex-col md:flex-row'>
              {[1, 2, 3,].map((i, e) => {
                return (
                  <div key={i} class="max-w-sm shadow h-full w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 ">
                    <a href="#">
                      <Image
                        src="/asset/1.jpg"
                        alt="Projects"
                        width={200}
                        height={200}
                        layout="responsive"
                        id=""

                        quality={65}
                      />
                    </a>
                    <div class="p-5 text-white">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p>Design/uiux/admin</p><br />
                      <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg border border-slate-900 focus:ring-4 focus:outline-none ">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )
              })}


            </div>

          </div>

        </section>
        <section className='bg-black z-50 relative'>


          <div class="text-center w-full">

          </div>
          <div
            class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg" style={{ background: "#0e0e0e" }}>
            <div class="flex flex-col justify-between">
              <div className='hidden sm:block'>
                <h2 class="text-4xl lg:text-5xl text-white font-bold leading-tight">Lets talk about everything!</h2>
                <div class="text-white mt-8">
                  Hate forms? Send us an <span class="underline">email</span> instead.
                </div>

              </div>

            </div>
            <div class="">
              <div>
                <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                <textarea
                  class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div class="mt-8">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <footer class="footer flex items-center justify-center p-10 bg-base-200 text-base-content">
            <div className='flex flex-row flex-wrap gap-10 items-center content-center'>
              <div>
                <div className='flex flex-row gap-10 flex-wrap'>
                  <nav className='flex flex-col gap-3 text-white'>
                    <header className="footer">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                  </nav>
                  <nav className='flex flex-col gap-3 text-white'>
                    <header className="footer">Legal</header>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                  </nav>
                </div>
                <br />
                <div className='text-white flex text-4xl gap-5'>
                  <Link href={"#"} className=' hover:text-blue-500'><FaFacebook /></Link>
                  <Link href={"#"} className=' hover:text-sky-800'><FaLinkedin /></Link>
                  <Link href={"#"} className=' hover:text-red-500'><FaInstagram /></Link>
                </div>
              </div>
              <div className='flex flex-col items-start flex-wrap content-center'>
                <div className='flex'>
                  <h1 className='text-white text-4xl'>Sheba </h1>
                  <h1 className='text-red-600 text-4xl'>Point</h1>
                </div>
                <p className='text-white'>rshabib300@gmail.com</p>
                <p className='text-white w-1/2'> Address: Block A, Main Road-3, House-6, Mirpur-11, Pallabi, Dhaka-1216.</p>
              </div>

            </div>
          </footer>
        </section>
    
    </main>
  )
}
