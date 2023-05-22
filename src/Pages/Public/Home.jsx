import { HomeCarousel } from "../../components/HomeCarousel"

export const Home = () => {
  return (
    <>
      <section className="w-full h-md mobile:h-lg desktop:h-xl bg-light-900 relative">
        <HomeCarousel />
      </section>
      <section>
        <div></div>
      </section>
    </>
  )
}
