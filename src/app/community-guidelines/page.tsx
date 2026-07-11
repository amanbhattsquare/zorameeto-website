import LegalDocumentPage from "@/components/LegalDocumentPage";
import { communityGuidelines } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Read the safety and conduct standards for Zorameeto, a product owned and managed by Bhatt Square Private Limited.",
};

export default function CommunityGuidelines() {
  return <LegalDocumentPage document={communityGuidelines} />;
}
