function updateContent(path: string, content: string) {
  Bun.write(`static/${path}.js`, content);
}

async function main() {
  const paths = [
    "bundle/analyzer",
    "bundle/framework",
    "bundle/lineage_maker",
    "bundle/savefile_merger",
    "lib/savefile",
  ] as const;

  for (const path of paths) {
    const url = `https://infinibrowser.wiki/static/${path}.js`;
    const response = await fetch(url);
    const content = await response.text();
    updateContent(path, content);
  }
}

await main();
