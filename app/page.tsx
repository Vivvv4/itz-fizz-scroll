"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "100%", label: "GOOD MOOD GUARANTEED" },
  { value: "0%", label: "BORING ENERGY" },
  { value: "24/7", label: "REASONS TO FIZZ" },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const can = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".eyebrow", { y: 16, opacity: 0, duration: 0.65 })
      .from(".hero-letter", { y: 55, opacity: 0, rotateX: -35, stagger: 0.035, duration: 0.8 }, "-=0.25")
      .from(".stat-card", { y: 22, opacity: 0, stagger: 0.12, duration: 0.6 }, "-=0.3")
      .from(".hero-copy", { y: 20, opacity: 0, duration: 0.7 }, "-=0.35")
      .from(".scroll-cue", { opacity: 0, y: -8, duration: 0.5 }, "-=0.2");

    gsap.to(can.current, {
      y: 310,
      x: 90,
      rotate: 20,
      scale: 0.82,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-stage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.1,
      },
    });

    gsap.to(".can-glow", {
      scale: 1.25,
      opacity: 0.42,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-stage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    gsap.from(".story-line", {
      y: 45,
      opacity: 0,
      stagger: 0.14,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".story-section", start: "top 72%" },
    });
  }, { scope: root });

  const headline = "WELCOME ITZ FIZZ".split("");

  return (
    <main ref={root}>
      <nav className="nav">
        <a href="#" className="wordmark" aria-label="Itz Fizz home">itz<span>✳</span>fizz</a>
        <div className="nav-right"><span>THE FEEL-GOOD FIZZ</span><a href="#story" className="nav-link">OUR VIBE <span>↗</span></a></div>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow"><span className="status-dot" /> A LITTLE SPARK. A LOT OF PERSONALITY.</p>
          <div className="headline-wrap" aria-label="Welcome Itz Fizz">
            <h1>{headline.map((letter, index) => (
              <span className={`hero-letter ${letter === " " ? "word-space" : ""}`} key={`${letter}-${index}`}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}</h1>
          </div>
          <p className="hero-copy">BIG FIZZ ENERGY.<br /><em>Zero</em> ordinary moments.</p>
        </div>

        <div className="stats-row">
          {stats.map((stat, index) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-index">0{index + 1} / THE GOOD STUFF</span>
              <strong>{stat.value}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="can-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="spark spark-one">✳</div>
          <div className="spark spark-two">✦</div>
          <div className="spark spark-three">✳</div>
          <div className="soda-can" ref={can}>
            <div className="can-top"><span /></div>
            <div className="can-body">
              <div className="can-small">THE ORIGINAL</div>
              <div className="can-brand">itz<br /><span>fizz</span></div>
              <div className="can-spark">✳</div>
              <div className="can-flavour">CITRUS POP</div>
              <div className="can-volume">330 ML · SPARKLING</div>
            </div>
            <div className="can-bottom" />
          </div>
          <div className="art-sticker">POP<br />OFF!</div>
        </div>

        <div className="hero-footer">
          <span>MADE FOR THE IN-BETWEEN</span>
          <a href="#story" className="scroll-cue">SCROLL TO FEEL IT <span>↓</span></a>
          <span>EST. GOOD TIMES</span>
        </div>
      </section>

      <section className="scroll-stage" id="story">
        <div className="stage-copy">
          <p className="section-kicker story-line">01 — THE ITZ FIZZ STATE OF MIND</p>
          <h2 className="story-line">Ordinary day?<br /><span>Not on our watch.</span></h2>
          <p className="stage-description story-line">Crack a can. Change the soundtrack. Make the small stuff feel like the main event.</p>
          <a className="pill-link story-line" href="#good-stuff">MEET YOUR NEW SIDEKICK <span>↗</span></a>
        </div>
        <div className="stage-note">GOOD THINGS<br />ARE BREWING <span>✳</span></div>
      </section>

      <section className="good-stuff" id="good-stuff">
        <div>
          <p className="section-kicker">02 — THE GOOD STUFF</p>
          <h2>Stay fizzy.<br /><span>Stay curious.</span></h2>
        </div>
        <p className="good-stuff-copy">For late plans, loud laughs, long drives, tiny wins and everything in between. This is your reminder to make a moment out of it.</p>
        <div className="bottom-banner"><span>ITZ YOUR MOMENT.</span><span>MAKE SOME NOISE ✳</span></div>
      </section>
      <footer><a href="#" className="wordmark">itz<span>✳</span>fizz</a><span>GOOD VIBRATIONS, IN A CAN.</span><span>© 2026 ITZ FIZZ CONCEPT</span></footer>
    </main>
  );
}