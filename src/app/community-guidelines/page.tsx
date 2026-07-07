import LegalDocumentPage from "@/components/LegalDocumentPage";
import { communityGuidelines } from "@/content/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Read Zorameeto safety and conduct standards for profiles, chat, calls, gifts, reporting and moderation.",
};

export default function CommunityGuidelines() {
  return <LegalDocumentPage document={communityGuidelines} />;
}
