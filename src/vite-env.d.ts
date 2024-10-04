/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEDROCK_API_URL: string;
  readonly VITE_BEDROCK_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
