'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';   
import { User, LogOut, Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();   

  useEffect(() => {
    authClient.getSession().then(res => {
      if (res.data?.user) setUser(res.data.user);
    });
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    setMenuOpen(false);
    window.location.href = '/';
  };

  const closeMenu = () => setMenuOpen(false);

  // Active link 
  const isActive = (path) => {
    return pathname === path ? 'text-primary font-semibold' : 'hover:text-primary transition-colors';
  };

  return (
    <nav className="bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">SS</div>
            <Link href="/" className="text-2xl font-bold tracking-tight">SkillSphere</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={isActive('/')}>Home</Link>
            <Link href="/courses" className={isActive('/courses')}>Courses</Link>
            {user && <Link href="/profile" className={isActive('/profile')}>My Profile</Link>}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <User size={18} />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{user.name || user.email}</span>
                </div>
                <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link href="/login" className="btn btn-ghost">Login</Link>
                <Link href="/register" className="btn btn-primary">Register</Link>
              </div>
            )}

            {/* Hamburger Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden btn btn-ghost btn-circle"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t shadow-lg">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            <Link href="/" onClick={closeMenu} className={isActive('/')}>Home</Link>
            <Link href="/courses" onClick={closeMenu} className={isActive('/courses')}>Courses</Link>
            
            {user && (
              <Link href="/profile" onClick={closeMenu} className={isActive('/profile')}>My Profile</Link>
            )}

            {!user && (
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Link href="/login" onClick={closeMenu} className="btn btn-ghost justify-start">Login</Link>
                <Link href="/register" onClick={closeMenu} className="btn btn-primary">Register</Link>
              </div>
            )}

            {user && (
              <button 
                onClick={handleLogout}
                className="btn btn-ghost justify-start text-red-500"
              >
                <LogOut size={20} /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}





// 'use client';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { User, LogOut, Menu, X } from 'lucide-react';
// import { authClient } from '@/lib/auth-client';

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     authClient.getSession().then(res => {
//       if (res.data?.user) setUser(res.data.user);
//     });
//   }, []);

//   const handleLogout = async () => {
//     await authClient.signOut();
//     setUser(null);
//     setMenuOpen(false);
//     window.location.href = '/';
//   };

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className="bg-base-100 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">SS</div>
//             <Link href="/" className="text-2xl font-bold tracking-tight">SkillSphere</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link href="/" className="hover:text-primary transition-colors">Home</Link>
//             <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
//             {user && <Link href="/profile" className="hover:text-primary transition-colors">My Profile</Link>}
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-3">
//             {user ? (
//               <div className="hidden md:flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="avatar">
//                     <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
//                       <User size={18} />
//                     </div>
//                   </div>
//                   <span className="text-sm font-medium">{user.name || user.email}</span>
//                 </div>
//                 <button onClick={handleLogout} className="btn btn-ghost btn-sm">
//                   <LogOut size={18} />
//                 </button>
//               </div>
//             ) : (
//               <div className="hidden md:flex gap-2">
//                 <Link href="/login" className="btn btn-ghost">Login</Link>
//                 <Link href="/register" className="btn btn-primary">Register</Link>
//               </div>
//             )}

//             {/* Hamburger Button */}
//             <button 
//               onClick={() => setMenuOpen(!menuOpen)} 
//               className="md:hidden btn btn-ghost btn-circle"
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile view */}
//       {menuOpen && (
//         <div className="md:hidden bg-base-100 border-t shadow-lg">
//           <div className="px-6 py-8 flex flex-col gap-6 text-lg">
//             <Link href="/" onClick={closeMenu} className="hover:text-primary">Home</Link>
//             <Link href="/courses" onClick={closeMenu} className="hover:text-primary">Courses</Link>
            
//             {user && (
//               <Link href="/profile" onClick={closeMenu} className="hover:text-primary">My Profile</Link>
//             )}

//             {/* Auth Buttons for Mobile */}
//             {!user && (
//               <div className="flex flex-col gap-3 pt-4 border-t">
//                 <Link href="/login" onClick={closeMenu} className="btn btn-ghost justify-start">Login</Link>
//                 <Link href="/register" onClick={closeMenu} className="btn btn-primary">Register</Link>
//               </div>
//             )}

//             {user && (
//               <button 
//                 onClick={handleLogout}
//                 className="btn btn-ghost justify-start text-red-500"
//               >
//                 <LogOut size={20} /> Logout
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }