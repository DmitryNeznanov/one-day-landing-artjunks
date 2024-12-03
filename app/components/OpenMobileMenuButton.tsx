"use client"
import Image from "next/image"

export default function OpenMenuButton() {
  function openMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu")!
    mobileMenu.style.width = "100%"
  }
  return (
    <button
      className="block"
      onClick={openMobileMenu}
      type="button"
    >
      <Image
        src="/open-mobile-menu-icon.svg"
        width={35}
        height={35}
        alt="open-mobile-menu-icon.svg"
      ></Image>
    </button>
  )
}
