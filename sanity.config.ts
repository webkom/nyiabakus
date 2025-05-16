import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { dataset, projectId } from "./utils/sanity";

export default defineConfig({
  basePath: "/studio",

  title: "NyIAbakus",
  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
