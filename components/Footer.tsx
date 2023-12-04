// "use client";

// import config from "@/config/config.json";
// import menu from "@/config/menu.json";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import React from "react";
// import { ChevronRight } from "lucide-react";
// import { INavigationLink } from "./Navbar";

// const Footer = () => {
//   const { copyright } = config.params;
//   const {logo}: {logo: string;} = config.site;
//   // distructuring the main menu from menu object
//   const { main, importantLinks }: { main: INavigationLink[], importantLinks:INavigationLink[] } = menu;
//   const pathname = usePathname();


//   return (
//     <footer className="bg-white">
//       <div
//         className="mx-auto max-w-screen-xl  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
//       >
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
//           <div className="col-span-1">
//             <div className="text-teal-600">
//             <Image
//               width={160}
//               height={30}
//               src={logo}
//               alt="footer logo here"
//               priority
//             />
//             </div>

//             <p className="mt-4 max-w-xs text-gray-500">
//             Helped more than 10k candidates build their career across various industries and geographies.
//             </p>

//             <ul className="mt-8 flex gap-6">
//             <li>
//                 <Link
//                   href="https://www.linkedin.com/company/talentworkx-a-detask-brand/about/"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-700 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">LinkedIn</span>

//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="https://www.facebook.com/profile.php?id=61554116126729"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-700 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Facebook</span>

//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="https://www.instagram.com/talentworkx/"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-700 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Instagram</span>

//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="https://twitter.com/talentworkx"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-700 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Twitter</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
//                     <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
//                   </svg>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-x-8"
//           >
//             {main.map((menu, i)=>(
//               <div key={i} className="ml-4">
//                 {menu.hasChildren && <h1 className="text-xl mb-3">{menu.name}</h1> }
//                 <ul className=" grid grid-cols-2 gap-y-2">
//                 {menu.children?.map((child, i) => (
//                   <li className="col-span-2" key={`children-${i}`}>
//                     <Link
//                       href={child.url}
//                       className={`block text-sm font-semibold text-gray-600 hover:text-[#97144D]  ${
//                         (pathname === `${child.url}/` ||
//                           pathname === child.url) &&
//                         "active"
//                       }`}
//                     >
//                       <p className="flex items-center gap-x-2">
//                       <ChevronRight/>
//                       {child.name}
//                       </p>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               </div>
//             ))}
//           </div>
//           <div>
//           <h1 className="text-xl mb-2 ml-4">Important Links</h1>
//           <ul className=" grid grid-cols-2 gap-x-1 gap-y-2 ml-4">
//                 {importantLinks.map((impLink, i) => (
//                   <li className="col-span-2" key={`implink-${i}`}>
//                     <Link
//                       href={impLink.url}
//                       className={`block text-sm font-semibold text-gray-600 hover:text-[#97144D] ${
//                         (pathname === `${impLink.url}/` ||
//                           pathname === impLink.url) &&
//                         "active"
//                       }`}
//                     >
//                       <p className="flex items-center gap-x-2">
//                       <ChevronRight/>
//                       {impLink.name}
//                       </p>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//           </div>
//         </div>

//         <p className="text-xs text-gray-500">
//           &copy; 2023. TalentWorkx. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


const Footer = () => {
    return (
        <footer className="bg-[#616847]/80 text-white text-center p-4">
            <div className="flex items-center justify-center gap-x-6">&copy; {new Date().getFullYear()} <div className="text-4xl text-[#C2C0A2] font-bold">
          It<span className="text-[#616847]">SPA</span>
        </div>. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
