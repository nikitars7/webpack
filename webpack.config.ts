import path from "path";
import webpack from "webpack";
import { webpackBuild } from "./config/build/webpackBuild";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";
interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?:boolean;
  platform?:BuildPlatform;
}
export default (env: EnvVariables) => {
  const paths:BuildPaths = {
    output:path.resolve(__dirname,'build'),
    entry:path.resolve(__dirname,'src','index.tsx'),
    html:path.resolve(__dirname,'public','index.html'),
    public:path.resolve(__dirname,'public'),
    src:path.resolve(__dirname,'src'),
  }
  const config: webpack.Configuration = webpackBuild({
   port: env.port ?? 3000,
   mode: env.mode ?? 'development',
   paths,
   analyzer:env.analyzer,
   platform: env.platform ?? 'desktop',
  })
  return config;
};
