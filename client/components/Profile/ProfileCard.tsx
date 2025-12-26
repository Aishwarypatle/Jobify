import CustomButton from "../ui/Button";

const ProfileCard = ({ user, handleLogout }: any) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="bg-indigo-600 h-24 w-full" />
      <div className="px-6 pb-6">
        <div className="relative -mt-12 mb-4">
          <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-sm">
            <div className="h-full w-full rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-3xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
          <p className="text-sm text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {user?.email}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Bookmarks</p>
            <p className="text-xl font-bold text-gray-900">{user?.bookmarks.length}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Applied</p>
            <p className="text-xl font-bold text-gray-900">{user?.appliedJobs.length}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="text-xs text-gray-400">
            Joined {new Date(user.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
          </div>
          <CustomButton 
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 bg-transparent hover:bg-blue-100"
                handler={handleLogout}
            >
            Logout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
