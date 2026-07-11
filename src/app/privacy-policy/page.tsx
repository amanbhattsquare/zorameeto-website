import LegalDocumentPage from "@/components/LegalDocumentPage";
import { privacyPolicy } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Zorameeto, a product owned and managed by Bhatt Square Private Limited, collects, uses, shares, protects and retains personal data.",
};

export default function PrivacyPolicy() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
