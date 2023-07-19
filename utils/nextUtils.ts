// utils/nextUtils.ts

/**
 * This function adds request config to a non-next-fetch request.
 * ORM requests, or requests that are not made with fetch, can use this  function to add eg. revalidation tags or timer.
 * It's a hacky way to do it, but it's the only solution I could find until Next.js adds a proper way to do this.
 */

export const addNextRequestConfig = (options: NextFetchRequestConfig) => {
  fetch("data:text/plain;base64,", { next: options }); // fetching nothing just to add the next property to the request
};
