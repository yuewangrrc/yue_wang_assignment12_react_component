import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terserPlugin from "@rollup/plugin-terser";
// import dtsPlugin from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
      }),
      terserPlugin(),
    ],
    external: ["react", "react-dom"],
    onwarn(warning, warn) {
      // 忽略CSS和其他资源文件的警告
      if (warning.code === "UNRESOLVED_IMPORT" && warning.source.endsWith(".css"))
        return;
      if (warning.code === "UNRESOLVED_IMPORT" && warning.source.endsWith(".svg"))
        return;
      warn(warning);
    },
  },
  // 暂时注释掉dts配置以测试其他部分
  // {
  //   input: "src/index.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts({ tsconfig: "./tsconfig.json" })],
  //   external: [/\.css$/, /\.svg$/, "react", "react-dom"],
  // },
];