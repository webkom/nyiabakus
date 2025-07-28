import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/studio/schemas";
import { dataset, projectId } from "@/studio/queries/client";
import { structure } from "@/studio/sanity-structure";

export default defineConfig({
  basePath: "/studio",

  title: "NyIAbakus",
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
