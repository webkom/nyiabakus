import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { dataset, projectId } from "./utils/sanity";
import { StructureBuilder } from "sanity/structure";

const structure = (S: StructureBuilder) =>
  S.list()
    .title("Ny i Abakus")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
      ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId() ?? "")
      ),
    ])

export default defineConfig({
  basePath: "/studio",

  title: "NyIAbakus",
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: structure
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
