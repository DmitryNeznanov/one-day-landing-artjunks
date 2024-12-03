"use client"
import Image from "next/image"
export default function CloseMobileMenuButton() {
  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu")!
    mobileMenu.style.width = "0%"
  }
  return (
    <button
      className="block p-[6px] box-content"
      onClick={closeMobileMenu}
      type="button"
    >
      <Image
        src="/close-mobile-menu-icon.svg"
        width={21}
        height={21}
        alt="close-mobile-menu-icon.svg"
      ></Image>
    </button>
  )
}
