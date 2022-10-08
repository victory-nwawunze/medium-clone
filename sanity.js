/** @format */

import { createClient, createCurrentUserHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
// export const config = {
//   // Find your project ID and dataset in `sanity.json` in your studio project
//   //   https://nextjs.org/docs/basic-features/environment-variables
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2021-03-25",
//   // useCdn == true gives fast, cheap responses using a globally distributed cache.
//   // Set this to false if your application require the freshest possible
//   // data always (potentially slightly slower and a bit more expensive).
//   useCdn: process.env.NODE_ENV === "production",
// };
// export const sanityClient = createClient(config);
// // https://www.sanity.io/docs/image-url
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
// // export const urlFor = (source) => createImageUrlBuilder(client).image(source);
// export const useCurrentUser = createCurrentUserHook(config);

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};
export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);
