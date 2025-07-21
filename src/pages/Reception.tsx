
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Reception = () => {
  return (
    <PageTemplate 
      title="Reception" 
      description="Manage patient registrations, appointments, and front desk operations"
      actions={
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Registration
        </Button>
      }
    />
  );
};

export default Reception;
