
  import "./polyfill.mjs";
  
    import { netlifyAppEngineHandler } from "../../../dist/angular-guide/server/server.mjs";
    import "./fixup-event.mjs";

    export default netlifyAppEngineHandler;
    
  export const config = {
    path: "/*",
    excludedPath: ["/.netlify/*","/favicon.ico","/index.csr.html","/main-CBD6IZO7.js","/media/bootstrap-icons-CVBWLLHT.woff2","/media/bootstrap-icons-VQNJTM6Q.woff","/styles-5Q7HZZUE.css"],
    generator: "@netlify/angular-runtime@2.4.0",
    name: "Angular SSR",
  };
  