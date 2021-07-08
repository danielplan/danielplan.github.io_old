import { Tag, Creation } from "./common";
import creationList from "./creations.json";

export function getAllCreations() {
  return creationList.creations.map(parseCreation);
}

function parseCreation(creation: {
  name: string;
  description: string;
  tags: number[];
}): Creation {
  return {
    name: creation.name,
    description: creation.description,
    tags: parseTags(creation.tags),
  };
}

function parseTags(tags: number[]): Tag[] {
    return tags.map(Tag.findById); 
}