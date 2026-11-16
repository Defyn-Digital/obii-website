/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_APP_ROOT_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}