import React from 'react';
import { AlertCircle, Filter } from 'lucide-react';

const alerts = [
  {
    id: 1,
    title: 'Suspicious Movement Detected',
    location: 'Parking Lot - Camera 3',
    time: '2 minutes ago',
    severity: 'high',
    description: 'Multiple individuals displaying unusual movement patterns near the ATM area.',
  },
  {
    id: 2,
    title: 'Unidentified Object',
    location: 'Main Entrance - Camera 1',
    time: '15 minutes ago',
    severity: 'medium',
    description: 'Unknown object left unattended near the entrance.',
  },
  {
    id: 3,
    title: 'Crowd Formation',
    location: 'Lobby Area - Camera 2',
    time: '1 hour ago',
    severity: 'low',
    description: 'Unusual gathering of people in the lobby area.',
  },
  {
    id: 4,
    title: 'Aggressive Behavior',
    location: 'ATM Zone - Camera 4',
    time: '2 hours ago',
    severity: 'high',
    description: 'Individual displaying aggressive behavior towards staff.',
  },
];

function AlertsPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Security Alerts</h2>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          Filter Alerts
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div>Alert</div>
          <div>Location</div>
          <div>Time</div>
          <div>Severity</div>
        </div>

        <div className="divide-y divide-gray-200">
          {alerts.map((alert) => (
            <div key={alert.id} className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">{alert.title}</p>
                <p className="mt-1 text-sm text-gray-500">{alert.description}</p>
              </div>
              <div className="flex items-center text-gray-900">{alert.location}</div>
              <div className="flex items-center text-gray-500">{alert.time}</div>
              <div className="flex items-center">
                <SeverityBadge severity={alert.severity} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const severityConfig = {
    low: {
      color: 'bg-yellow-100 text-yellow-800',
      label: 'Low Risk',
    },
    medium: {
      color: 'bg-orange-100 text-orange-800',
      label: 'Medium Risk',
    },
    high: {
      color: 'bg-red-100 text-red-800',
      label: 'High Risk',
    },
  };

  const config = severityConfig[severity as keyof typeof severityConfig];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <AlertCircle className="h-3 w-3 mr-1" />
      {config.label}
    </span>
  );
}

export default AlertsPanel;