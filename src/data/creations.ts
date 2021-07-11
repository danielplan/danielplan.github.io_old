import { Tag, Creation, CreationDetail, CreationPreviewStyle } from "./common";
import creationList from "./creations.json";

export function getAllCreations(): Creation[] {
  return creationList.creations.map((creation, i) =>
    parseCreation(i + 1, creation)
  );
}

function parseCreation(
  id: number,
  creation: {
    general: {
      name: string;
      description: string;
      slug?: string;
      tags: number[];
      thumbnail: string;
    };
    details?: {
      heading?: string;
      description?: string;
      boxes?: CreationDetail[];
    };
    previews?: {
      style: string;
      images: string[];
    };
  }
): Creation {
  return {
    general: {
      id,
      name: creation.general.name,
      description: creation.general.description,
      slug: creation.general.slug ?? creation.general.name,
      tags: parseTags(creation.general.tags),
      thumbnail: "/thumbnails/" + creation.general.thumbnail,
    },
    details: {
      heading: creation.details?.heading,
      description: creation.details?.description,
      boxes: creation.details?.boxes,
    },
    previews: {
      style: parsePreviewStyle(creation.previews?.style),
      images: creation.previews?.images,
    },
  };
}

function parseTags(tags: number[]): Tag[] {
  return tags.map(Tag.findById);
}

function parsePreviewStyle(style?: string) {
  return (
    Object.values(CreationPreviewStyle).find((c) => c === style) ??
    CreationPreviewStyle.DEFAULT
  );
}
