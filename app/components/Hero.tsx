"use client"
import Link from "next/link"
import { useLayoutEffect } from "react"

export default function Hero() {
  useLayoutEffect(() => {
    function calculateHeroHeight() {
      const headerHeight = document
        .getElementById("header")!
        .getBoundingClientRect().height
      const heroHeight = window.innerHeight - headerHeight
      const hero = document.getElementById("hero")!

      hero.style.minHeight = `${heroHeight.toString()}px`
    }
    calculateHeroHeight()
    window.addEventListener("resize", calculateHeroHeight)
  }, [])
  return (
    <section
      className="flex items-center"
      id="hero"
    >
      <div className="bg-[url('/hero-bg.png')] h-screen w-screen top-0 right-0 -z-[1] absolute bg-no-repeat overflow-hidden bg-cover"></div>
      <div className="container flex items-center text-white">
        <article className="max-w-[315px] md:max-w-[690px] text-white">
          <h1>Art pieces made easy accessible for everyone</h1>
          <p className="max-w-[315px] md:max-w-[530px] mt-[32px] p-lg">
            Learn, buy and trade art pieces of your favorite artist around the
            world by using crypto currencies.
          </p>
          <Link
            className="button-primary mt-[32px]"
            href="/about"
          >
            Learn more
          </Link>
        </article>
      </div>
    </section>
  )
}
