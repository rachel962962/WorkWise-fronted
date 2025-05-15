// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';

// export default function Layout() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="lg:pl-64">
//         <TopBar />
//         <main className="p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }


import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Sidebar />
      <div className="lg:pr-64">
        <TopBar />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
