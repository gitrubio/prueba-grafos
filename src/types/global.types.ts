export interface MinecraftSkillTree {
    id: string;
    name: string;
    description: string;
    image: string;
    parentId: string | null;
    completed: boolean;
  }
  
export interface MinecraftSkillsTreeMap extends MinecraftSkillTree{
    children: MinecraftSkillsTreeMap[];
    position: { x: number; y: number };
}

export interface NodePrimary {
  name:        string;
  description: string;
  image:       string;
  children:    NodePrimary[];
}
