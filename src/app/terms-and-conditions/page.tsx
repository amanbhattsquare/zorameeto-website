import LegalDocumentPage from "@/components/LegalDocumentPage";
import { termsOfService } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms for Zorameeto, a product owned and operated by Bhatt Square Private Limited.",
};

export default function TermsAndConditions() {
  return <LegalDocumentPage document={termsOfService} />;
}
