import { Icategory } from '../types/category.dto';

class Categories {
  #categories: Icategory[];

  constructor() {
    this.#categories = [];
  }

  create(category: Pick<Icategory, 'name'>): Icategory {
    this.#categories.push({ id: Date.now(), ...category });
    return this.#categories.at(-1) as Icategory;
  }

  find(): Icategory[] {
    return this.#categories;
  }

  findOne(id: number): Icategory | undefined {
    for (let i = 0; i < this.#categories.length; i++)
      if (this.#categories[i].id === id) return this.#categories[i];
    return undefined;
  }

  #getCategoryIndex(id: number): number | undefined {
    for (let i = 0; i < this.#categories.length; i++) if (this.#categories[i].id === id) return i;
    return undefined;
  }

  update(category: Icategory): Icategory | undefined {
    const categoryIndex = this.#getCategoryIndex(category.id);
    if (categoryIndex === undefined) return undefined;
    this.#categories[categoryIndex].name = category.name;
    return this.#categories[categoryIndex];
  }

  remove(id: number): Icategory | undefined {
    const categoryIndex = this.#getCategoryIndex(id);
    if (categoryIndex === undefined) return undefined;
    const target = this.#categories[categoryIndex];
    this.#categories.splice(categoryIndex, 1);
    return target;
  }
}

export const categories = new Categories();
