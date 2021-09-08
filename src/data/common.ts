export interface Creation {
  general: {
    id: number;
    name: string;
    description: string;
    slug: string;
    tags: Tag[];
    thumbnail: string;
  };
  details?: {
    heading?: string;
    description?: string;
    boxes?: CreationDetail[];
  };
  previews?: {
    style: CreationPreviewStyle,
    images?: string[];
  }
}

export enum CreationPreviewStyle {
  DEFAULT = 'default',
  PHONE_MOCKUPS = 'phone_mockups'
}

export interface CreationDetail {
  icon: string;
  title: string;
  label?: string;
  link?: string;
}

export enum Color {
  BLUE = "blue",
  PURPLE = "purple",
  ORANGE = "orange",
}

export class Tag {
  static readonly PHOTOGRAPHY = new Tag(1, "Photography", Color.ORANGE);
  static readonly DEVELOPMENT = new Tag(2, "Development", Color.BLUE);
  static readonly DESIGN = new Tag(3, "Design", Color.PURPLE);
  static readonly all = [Tag.PHOTOGRAPHY, Tag.DEVELOPMENT, Tag.DESIGN];

  private constructor(
    readonly id: number,
    readonly name: string,
    readonly color: Color
  ) {}

  static findById(id: number): Tag {
    return Tag.all.find((t) => t.id === id) ?? this.PHOTOGRAPHY;
  }
}
