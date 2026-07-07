import LegalDocumentPage from "@/components/LegalDocumentPage";
import { privacyPolicy } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Zorameeto collects, uses, shares, protects and retains personal data.",
};

export default function PrivacyPolicy() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
