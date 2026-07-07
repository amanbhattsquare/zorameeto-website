import LegalDocumentPage from "@/components/LegalDocumentPage";
import { termsOfService } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Zorameeto rules for accounts, paid features, wallet balances, gifts, calls, user content and disputes.",
};

export default function TermsAndConditions() {
  return <LegalDocumentPage document={termsOfService} />;
}
