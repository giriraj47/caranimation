import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './App.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const container = useRef();
  const carRef = useRef();
  const trailRef = useRef();
  const revealTextRef = useRef();
  const sectionRef = useRef();

  useGSAP(() => {
    const letters = gsap.utils.toArray('.letter');
    const carWidth = carRef.current.offsetWidth;
    const roadWidth = window.innerWidth;
    const endX = roadWidth - (carWidth * 0.4);

    // Pre-calculate letter positions for performance
    const letterPositions = letters.map(letter => {
      const rect = letter.getBoundingClientRect();
      const containerRect = revealTextRef.current.getBoundingClientRect();
      return rect.left - containerRect.left + revealTextRef.current.offsetLeft;
    });

    // Initialize trail and car state immediately
    gsap.set(trailRef.current, { width: carWidth * 0.5 });
    gsap.set(carRef.current, { x: 0 });

    // Main car and trail animation
    gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      x: endX,
      ease: "none",
      onUpdate: function () {
        const progress = this.progress();
        const currentX = progress * endX;
        const revealPoint = currentX + (carWidth * 0.5);
        
        letters.forEach((letter, i) => {
          if (revealPoint >= letterPositions[i]) {
            gsap.to(letter, { opacity: 1, duration: 0.1, overwrite: "auto" });
          } else {
            gsap.to(letter, { opacity: 0, duration: 0.1, overwrite: "auto" });
          }
        });

        gsap.set(trailRef.current, { width: currentX + (carWidth * 0.5) });
      }
    });

    const boxes = [
      { id: "#box1", start: "top+=10%", end: "top+=30%" },
      { id: "#box2", start: "top+=22%", end: "top+=42%" },
      { id: "#box3", start: "top+=34%", end: "top+=54%" },
      { id: "#box4", start: "top+=46%", end: "top+=66%" },
    ];

    boxes.forEach((box) => {
      gsap.fromTo(box.id,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: box.start,
            end: box.end,
            scrub: true,
          }
        }
      );
    });

  }, { scope: container });

  const welcomeText = "WELCOME ITZFIZZ";

  return (
    <div ref={container} className="min-h-screen">
      <section ref={sectionRef} className="animation-section">
        <div className="animation-track">
          <div className="road">
            <img 
              ref={carRef}
              src="/car.png" 
              alt="car" 
              className="car" 
            />
            <div ref={trailRef} className="trail"></div>
            
            <div ref={revealTextRef} className="reveal-text">
              {welcomeText.split("").map((char, i) => (
                <span key={i} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>

          <div id="box1" className="text-box">
            <span className="num-box">58%</span>
            <span className="box-description">Increase in pick up point use</span>
          </div>
          
          <div id="box2" className="text-box">
            <span className="num-box">23%</span>
            <span className="box-description">Decreased in customer phone calls</span>
          </div>

          <div id="box3" className="text-box">
            <span className="num-box">27%</span>
            <span className="box-description">Growth in sustainable delivery</span>
          </div>

          <div id="box4" className="text-box">
            <span className="num-box">40%</span>
            <span className="box-description">Reduction in carbon footprint</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;