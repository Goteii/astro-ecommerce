/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly STRIPE_PUBLISHABLE_KEY: string;
}
