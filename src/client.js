import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// hmagdy168@gmail.com //// sanity manage //// sanity start

export const client = sanityClient({
  projectId: "x5uce68t",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skEZyHubKbtXSgN3tFHWmAwUqcBiF6KvnTp1TdGpE1z0IW8p5X7HPqsRz6m4RLzthPw8KWOdtGxjMZOEoHtMcxYvnDk8xje0wkTDbZIaA9i0d0BBYRr2SHACH0zJF3OSoBRbh6BhQfUqzg8T912EpsnIA5VWfO1nKyficEpq4IYxpu0W6tc1",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
