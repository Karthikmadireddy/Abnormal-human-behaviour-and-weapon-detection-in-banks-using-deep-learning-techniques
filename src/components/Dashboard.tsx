import React from 'react';
import { AlertCircle, Camera, Users, Shield } from 'lucide-react';

const cameras = [
  { id: 1, name: 'Main Entrance', status: 'active', preview: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Lobby Area', status: 'active', preview: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Parking Lot', status: 'active', preview: 'https://images.unsplash.com/photo-1621953468794-aa2c97f5ccc4?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Back Entrance', status: 'active', preview: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=800&q=80' },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Cameras"
          value="16/16"
          icon={Camera}
          color="text-green-600"
          bgColor="bg-green-100"
        />
        <StatCard
          title="Active Alerts"
          value="2"
          icon={AlertCircle}
          color="text-red-600"
          bgColor="bg-red-100"
        />
        <StatCard
          title="People Detected"
          value="47"
          icon={Users}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <StatCard
          title="Threat Level"
          value="Low"
          icon={Shield}
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            <Alert
              title="Suspicious Movement Detected"
              location="Parking Lot - Camera 3"
              time="2 minutes ago"
              severity="high"
            />
            <Alert
              title="Unidentified Object"
              location="Main Entrance - Camera 1"
              time="15 minutes ago"
              severity="medium"
            />
            <Alert
              title="Crowd Formation"
              location="Lobby Area - Camera 2"
              time="1 hour ago"
              severity="low"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Live Camera Feed</h2>
          <div className="grid grid-cols-2 gap-4">
            {cameras.map((camera) => (
              <div key={camera.id} className="relative">
                <img
                  src={camera.preview}
                  alt={camera.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-lg">
                  <p className="text-white text-sm font-medium">{camera.name}</p>
                  <div className="flex items-center mt-1">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-green-400 text-xs ml-1">Live</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, bgColor }: {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        <div className={`${bgColor} ${color} p-3 rounded-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Alert({ title, location, time, severity }: {
  title: string;
  location: string;
  time: string;
  severity: 'low' | 'medium' | 'high';
}) {
  const severityColors = {
    low: 'bg-yellow-100 text-yellow-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className={`${severityColors[severity]} p-2 rounded-lg`}>
          <AlertCircle className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
}

export default Dashboard;