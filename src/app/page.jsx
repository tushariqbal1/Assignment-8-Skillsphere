
'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Star, Play, Users, Clock, Target, Lightbulb, Award } from 'lucide-react';

// Hero section data
const heroSlides = [
  {
    title: "Upgrade Your Skills Today",
    subtitle: "Learn from Industry Experts",
    image: "https://i.ibb.co.com/PGfJCT80/1015-1920x1080.jpg",
    cta: "Explore Courses"
  },
  {
    title: "Master Web Development",
    subtitle: "Build production-ready applications",
    image: "https://i.ibb.co.com/KzRK065J/201-1920x1080.jpg",
    cta: "Start Learning"
  },
  {
    title: "Design That Converts",
    subtitle: "UI/UX Mastery with Real Projects",
    image: "https://i.ibb.co.com/Y4y8tWRL/237-1920x1080.jpg",
    cta: "Join Now"
  }
];

// Popular Courses
const popularCourses = [
  {
    id: 1,
    title: "Full Stack Web Development 2026",
    instructor: "Sarah Chen",
    image: "https://i.ibb.co.com/cXrTDds9/1015-600x400.jpg",
    rating: 4.9,
    students: "12.4k",
    level: "Intermediate",
    category: "Development"
  },
  {
    id: 2,
    title: "UI/UX Design Mastery",
    instructor: "Alex Rivera",
    image: "https://i.ibb.co.com/KzRK065J/201-600x400.jpg",
    rating: 4.8,
    students: "8.7k",
    level: "Beginner",
    category: "Design"
  },
  {
    id: 3,
    title: "Digital Marketing & Growth",
    instructor: "Michael Torres",
    image: "https://i.ibb.co.com/9Hz5GTcD/301-600x400.jpg",
    rating: 4.7,
    students: "15.2k",
    level: "All Levels",
    category: "Marketing"
  }
];

// Top Instructors
const instructors = [
  { name: "Tushar Iqbal", role: "Full Stack Engineer", image: "https://i.ibb.co.com/WW2KnWzr/1706104843173.jpg", students: "12.5k", expertise: "Web Development" },
  { name: "Anik Hasan AK", role: "Senior Product Designer", image: "https://i.ibb.co.com/ZpQLfhSH/Whats-App-Image-2026-05-02-at-5-55-06-PM.jpg", students: "9.8k", expertise: "UI/UX Design" },
  { name: "Jibon Ahmed Sagor", role: "Growth Marketing Lead", image: "https://i.ibb.co.com/8DS9cQRq/Whats-App-Image-2026-05-02-at-5-55-07-PM.jpg", students: "7.2k", expertise: "Digital Marketing" },
  { name: "Md. Shahin Ali", role: "Data Scientist", image: "https://i.ibb.co.com/6Jfkb6z2/Whats-App-Image-2026-05-02-at-5-55-07-PM-1.jpg", students: "6.1k", expertise: "Data Science" }
];

export default function Home() {
  return (
    <>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero h-full relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="hero-content text-center text-white max-w-4xl mx-auto px-6">
                    <div className="max-w-3xl">
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-2xl md:text-3xl mb-10 opacity-90">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href="/courses"
                          className="btn btn-primary btn-lg text-lg px-10"
                        >
                          {slide.cta}
                        </Link>
                        <Link
                          href="/courses"
                          className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black text-lg"
                        >
                          Watch Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Popular Courses Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 mt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Popular Courses</h2>
              <p className="text-base-content/70 mt-2">Most loved by our community this month</p>
            </div>
            <Link href="/courses" className="link link-primary flex items-center gap-2 font-medium">
              View All Courses →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div
                key={course.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <figure className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 badge badge-primary badge-lg">
                    {course.level}
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-xl leading-tight">{course.title}</h3>
                  <p className="text-base-content/70">by {course.instructor}</p>

                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-current" size={20} />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-base-content/70">
                      <Users size={18} />
                      {course.students} students
                    </div>
                  </div>

                  <div className="card-actions mt-6">
                    <Link
                      href={`/courses/${course.id}`}
                      className="btn btn-primary btn-block group-hover:gap-3 transition-all"
                    >
                      View Details
                      <Play size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips section*/}
        <div className="bg-base-200 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-4">
                <Lightbulb size={22} /> LEARNING SUCCESS TIPS
              </div>
              <h2 className="text-4xl font-bold">Pro Tips to Learn Faster</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card bg-base-100 p-8 hover:shadow-xl transition-shadow">
                <Target className="w-14 h-14 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Pomodoro Technique</h3>
                <p className="opacity-70 leading-relaxed">
                  Study for 25 minutes focused, then take a 5-minute break. Repeat 4 times then take a longer break.
                </p>
              </div>

              <div className="card bg-base-100 p-8 hover:shadow-xl transition-shadow">
                <Clock className="w-14 h-14 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Time Blocking</h3>
                <p className="opacity-70 leading-relaxed">
                  Block specific times in your calendar for learning. Treat it like a non-negotiable meeting.
                </p>
              </div>

              <div className="card bg-base-100 p-8 hover:shadow-xl transition-shadow">
                <Award className="w-14 h-14 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Active Recall</h3>
                <p className="opacity-70 leading-relaxed">
                  Test yourself frequently instead of just re-reading notes. This dramatically improves retention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Learn from the Best</h2>
            <p className="text-base-content/70 mt-3">Expert instructors with real industry experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, i) => (
              <div key={i} className="card bg-base-100 shadow-xl hover:-translate-y-3 transition-all duration-300">
                <figure className="pt-8 px-8">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold text-xl">{instructor.name}</h3>
                  <p className="text-primary font-medium">{instructor.role}</p>
                  <p className="text-sm opacity-70 mt-1">{instructor.expertise}</p>

                  <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                    <Users size={20} className="text-primary" />
                    <span>{instructor.students} students taught</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}