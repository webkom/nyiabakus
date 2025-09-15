import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Ny i Abakus")
    .items([
      // Single document for site settings
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),

      // Single document for taskforce
      S.listItem()
        .title("Taskforce")
        .child(S.document().schemaType("taskforce").documentId("taskforce")),

      // All other document types except siteSettings and taskforce
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "taskforce"].includes(listItem.getId() ?? "")
      ),
    ]);
