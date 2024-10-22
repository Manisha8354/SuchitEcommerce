import React from 'react'

export default function ViewmoreBlog() {
  return (
    <div className=''>
      {/* 1st Section - Cooler */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Wisetech Appliances presents an energy-efficient Air Cooler that keeps you cool even in the harshest summers.
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Stay cool this summer with the latest Air Cooler from Wisetech Appliances. Our cooler is designed to provide high airflow with minimal energy consumption, perfect for keeping your home or office cool without driving up electricity costs. Featuring advanced cooling technology, this product ensures rapid cooling, making it ideal for hot climates.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://5.imimg.com/data5/VD/XB/MY-3945295/symphony-air-cooler-500x500.jpg"
                alt="Wisetech Air Cooler"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section - LED TV */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Wisetech Appliances brings you an ultra-high-definition LED TV for a cinematic viewing experience.
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Experience entertainment like never before with our state-of-the-art LED TV. With crystal-clear picture quality, vivid colors, and a sleek, modern design, our LED TV is the perfect addition to any living room. Whether you're watching movies, playing games, or streaming your favorite shows, our TV delivers an immersive experience every time.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://5.imimg.com/data5/BM/OA/AC/SELLER-5045757/lg-43-inches-led-tv-500x500.jpg"
                alt="Wisetech LED TV"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section - Mixer */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Wisetech Appliances presents a powerful Mixer Grinder for all your kitchen needs.
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Say goodbye to manual grinding and chopping with the Wisetech Mixer Grinder. This versatile appliance is perfect for grinding, blending, and mixing ingredients with ease. Its powerful motor ensures smooth and efficient performance, making your kitchen tasks simpler and faster.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://5.imimg.com/data5/KB/II/MY-48206711/electric-mixer-grinder-500x500.jpg"
                alt="Wisetech Mixer Grinder"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4th Section - Fans */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Wisetech Appliances offers a range of high-speed ceiling fans to beat the heat.
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Our high-speed ceiling fans are designed to provide maximum air circulation while being energy-efficient. With a variety of styles and finishes to choose from, these fans not only cool your space but also add a touch of elegance to your interiors. Perfect for both residential and commercial use, they ensure comfort and style.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <img
                src="https://5.imimg.com/data5/YX/OD/MY-14538396/ceiling-fan-500x500.jpg"
                alt="Wisetech Ceiling Fans"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
