import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {frontend,
    backend,
    designdev,
    coding,
    wordpressdesign} from './assets/aboutskills/aboutskills';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const dotsRef = useRef([]);
  const lineRef = useRef([]);
  const itemsRef = useRef([]);
  const [items] = useState([
    { title: "Front-End Development", desc: "Crafting modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS to deliver seamless user experiences",image:  frontend},
    { title: "Back-End Development", desc: "Building scalable and secure server-side applications with Node.js, Express.js, MongoDB, and Firebase, ensuring smooth data handling and robust APIs",image:  backend},
    { title: "Design & Prototyping", desc: "Designing clean and user-friendly interfaces with Figma, transforming ideas into practical UI/UX that improve usability and aesthetics",image:  designdev},
    { title: "WordPress Development", desc: "Creating fully functional websites and eCommerce stores with WordPress, tailored for businesses that need flexibility, speed, and easy management",image:  wordpressdesign},
    { title: "Other Essential Skills", desc: "Proficient in GitHub for version control, Firebase for real-time features and authentication, and problem-solving techniques that ensure smooth project delivery",image:  coding},
  ])
  
      // {
      //   scrollTrigger: {
      //     trigger: lineRef.current,
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: true,
      //   },
      //   height: "100%",
      //   ease: "none",
      //   duration: 1,
      //   transformOrigin: "top center",
      //   onUpdate: self => {
      //     const progress = self.progress() * 100;
      //     console.log(`Scroll progress: ${progress.toFixed(2)}%`);
      //   }
      // }

      // gsap.to(item, {
      //   y: 20,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: item,
      //     start: "top center",
      //     end: "bottom bottom",
      //     scrub: true,
      //   }
      // })
      // // gsap.to(lineRef.current, {
      // //   height: `${(i + 1) * 20}%`,
      // //   duration: 1,
      // //   ease: "none",
      // //   scrollTrigger: {
      // //     trigger: item,
      // //     start: "top center",
      // //     end: "bottom bottom",
      // //     scrub: true,
      // //   }
      // // })
      // gsap.to('.linee', {
      //   height: "100%",
      //   duration: 1,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: item,
      //     start: "top center",
      //     end: "bottom bottom",
      //     scrub: true,
      //   }
      // })

      
    // gsap.to('.linee', {
    //   height: "50%",
    //   duration: 3,
    //   scrollTrigger: ".linee",
    // }
    // )

  useEffect(() => {
    itemsRef.current.forEach((item,i) => {
      gsap.fromTo(
        lineRef.current[i],
        { height: "0%" },
        {
          height: "100%",
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          }
        }
      )
      gsap.fromTo(
        dotsRef.current[i],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          }
        }
      )
      gsap.fromTo(
        itemsRef.current[i],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          }
        }
      )
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, []);

  return (
    <div className='w-full flex items-center justify-center flex-col overflow-hidden py-28'>
      <h1 className='font-bold text-4xl mb-14'>What I Do</h1>
      <div className="lineeconcon relative w-[90%] max-w-5xl mx-auto " >
        {/* Vertical line */}
        {
          /** 
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 h-full flex flex-col items-center gap-1"
        >
          <div className='liness h-96 flex items-center justify-center flex-col' key={i}>
              <span className='linee w-[4px] bg-green-500 mb-0 p-0 transition-all ease-in'></span>
              <span className='w-5 h-5 bg-green-500 rounded-full'></span>
            </div>
        </div>
        */
        }

        {/* Timeline items */}
        {items.map((item, i) => (
          <div
            key={i}
            ref={el => itemsRef.current[i] = el}
            className={`relative w-full flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } box${i}  gap-5 h-96`}
          >
            <div
              className={`w-[45%] flex flex-col gap-4 `}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 pb-5 border-b-2 border-black mb-2">{item.desc}</p>
              <img src={item.image}></img>
            </div>
          </div>
        ))}
        <div className="absolute left-1/2 top-0 h-full flex flex-col items-center gap-1">
          {
            items.map((_,i) => (
            <div  className='liness h-96 flex items-center justify-start flex-col' key={i}>
              <span ref={el => lineRef.current[i] = el} className='linee top-0 w-[4px] bg-orange-500 mb-0 p-0 transition-all duration-500 ease-in h-full'></span>
              <span ref={el => dotsRef.current[i] = el} className='w-5 h-5 bg-orange-500 rounded-full'></span>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
}

