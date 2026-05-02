// 'use client';
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { Clock, Users, Star, Play } from 'lucide-react';
// import { FaCheck } from 'react-icons/fa';

// const allCourses = [
//     { id: 1, title: "Full Stack Web Development", instructor: "Sarah Chen", duration: "12 weeks", students: "8.4k", level: "Intermediate", price: "৳4,999", image: "https://picsum.photos/id/1015/800/500", description: "Learn modern web development with React, Next.js, Node.js, and MongoDB. Build real-world projects." },
//     { id: 2, title: "UI/UX Design Mastery", instructor: "Alex Rivera", duration: "8 weeks", students: "5.2k", level: "Beginner", price: "৳3,499", image: "https://picsum.photos/id/201/800/500", description: "Master user-centered design, Figma, prototyping, and design systems." },
//     { id: 3, title: "Digital Marketing 2026", instructor: "Michael Torres", duration: "10 weeks", students: "6.1k", level: "Advanced", price: "৳4,299", image: "https://picsum.photos/id/301/800/500", description: "Complete digital marketing strategy including SEO, Social Media, and Google Ads." },
//     { id: 4, title: "Data Science & Analytics", instructor: "Priya Sharma", duration: "14 weeks", students: "4.8k", level: "Intermediate", price: "৳5,999", image: "https://picsum.photos/id/401/800/500", description: "Learn Python, Machine Learning, Data Visualization and Statistical Analysis." },
// ];

// export default function CourseDetail() {
//     const { id } = useParams();
//     const course = allCourses.find(c => c.id === parseInt(id));

//     if (!course) {
//         return (
//             <>
//                 <div className="min-h-screen flex items-center justify-center">
//                     <h1 className="text-3xl">Course not found</h1>
//                 </div>
//             </>
//         );
//     }

//     return (
//         <>

//             <div className="min-h-screen bg-base-200">
//                 <div className="max-w-6xl mx-auto px-6 py-10">
//                     <div className="grid lg:grid-cols-2 gap-12">
//                         {/* Left Side - Image & Info */}
//                         <div>
//                             <img
//                                 src={course.image}
//                                 alt={course.title}
//                                 className="rounded-2xl w-full shadow-2xl"
//                             />
//                             <div className="mt-8 flex gap-6 text-sm">
//                                 <div className="flex items-center gap-2">
//                                     <Clock size={20} /> {course.duration}
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Users size={20} /> {course.students} students
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Star className="text-yellow-500" size={20} /> 4.8
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Details */}
//                         <div>
//                             <div className="badge badge-primary badge-lg mb-4">{course.level}</div>
//                             <h1 className="text-4xl font-bold leading-tight mb-4">{course.title}</h1>
//                             <p className="text-lg opacity-70 mb-6">by {course.instructor}</p>

//                             <div className="text-4xl font-bold text-primary mb-8">{course.price}</div>

//                             <div className="flex gap-4 mb-10">
//                                 <button className="btn btn-primary btn-lg flex-1">
//                                     <Play size={22} /> Enroll Now
//                                 </button>
//                                 <button className="btn btn-outline btn-lg flex-1">Add to Wishlist</button>
//                             </div>

//                             <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
//                             <p className="leading-relaxed text-base-content/80">
//                                 {course.description}
//                             </p>

//                             <div className="mt-10">
//                                 <h3 className="font-semibold mb-4">What you'll learn:</h3>
//                                 <ul className=" space-y-3 text-sm">
//                                     <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Real-world projects</li>
//                                     <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Industry best practices</li>
//                                     <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Certificate upon completion</li>
//                                     <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Lifetime access</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }






'use client';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Clock, Users, Star, Play, BookOpen } from 'lucide-react';

const allCourses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        instructor: "Sarah Chen",
        duration: "12 weeks",
        students: "8.4k",
        level: "Intermediate",
        price: "৳4,999",
        image: "https://i.ibb.co.com/cXrTDds9/1015-600x400.jpg",
        description: "Master modern full-stack development with Next.js, React, Node.js, and MongoDB. Build production-ready applications.",
        rating: 4.9
    },
    {
        id: 2,
        title: "UI/UX Design Mastery",
        instructor: "Alex Rivera",
        duration: "8 weeks",
        students: "5.2k",
        level: "Beginner",
        price: "৳3,499",
        image: "https://picsum.photos/id/201/800/500",
        description: "Learn user-centered design, Figma, prototyping, and modern design systems from industry experts.",
        rating: 4.8
    },
    {
        id: 3,
        title: "Digital Marketing 2026",
        instructor: "Michael Torres",
        duration: "10 weeks",
        students: "6.1k",
        level: "Advanced",
        price: "৳4,299",
        image: "https://i.ibb.co.com/KzRK065J/201-600x400.jpg",
        description: "Complete digital marketing strategy including SEO, Content Marketing, Social Media, and Paid Advertising.",
        rating: 4.7
    },
];

export default function CourseDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const course = allCourses.find(c => c.id === parseInt(id));

   
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await authClient.getSession();
                if (!data?.user) {
                  
                    router.push(`/login?callback=/courses/${id}`);
                } else {
                    setUser(data.user);
                }
            } catch (error) {
                router.push(`/login?callback=/courses/${id}`);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [id, router]);

    if (loading) {
        return (
            <>

                <div className="min-h-screen flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </>
        );
    }

    if (!course) {
        return (
            <>

                <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-3xl">Course not found 😢</h1>
                </div>
            </>
        );
    }

    return (
        <>

            <div className="min-h-screen bg-base-200">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left img */}
                        <div>
                            <img
                                src={course.image}
                                alt={course.title}
                                className="rounded-3xl w-full shadow-2xl"
                            />
                            <div className="mt-8 flex items-center gap-8 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock size={22} /> {course.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={22} /> {course.students} students
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="text-yellow-500" size={22} /> {course.rating}
                                </div>
                            </div>
                        </div>

                        {/* Right Details */}
                        <div>
                            <div className="badge badge-primary badge-lg mb-4">{course.level}</div>
                            <h1 className="text-4xl font-bold leading-tight mb-3">{course.title}</h1>
                            <p className="text-xl opacity-70 mb-6">by {course.instructor}</p>

                            <div className="text-4xl font-bold text-primary mb-8">{course.price}</div>

                            <div className="flex gap-4 mb-10">
                                <button className="btn btn-primary btn-lg flex-1 text-lg">
                                    <Play size={24} /> Enroll Now
                                </button>
                            </div>

                            <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
                            <p className="leading-relaxed text-base-content/80 text-lg">
                                {course.description}
                            </p>

                            {/* Curriculum Section */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <BookOpen /> Course Curriculum
                                </h2>
                                <div className="space-y-2 font-semibold ">
                                    {[
                                        "Introduction & Setup",
                                        "Core Concepts & Fundamentals",
                                        "Building Real Projects",
                                        "Advanced Techniques",
                                        "Deployment & Best Practices",
                                        "Final Project & Assessment"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-base-100 p-5 rounded-xl">
                                            <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium">
                                                {index + 1}
                                            </div>
                                            <p className="font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}