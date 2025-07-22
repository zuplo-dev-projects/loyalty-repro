import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/docs",
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  redirects: [{ from: "/", to: "/category-a/doc-a" }],
  navigation: [
    {
      type: "category",
      label: "Category A",
      items: [
        "/category-a/doc-a",
        "/category-a/doc-a2",
        {
          type: "category",
          label: "Subcategory A",
          items: [
            "/category-a/sub-a/sub-doc-a",
            "/category-a/sub-a/sub-doc-a2",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Category B",
      items: ["/category-b/doc-b"],
    },
  ],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
