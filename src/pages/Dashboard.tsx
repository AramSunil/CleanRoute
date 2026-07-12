import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router-dom';
import CitizenDashboard from './CitizenDashboard';
import DriverDashboard from './DriverDashboard';
import AdminDashboard from './AdminDashboard';

export default function Dashboard() {
  const { user, role, isApproved, loading } = useAuth();

  if (loading || role === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  if (role === ('deleted' as any)) {
    return <Navigate to="/removed" replace />;
  }

  switch (role) {
    case 'driver':
      if (!isApproved) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
            <h1 className="text-2xl font-bold mb-2">Pending Local Admin Approval</h1>
            <p className="text-muted-foreground max-w-sm">
              Your driver account has been created but needs an admin to grant permissions before you can see pickups.
            </p>
            <button onClick={() => window.location.reload()} className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Refresh Status
            </button>
          </div>
        );
      }
      return <Navigate to="/dashboard/driver" replace />;
    case 'admin':
      if (!isApproved) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
            <h1 className="text-2xl font-bold mb-2">Pending Head Admin Approval</h1>
            <p className="text-muted-foreground max-w-sm">
              Your admin account has been created but needs the Head Admin to grant permissions before you can access the system.
            </p>
            <button onClick={() => window.location.reload()} className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Refresh Status
            </button>
          </div>
        );
      }
      return <Navigate to="/dashboard/admin" replace />;
    default:
      return <Navigate to="/dashboard/citizen" replace />;
  }
}
