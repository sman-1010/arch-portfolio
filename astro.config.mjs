import { defineConfig } from "astro/config";

const isGithub = process.env.DEPLOY_TARGET === "github";

export default defineConfig({
  site: isGithub ? "https://sman-1010.github.io" : undefined,
  base: isGithub ? "/arch-portfolio/" : "/",
  output: "static",
});
