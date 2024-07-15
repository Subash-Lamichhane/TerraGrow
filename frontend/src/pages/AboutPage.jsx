import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background justify-between">
        <Navbar/>
      <main className="container mx-auto px-4 py-12 md:px-24 lg:py-20 my-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Discover the Perfect Plants for Your Soil With TerraGrow
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Our website is dedicated to helping gardeners and farmers find the most suitable plants for their unique
              soil and environmental conditions. With our AI expert guidance, you can unlock the full potential of your
              land and enjoy bountiful harvests.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Assess Your Soil</h2>
              <p className="text-muted-foreground">
                Determine the plants that will thrive in your environment by providing nutrient levels, pH, and other key characteristics of your soil.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Optimize for Your Climate</h2>
              <p className="text-muted-foreground">
                Consider factors like temperature, humidity, and rainfall to ensure your chosen plants can adapt and
                flourish in your local climate.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Tailored Recommendations</h2>
              <p className="text-muted-foreground">
                Our expret AI will provide personalized plant recommendations based on your unique soil and environmental conditions, helping you achieve the best possible results.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:mt-16 lg:mt-20">
          <div className="grid gap-2">
            <h2 className="text-xl font-bold tracking-tighter text-foreground">
              Unlock the Full Potential of Your Land
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Our website is your trusted guide to successful gardening and farming. With our comprehensive soil
              analysis and plant recommendations, you can cultivate a thriving, sustainable ecosystem that maximizes
              your land's productivity.
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-bold tracking-tighter text-foreground">Expertise You Can Trust</h2>
            <p className="text-muted-foreground md:text-xl">
              Our model have been optimally trained with suitable dataset to increase accuracy. We're dedicated to empowering you with the knowledge and tools to create a
              flourishing, eco-friendly landscape.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutPage