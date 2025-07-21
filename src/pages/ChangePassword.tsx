
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChangePassword = () => {
  return (
    <PageTemplate 
      title="Change Password" 
      description="Update your account password for enhanced security"
    >
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Change Your Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default ChangePassword;
