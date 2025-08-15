import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const {ref,inView} = useInView();
  
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

  const items = [
    { title: "Blog 1", desc: "This is the first blog description." },
    { title: "Blog 2", desc: "This is the second blog description." },
    { title: "Blog 3", desc: "This is the third blog description." },
    { title: "Blog 4", desc: "This is the fourth blog description." },
  ];

  useEffect(() => {
    // gsap.to('.linee', {
    //   height: "50%",
    //   duration: 3,
    //   scrollTrigger: ".linee",
    // }
    // )
    itemsRef.current.forEach((item, i) => {
      gsap.to(lineRef.current, {
        height: `${(i + 1) * 20}%`,
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      })
    })
  }, []);

  return (
    <div className="lineeconcon relative w-[90%] max-w-5xl mx-auto py-20" ref={ref}>
      {inView ? 'Element is in view!' : 'Element is out of view.'}
      {/* Vertical line */}
      <div
        ref={lineRef}
        className="linee absolute left-1/2 top-0 w-[4px] bg-blue-500 h-10"
      ></div>

      {/* Timeline items */}
      {items.map((item, i) => (
        <div
          key={i}
          ref={el => itemsRef.current[i] = el}
          className={`relative w-full mb-20 flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          } box${i}`}
        >
          <div
            className={`bg-white p-6 rounded-xl shadow-lg w-[45%] ${
              i % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

