import React, { useState } from 'react';
import { AlertCircle, Camera, Menu, Shield, Bell, Settings, Users, LayoutDashboard } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AlertsPanel from './components/AlertsPanel';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'cameras', label: 'Cameras', icon: Camera },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'analytics', label: 'Analytics', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar navItems={navItems} currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-800">Security Surveillance System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Shield className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
        
        <main className="h-[calc(100vh-4rem)] p-6 overflow-auto">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'alerts' && <AlertsPanel />}
        </main>
      </div>
    </div>
  );
}

export default App;