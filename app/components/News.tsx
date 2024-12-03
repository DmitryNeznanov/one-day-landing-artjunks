import Image from "next/image"
import Link from "next/link"

export default function News() {
  return (
    <section className="pt-[78px] pb-[43px] bg-white">
      <div className="container">
        <h2 className="text-black w-max mx-auto md:mx-0">Newest reads</h2>
        <section className="mt-[76px] flex flex-col md:flex-row items-center gap-[32px] md:justify-between">
          {[
            [
              "unsplash_sJr8LDyEf7k.png",
              "France seeks to protect Russia's Morozov collection from seizure as masterpieces return home",
              new Date(Date.UTC(2024, 5, 5)).toString(),
            ],
            [
              "unsplash_0aL3qzGKDpY.png",
              "Picasso’s muse as sea creature—will it break $100m at Sotheby's New York sale?",
              new Date(Date.UTC(2024, 5, 4)).toString(),
            ],
            [
              "unsplash_ieXZRcAKfmE.png",
              "Venice Biennale 2022: all the national pavilions, artists and curators",
              new Date(Date.UTC(2024, 5, 3)).toString(),
            ],
          ].map(([src, title, date], i) => {
            return (
              <article
                className="max-w-[310px] md:max-w-[187px] lg:max-w-[420px]"
                key={i}
              >
                <Image
                  className="min-h-[352px] w-screen rounded-tr-[4px] rounded-tl-[4px]"
                  src={`/${src}`}
                  width={420}
                  height={352}
                  alt={src}
                ></Image>
                <div className="h-[320px] md:h-[320px] lg:h-[350px] px-[32px] pt-[35px] pb-[32px] flex flex-col border-r border-b border-l border-[#DDDDDD] rounded-bl-[4px] rounded-br-[4px]">
                  <p>
                    <time
                      className="p-sm text-gray"
                      dateTime={date.toLocaleString()}
                    >
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                  <h3 className="mt-[28px] text-black line-clamp-[5] md:line-clamp-[7] lg:line-clamp-[4]">
                    {title}
                  </h3>
                  <Link
                    className=" mt-auto ml-auto w-max flex flex-row items-center p-md text-orange after:ml-[5px] after:content-[url('/arrow-right.svg')] hover:underline"
                    href="/news"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </section>
  )
}
