import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { dataset, projectId } from "./utils/sanity";

export default defineConfig({
  basePath: "/studio",

  title: "NyIAbakus",
  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
