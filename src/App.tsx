import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { NavLink } from 'react-router-dom';
import { HistoryProvider } from './context/HistoryContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CommunityProvider } from './context/CommunityContext';
import { Shield, Image, Video, FileText, Mail, Chrome, Clock, Users, LogOut, User } from 'lucide-react';
import logo from './assets/logo.png';

function AppContent() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="FakeEye" className="h-10" />
              <div>
                <h1 className="text-gray-900">FakeEye</h1>
                <p className="text-sm text-gray-600">AI Content Detection Platform</p>
              </div>
            </div>
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className="w-8 h-8 bg-[#00B7B5]/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#005461]" />
                    </div>
                  )}
                  <span className="text-sm text-gray-900">{user?.username}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/auth" className="flex items-center gap-2 px-4 py-2 bg-[#018790] text-white rounded-lg hover:bg-[#005461] transition-colors">
                <User className="w-4 h-4" />
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto">
            <NavLink to="/image" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Image className="w-4 h-4" />
              <span>Image Detection</span>
            </NavLink>

            <NavLink to="/video" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Video className="w-4 h-4" />
              <span>Video Detection</span>
            </NavLink>

            <NavLink to="/text" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <FileText className="w-4 h-4" />
              <span>Text Detection</span>
            </NavLink>

            <NavLink to="/email" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Mail className="w-4 h-4" />
              <span>Email Detection</span>
            </NavLink>

            <NavLink to="/extension" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Chrome className="w-4 h-4" />
              <span>Chrome Extension</span>
            </NavLink>

            <NavLink to="/history" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Clock className="w-4 h-4" />
              <span>History</span>
            </NavLink>

            <NavLink to="/community" className={({isActive}) => `flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${isActive ? 'border-[#018790] text-[#005461]' : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}`}>
              <Users className="w-4 h-4" />
              <span>Community</span>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AppRoutes />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            FakeEye uses advanced machine learning models to detect AI-generated content
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <HistoryProvider>
        <CommunityProvider>
          <AppContent />
        </CommunityProvider>
      </HistoryProvider>
    </AuthProvider>
  );
}