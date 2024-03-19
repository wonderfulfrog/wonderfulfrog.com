const rebuildSite = async (triggerTitle) => {
  const url = new URL(process.env.NETLIFY_REBUILD_HOOK);

  url.searchParams.append("trigger_title", triggerTitle);

  return await fetch(url.toString(), {
    method: "POST",
  });
};

export default async () => {
  await rebuildSite("Refreshing data");
};

export const config = {
  schedule: "0 */6 * * *",
};
