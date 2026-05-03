// 'use client';
// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar';
// import { authClient } from '@/lib/auth-client';
// import { Award, BookOpen } from 'lucide-react';

// export default function Profile() {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         authClient.getSession().then(({ data }) => {
//             if (data?.user) {
//                 setUser(data.user);
//             } else {
//                 window.location.href = '/login';
//             }
//             setLoading(false);
//         });
//     }, []);

//     if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

//     return (
//         <>
        
//             <div className="max-w-5xl mx-auto px-6 py-12">
//                 <div className="flex flex-col md:flex-row gap-10">
//                     {/* Sidebar */}
//                     <div className="md:w-80">
//                         <div className="card bg-base-100 shadow-xl p-8 text-center">
//                             <div className="avatar mx-auto">
//                                 <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl">
//                                     👤
//                                 </div>
//                             </div>
//                             <h2 className="text-2xl font-bold mt-6">{user?.name}</h2>
//                             <p className="text-sm opacity-60 mt-1">{user?.email}</p>

//                             <div className="mt-8 space-y-4">
//                                 <div className="stat bg-base-200 rounded-box p-4">
//                                     <div className="stat-value text-primary text-3xl">7</div>
//                                     <div className="stat-desc">Courses Enrolled</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Content */}
//                     <div className="flex-1">
//                         <h1 className="text-4xl font-bold mb-8">My Learning</h1>

//                         <div className="grid gap-6">
//                             {[1, 2, 3].map(i => (
//                                 <div key={i} className="card bg-base-100 shadow-md flex flex-col md:flex-row gap-6 p-6">
//                                     <div className="md:w-56 h-40 bg-base-300 rounded-xl flex-shrink-0" />
//                                     <div className="flex-1">
//                                         <h3 className="font-semibold text-xl">Advanced React & Next.js</h3>
//                                         <p className="text-sm opacity-70 mt-1">Progress: 65%</p>
//                                         <progress className="progress progress-primary w-full mt-3" value="65" max="100"></progress>
//                                         <button className="btn btn-primary btn-sm mt-6">
//                                             <BookOpen size={18} /> Continue Learning
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }




'use client';
import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Award, BookOpen, Edit } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authClient.getSession().then(({ data }) => {
            if (data?.user) {
                setUser(data.user);
            } else {
                window.location.href = '/login';
            }
            setLoading(false);
        });
    }, []);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );

    return (
        <>
 
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-10">
                   
                    <div className="md:w-80">
                        <div className="card bg-base-100 shadow-xl p-8 text-center">
                            <div className="avatar mx-auto">
                                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl">
                                    👤
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mt-6">{user?.name}</h2>
                            <p className="text-sm opacity-60 mt-1">{user?.email}</p>

                            <div className="mt-8 space-y-4">
                                <div className="stat bg-base-200 rounded-box p-4">
                                    <div className="stat-value text-primary text-3xl">7</div>
                                    <div className="stat-desc">Courses Enrolled</div>
                                </div>
                            </div>

                           
                            <Link 
                                href="/profile/edit" 
                                className="btn btn-outline btn-primary mt-8 w-full flex items-center justify-center gap-2"
                            >
                                <Edit size={18} />
                                Update Information
                            </Link>
                        </div>
                    </div>

                  
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-8">My Learning</h1>

                        <div className="grid gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="card bg-base-100 shadow-md flex flex-col md:flex-row gap-6 p-6">
                                    <div className="md:w-56 h-40 bg-base-300 rounded-xl flex-shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-xl">Advanced React & Next.js</h3>
                                        <p className="text-sm opacity-70 mt-1">Progress: 65%</p>
                                        <progress className="progress progress-primary w-full mt-3" value="65" max="100"></progress>
                                        <button className="btn btn-primary btn-sm mt-6">
                                            <BookOpen size={18} /> Continue Learning
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}