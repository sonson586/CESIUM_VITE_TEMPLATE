import { defineConfig, loadEnv } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(( command, mode ) => {
  return {
    env: {
      node: true
    },

    server: {
      host: true,
      port: 9000
    },

    plugins: [
      viteStaticCopy({
        targets: [
          { src: "node_modules/cesium/Build/Cesium/Workers/*", dest: "/Workers"},
          { src: "node_modules/cesium/Build/Cesium/Assets/*", dest: "/Assets"},
          { src: "node_modules/cesium/Build/Cesium/Widgets/*", dest: "/Widgets"},
          { src: "node_modules/cesium/Build/Cesium/ThirdParty/*", dest: "/ThirdParty"},
        ]
      })
    ],
  }
});