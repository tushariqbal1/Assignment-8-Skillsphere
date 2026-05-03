
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { Search, Clock, Users } from 'lucide-react';


// const allCourses = [
//   { 
//     id: 1, 
//     title: "Full Stack Web Development", 
//     category: "Development", 
//     instructor: "Sarah Chen", 
//     duration: "12 weeks", 
//     students: "8.4k", 
//     image: "https://i.ibb.co.com/cXrTDds9/1015-600x400.jpg", 
//     level: "Intermediate", 
//     price: "৳4,999" 
//   },
//   { 
//     id: 2, 
//     title: "UI/UX Design Mastery", 
//     category: "Design", 
//     instructor: "Alex Rivera", 
//     duration: "8 weeks", 
//     students: "5.2k", 
//     image: "https://i.ibb.co.com/KzRK065J/201-600x400.jpg", 
//     level: "Beginner", 
//     price: "৳3,499" 
//   },
//   { 
//     id: 3, 
//     title: "Digital Marketing 2026", 
//     category: "Marketing", 
//     instructor: "Michael Torres", 
//     duration: "10 weeks", 
//     students: "6.1k", 
//     image: "https://i.ibb.co.com/9Hz5GTcD/301-600x400.jpg", 
//     level: "Advanced", 
//     price: "৳4,299" 
//   },
//   { 
//     id: 4, 
//     title: "Data Science & Analytics", 
//     category: "Data", 
//     instructor: "Priya Sharma", 
//     duration: "14 weeks", 
//     students: "4.8k", 
//     image: "https://i.ibb.co.com/VYRxNcrL/401-600x400.jpg", 
//     level: "Intermediate", 
//     price: "৳5,999" 
//   },
// ];

// export default function Courses() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Development', 'Design', 'Marketing', 'Data'];

//   const filteredCourses = allCourses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>


//       <div className="min-h-screen bg-base-200">
//         {/* heading */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h1 className="text-5xl font-bold mb-4">Explore All Courses</h1>
//             <p className="text-xl opacity-90">Learn from industry experts. Grow your career.</p>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 py-10">

//           <div className="flex flex-col md:flex-row gap-4 mb-10">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-3.5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 className="input input-bordered w-full pl-12"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
//               {categories.map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Courses k Grid kora */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map(course => (
//               <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all group">
//                 <figure className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 right-4 badge badge-primary">{course.level}</div>
//                 </figure>

//                 <div className="card-body">
//                   <h3 className="card-title text-lg group-hover:text-primary transition-colors">
//                     {course.title}
//                   </h3>
//                   <p className="text-sm opacity-70">by {course.instructor}</p>

//                   <div className="flex justify-between text-sm mt-4">
//                     <div className="flex items-center gap-1">
//                       <Clock size={16} /> {course.duration}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Users size={16} /> {course.students}
//                     </div>
//                   </div>

//                   <div className="card-actions mt-6 flex flex-col gap-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-bold text-primary">{course.price}</span>
//                     </div>

//                     {/* btns */}
//                     <div className="flex gap-3">
//                       <Link
//                         href={`/courses/${course.id}`}
//                         className="btn btn-primary flex-1"
//                       >
//                         Enroll Now
//                       </Link>
//                       <Link
//                         href={`/courses/${course.id}`}
//                         className="btn btn-outline btn-primary flex-1 px-5 py-2"
//                       >
//                         Show Details
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-20 text-xl">
//               No courses found. Try different search term.
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }





'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Clock, Users } from 'lucide-react';
import { courses } from '@/lib/courses';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Data'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Explore All Courses</h1>
          <p className="text-xl opacity-90">Learn from industry experts. Grow your career.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
       
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="input input-bordered w-full pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all group">
              <figure className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 badge badge-primary">{course.level}</div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm opacity-70">by {course.instructor}</p>

                <div className="flex justify-between text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} /> {course.students}
                  </div>
                </div>

                <div className="card-actions mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/courses/${course.id}`}
                      className="btn btn-primary flex-1"
                    >
                      Enroll Now
                    </Link>
                    <Link
                      href={`/courses/${course.id}`}
                      className="btn btn-outline btn-primary flex-1"
                    >
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 text-xl">
            No courses found. Try different search term.
          </div>
        )}
      </div>
    </div>
  );
}