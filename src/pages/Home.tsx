
import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  BedDouble,
  UserCheck,
  AlertCircle
} from "lucide-react";

const Home = () => {
  const stats = [
    { title: "Total Patients", value: "1,234", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Today's Appointments", value: "58", icon: Calendar, color: "text-green-600", bg: "bg-green-100" },
    { title: "Active Staff", value: "156", icon: UserCheck, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Occupied Beds", value: "89/120", icon: BedDouble, color: "text-orange-600", bg: "bg-orange-100" },
    { title: "Revenue Today", value: "$12,450", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Emergency Cases", value: "3", icon: AlertCircle, color: "text-red-600", bg: "bg-red-100" },
  ];

  return (
    <PageTemplate 
      title="Dashboard" 
      description="Welcome to your Hospital Management System"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bg}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "New patient John Doe registered",
                  "Lab report ready for Patient ID #1234",
                  "Discharge processed for Room 301",
                  "Emergency admission in Ward A",
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Patient Satisfaction</span>
                  <span className="text-sm font-medium text-green-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bed Occupancy</span>
                  <span className="text-sm font-medium text-orange-600">74%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Staff Attendance</span>
                  <span className="text-sm font-medium text-blue-600">96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Revenue Growth</span>
                  <span className="text-sm font-medium text-purple-600">+12%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Home;
