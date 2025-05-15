// import { useState } from 'react';

// export default function Profile() {
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john@example.com',
//     role: 'Manager',
//     department: 'Engineering',
//     phone: '+1 (555) 123-4567',
//     location: 'New York, NY',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement profile update
//   };

//   return (
//     <div className="space-y-6">
//       <div className="md:grid md:grid-cols-3 md:gap-6">
//         <div className="md:col-span-1">
//           <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
//           <p className="mt-1 text-sm text-gray-600">
//             Update your personal information and preferences.
//           </p>
//         </div>

//         <div className="mt-5 md:mt-0 md:col-span-2">
//           <form onSubmit={handleSubmit}>
//             <div className="shadow sm:rounded-md sm:overflow-hidden">
//               <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                 <div className="grid grid-cols-6 gap-6">
//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={profile.name}
//                       onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//                       className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       value={profile.email}
//                       onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//                       className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                       Role
//                     </label>
//                     <input
//                       type="text"
//                       name="role"
//                       id="role"
//                       value={profile.role}
//                       readOnly
//                       className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="department" className="block text-sm font-medium text-gray-700">
//                       Department
//                     </label>
//                     <input
//                       type="text"
//                       name="department"
//                       id="department"
//                       value={profile.department}
//                       onChange={(e) => setProfile({ ...profile, department: e.target.value })}
//                       className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       value={profile.phone}
//                       onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
//                       className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       name="location"
//                       id="location"
//                       value={profile.location}
//                       onChange={(e) => setProfile({ ...profile, location: e.target.value })}
//                       className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     placeholder="Leave blank to keep current password"
//                   />
//                 </div>
//               </div>

//               <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'יוחנן לוי',
    email: 'yochanan@example.com',
    role: 'מנהל',
    department: 'הנדסה',
    phone: '+972 (55) 123-4567',
    location: 'תל אביב, ישראל',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h1 className="text-2xl font-semibold text-gray-900">פרופיל</h1>
          <p className="mt-1 text-sm text-gray-600">
            עדכון המידע האישי וההעדפות שלך.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      שם
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      תפקיד
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={profile.role}
                      readOnly
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                      מחלקה
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      value={profile.department}
                      onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      מיקום
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    סיסמה חדשה
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="השאר ריק כדי לשמור על הסיסמה הנוכחית"
                  />
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  שמור שינויים
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}