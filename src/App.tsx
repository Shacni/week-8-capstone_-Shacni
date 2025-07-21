
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reception from "./pages/Reception";
import Patient from "./pages/Patient";
import Nurse from "./pages/Nurse";
import DayCareDoctor from "./pages/DayCareDoctor";
import Phlebotomy from "./pages/Phlebotomy";
import Laboratory from "./pages/Laboratory";
import LaboratoryReports from "./pages/LaboratoryReports";
import Radiology from "./pages/Radiology";
import Dental from "./pages/Dental";
import Optical from "./pages/Optical";
import Billing from "./pages/Billing";
import Expenses from "./pages/Expenses";
import Bills from "./pages/Bills";
import Vendors from "./pages/Vendors";
import VoteHeads from "./pages/VoteHeads";
import Claims from "./pages/Claims";
import Registration from "./pages/Registration";
import Admission from "./pages/Admission";
import WardBedStatus from "./pages/WardBedStatus";
import AdmittedDischarged from "./pages/AdmittedDischarged";
import Items from "./pages/Items";
import Packages from "./pages/Packages";
import ReceiptsAdjustments from "./pages/ReceiptsAdjustments";
import LocalPurchaseOrder from "./pages/LocalPurchaseOrder";
import Transfer from "./pages/Transfer";
import Stores from "./pages/Stores";
import OrderStatus from "./pages/OrderStatus";
import Reports from "./pages/Reports";
import MOLTReports from "./pages/MOLTReports";
import DynamicReports from "./pages/DynamicReports";
import ChartOfAccounts from "./pages/ChartOfAccounts";
import JournalReports from "./pages/JournalReports";
import ETIMS from "./pages/ETIMS";
import GeneralSettings from "./pages/GeneralSettings";
import AllergiesSettings from "./pages/AllergiesSettings";
import InvestigationSettings from "./pages/InvestigationSettings";
import PrescriptionSettings from "./pages/PrescriptionSettings";
import InpatientSettings from "./pages/InpatientSettings";
import HomeBasedCare from "./pages/HomeBasedCare";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SidebarProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reception" element={<Reception />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/nurse" element={<Nurse />} />
              <Route path="/daycare-doctor" element={<DayCareDoctor />} />
              <Route path="/phlebotomy" element={<Phlebotomy />} />
              <Route path="/laboratory" element={<Laboratory />} />
              <Route path="/laboratory-reports" element={<LaboratoryReports />} />
              <Route path="/radiology" element={<Radiology />} />
              <Route path="/dental" element={<Dental />} />
              <Route path="/optical" element={<Optical />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/vote-heads" element={<VoteHeads />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/ward-bed-status" element={<WardBedStatus />} />
              <Route path="/admitted-discharged" element={<AdmittedDischarged />} />
              <Route path="/items" element={<Items />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/receipts-adjustments" element={<ReceiptsAdjustments />} />
              <Route path="/local-purchase-order" element={<LocalPurchaseOrder />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/order-status" element={<OrderStatus />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/molt-reports" element={<MOLTReports />} />
              <Route path="/dynamic-reports" element={<DynamicReports />} />
              <Route path="/chart-of-accounts" element={<ChartOfAccounts />} />
              <Route path="/journal-reports" element={<JournalReports />} />
              <Route path="/etims" element={<ETIMS />} />
              <Route path="/general-settings" element={<GeneralSettings />} />
              <Route path="/allergies-settings" element={<AllergiesSettings />} />
              <Route path="/investigation-settings" element={<InvestigationSettings />} />
              <Route path="/prescription-settings" element={<PrescriptionSettings />} />
              <Route path="/inpatient-settings" element={<InpatientSettings />} />
              <Route path="/home-based-care" element={<HomeBasedCare />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
