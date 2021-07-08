export interface Creation {
  name: string;
  description: string;
  tags: Tag[];
}

export enum Color {
  BLUE = "blue",
  PURPLE = "purple",
}

export class Tag {
  static readonly PHOTOGRAPHY = new Tag(1, "Photography", Color.BLUE);
  static readonly DEVELOPMENT = new Tag(2, "Development", Color.PURPLE);
  static readonly DESIGN = new Tag(3, "Design", Color.BLUE);
  private static readonly allTags = [Tag.PHOTOGRAPHY, Tag.DEVELOPMENT, Tag.DESIGN];

  private constructor(
    readonly id: number,
    readonly name: string,
    readonly color: Color
  ) {}

  static findById(id: number): Tag {
    return Tag.allTags.find((t) => t.id === id) ?? this.PHOTOGRAPHY;
  }
}
