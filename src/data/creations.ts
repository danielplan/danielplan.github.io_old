import { Tag, Creation } from "./common";
import creationList from "./creations.json";

export function getAllCreations(): Creation[] {
  return creationList.creations.map((creation, i) => parseCreation(i + 1, creation));
}

function parseCreation(id: number, creation: {
  name: string;
  description: string;
  slug?: string;
  tags: number[];
}): Creation {
  return {
    id,
    name: creation.name,
    description: creation.description,
    slug: creation.slug ?? creation.name,
    tags: parseTags(creation.tags),
  };
}

function parseTags(tags: number[]): Tag[] {
  return tags.map(Tag.findById);
}
