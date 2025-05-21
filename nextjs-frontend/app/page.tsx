"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/section-components/navbar";
import Image from "next/image";
import { Footer } from "@/components/section-components/footer";


const Page = () => {
  return (
    <main>
      <Navbar />
      <section className="text-center my-36">
        <div className="container mx-auto text-left">
          <h1 className="text-4xl md:text-7xl  font-extrabold leading-tight leading-snug">
            Where Curious Minds <br/><span className="text-green-400">See</span> Code,
            and <span className="text-[#138dff]">Shape</span> <br className="hidden md:block" />the Future with Vision
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            From Pixels to Possibilities—Join the Computer Vision Revolution
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 items-end">
          <div className="bg-green-200 text-black p-6 rounded-2xl shadow-xl flex flex-col justify-between min-h-[260px] self-end">
            <div>
              <div className="mb-2 text-sm font-medium">🏅 CV Expert Educators</div>
              <h3 className="text-xl font-bold mb-2">
                Mentors Powering Computer Vision Breakthroughs
              </h3>
              <p className="text-sm text-black/70">
                Learn from top minds in AI and computer vision education.
              </p>
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl border  shadow-xl overflow-hidden flex flex-col min-h-[420px] self-end">
            <div className="p-6 flex justify-between items-center">
              <button className="text-xs px-3 py-1 rounded-full border border-black">{"<< Vision Academy >>"}</button>
              <button className="text-xs px-3 py-1 rounded-full border border-black">Enroll →</button>
            </div>
            <div className="px-6 text-2xl font-bold mb-2">
              Nurturing Next-Gen CV Engineers Through Playful Learning
            </div>
            <div className="flex-1">
            </div>
          </div>

          <div className="bg-blue-300 text-black p-6 rounded-2xl shadow-xl flex flex-col justify-between min-h-[300px] self-end">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">OpenCV Smart Academy</h3>
              <button className="flex flex-nowrap bg-black text-center text-white px-2 py-1 rounded-full text-sm">
                <Plus className="w-5 h-5 mr-1"/> Explore
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-sm">Vision</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm">AI</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm">Robotics</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm">ML</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white text-black mx-auto mb-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Unleashing Potential Through Vision AI</h2>
            <p className="text-lg mb-6">
              Our most popular course teaches students how to harness AI and computer vision to build smart apps.
            </p>
            <Link
              href="/courses/vision-ai"
              className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg"
            >
              Explore Course →
            </Link>
          </div>
          <div>
            <div className="bg-white border">
              <div className="h-[500px] rounded-none relative flex">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

                <div className="hidden lg:block flex-1 relative z-0">
                  <div className="absolute inset-0 mx-auto h-full overflow-hidden">
                    <SplineScene
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full bg-gradient-to-b from-white to-blue-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <p className="uppercase text-sm tracking-widest text-muted-foreground mb-2">
            Trusted Across 10k+ learners
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Empowering your journey with AI & Computer Vision
          </h2>
          <div className="mt-12 flex flex-wrap gap-10 justify-center">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-left bg-muted/50 rounded-2xl shadow-md w-full max-w-xs"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 border-b pb-1">{industry.title}</h3>
                  <ul className="text-md text-black list-disc list-inside space-y-1 mb-4">
                    {industry.points.map((point, i) => (
                      <li className="pb-3" key={i}>{point}</li>
                    ))}
                  </ul>
                  <Link href="#" className="text-sm text-[#138dff] font-medium inline-flex items-center gap-1 hover:underline">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-gradient-to-b from-white to-blue-200 py-20 px-4 text-center">
        <h2 className="text-2xl lg:text-5xl font-bold">
          It's time to upgrade <br />
          <span className="relative inline-block">
            <span
              className="absolute inset-0 bg-cover bg-center rounded-full"
              style={{ backgroundImage: "url('/welcome-card.png')" }}
            ></span>
            <span className="relative text-transparent bg-clip-text">your</span>
          </span>{' '}
          recruiting process
          <span className="inline-block ml-2 w-10 h-10 rounded-full overflow-hidden align-middle">
            <Image
              src="/welcome-card.png"
              alt="Welcome"
              width={40}
              height={40}
              className="object-cover"
            />
          </span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-800">
          Ready to take your department from a cost center to a strategic revenue division? We’re here to help.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800">
            Schedule a demo
          </button>
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800">
            Watch a product tour video
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
