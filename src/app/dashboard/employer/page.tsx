export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard!</h1>
        <p className="text-muted-foreground text-lg">
          This is where you'll manage your jobs, profiles, and applications.
          We're building amazing features to help you succeed in your career
          journey.
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-semibold mb-2">Profile Management</h3>
          <p className="text-sm text-muted-foreground">
            Complete your professional profile to attract the right
            opportunities.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-semibold mb-2">Job Applications</h3>
          <p className="text-sm text-muted-foreground">
            Track your applications and stay updated on their progress.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="font-semibold mb-2">Recommendations</h3>
          <p className="text-sm text-muted-foreground">
            Discover jobs that match your skills and career goals.
          </p>
        </div>
      </div>
    </div>
  );
}
