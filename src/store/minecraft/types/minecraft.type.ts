import { MinecraftSkillTree } from "@/types/global.types";


export interface   MinecraftSlice {
	nodes: MinecraftSkillTree[];
	loading: boolean;
  error: string | null;
}


