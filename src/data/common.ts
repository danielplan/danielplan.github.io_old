export interface Creation {
  id: number;
  name: string;
  description: string;
  slug: string;
  tags: Tag[];
  thumbnail: string;
  detailHeading?: string;
  detailText?:string;
  details?: CreationDetail[];
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
  ORANGE = "orange"
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
