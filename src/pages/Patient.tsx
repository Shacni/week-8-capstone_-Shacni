
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

const Patient = () => {
  return (
    <PageTemplate 
      title="Patient Management" 
      description="View and manage patient records, medical history, and personal information"
      actions={
        <>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search Patient
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Patient
          </Button>
        </>
      }
    />
  );
};

export default Patient;
