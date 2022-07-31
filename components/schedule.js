// import React, { useState } from "react";
// import data from "../data.json";

// export default function Schedule() {
//   const [expanded, setExpanded] = useState(false);
//   const { weeks } = data;
//   return (
//     <div className="px-5 mx-auto">
//       <ol>
//         {weeks.map((week, index) => {
//           week && (
//             <li key={index}>
//               <div class="">
//                 <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
//                 <p class="text-gray-500 text-sm">{week.title}</p>
//               </div>
//               <div class="mt-0.5 ml-4 mb-6">
//                 <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
//                   {week.description}
//                 </h4>
//                 <div class="flex flex-start items-center">
//                   ``
//                   <p class="text-gray-500 ml-2">
//                     {week.events.descriptions.event1}
//                   </p>
//                 </div>

//                 {/* accordion display start */}
//                 <div
//                   class="accordion accordion-flush"
//                   id="accordionFlushExample"
//                 >
//                   <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
//                     <h2 class="accordion-header mb-0" id="flush-headingOne">
//                       <button
//                         class="accordion-button
//                             relative
//                             flex
//                             items-center
//                             w-full
//                             pt-2
//                             px-5
//                             text-base text-black-500 text-left
//                             border-0
//                             rounded-none
//                             transition-all duration-200 ease-in-out
//                             focus:outline-none"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#flush-collapseOne"
//                         aria-expanded="false"
//                         aria-controls="flush-collapseOne"
//                         onClick={() => setExpanded(!expanded)}
//                       >
//                         {expanded ? "See Less" : "See More"}
//                       </button>
//                     </h2>
//                     <div
//                       id="flush-collapseOne"
//                       class="accordion-collapse border-0 collapse show"
//                       aria-labelledby="flush-headingOne"
//                       data-bs-parent="#accordionFlushExample"
//                     >
//                       <div class="accordion-body px-5">
//                         {expanded && (
//                           <div className="text-gray-500">
//                             <p>
//                               Good ways to build communities - Tailor it around
//                               the needs of participants, Moderation (Code of
//                               conduct), Keep it active and users engaged, roles
//                               (moderators), rewards, and incentives
//                             </p>{" "}
//                             <br />
//                             <p>Choose the right platform.</p> <br />
//                             <p>
//                               Deliver on your value promises. Why is it
//                               beneficial for any person to be in your community?
//                               Deliver on it consistently.
//                             </p>{" "}
//                             <br />
//                             <p>
//                               Create a self-sustaining community model that
//                               thrives in your absence.
//                             </p>{" "}
//                             <br />
//                             <p>
//                               Understand that the community is not about you,
//                               it’s about your participants. Don’t sell without
//                               cause, create the problem and offer the solution.
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* accordion end */}
//               </div>
//             </li>
//           );
//         })}

//         {/*         <li>
//           <div class="flex flex-start items-center pt-2">
//             <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
//             <p class="text-gray-500 text-sm">week 2</p>
//           </div>
//           <div class="mt-0.5 ml-4 mb-6">
//             <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
//               Conferences & Events
//             </h4>
//             <p class="text-gray-500 mb-3">
//               Why do companies need conferences and events? How does it help
//               them?
//             </p>
//           </div>
//         </li>

//         <li>
//           <div class="flex flex-start items-center pt-2">
//             <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
//             <p class="text-gray-500 text-sm">week 3</p>
//           </div>
//           <div class="mt-0.5 ml-4 pb-5">
//             <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
//               Dev Marketing/Evangelism
//             </h4>
//             <p class="text-gray-500 mb-3">
//               Why is Dev Evangelism a thing, why do companies need it? Every
//               company that offers developer tools as a service or solution needs
//               to sell/market said tool to Devs
//             </p>
//           </div>
//         </li> */}
//       </ol>
//     </div>
//   );
// }
