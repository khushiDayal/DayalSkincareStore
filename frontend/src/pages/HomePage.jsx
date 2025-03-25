import CategoryItem  from "../components/CategoryItem";
const categories = [
  {href: "/sunscreen", name: "Sunscreen", imageUrl: "/sunscreen.jpeg"},
  {href: "/moisturizer", name: "Moisturizer", imageUrl: "/moisturizer.jpeg"},
  {href: "/serum", name: "Serum", imageUrl: "/serum.jpeg"},
  {href: "/scrub", name: "Scrub", imageUrl: "/scrub.jpeg"},
  {href: "/cleanser", name: "Cleanser", imageUrl: "/cleanser.jpeg"},
  {href: "/bodywash", name: "BodyWash", imageUrl: "/bodywash.jpeg"},
  {href: "/bodylotion", name: "BodyLotion", imageUrl: "/bodylotion.jpeg"},
  {href: "/lipbam", name: "LipBam", imageUrl: "/lipbam.jpeg"},
]

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-[#8d5515] mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-[#580823] mb-12">
          Discover the your Skin's bestfriend product
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(category => (
          <CategoryItem category={category} key={category.name} />
        ))} 
        </div>
      </div>
    </div>
  )
}

export default HomePage;
