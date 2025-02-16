import { useAppDispatch, useAppSelector } from "@/store";
import { changeNode, changeTree, setError, setLoading } from "@/store/minecraft/slices/minecraftSlice";
import { normalizeTree } from "@/helpers/utils";
import { MinecraftSkillTree } from "@/types/global.types";
import { DEFAULT_URL } from "@/constants/data";
import useSound from 'use-sound';
import xp from '@/assets/sounds/din.mp3';

export const useMinecraftSkillTree = () => {
  const dispatch = useAppDispatch();
  const { nodes, loading, error } = useAppSelector((store) => store.minecraft);
  const [play] = useSound(xp, {volume:  0.25,interrupt: true});
  // Cargar datos de la API y normalizarlos
 const loadSkillTree = async (url: string = DEFAULT_URL) => {
    try {

      dispatch(setLoading(true));
      
      const response = await fetch(url,{mode: 'cors'});
      const data = await response.json();
    
      const normalizedData = normalizeTree(data);
    
      dispatch(changeTree({ nodes: normalizedData }));
      dispatch(setError(null));
    } catch {
      dispatch(setError("Error al cargar el árbol de habilidades"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Cambiar todo el árbol de habilidades
  const updateTree = (newNodes: MinecraftSkillTree[]) => {
    dispatch(changeTree({ nodes: newNodes }));
  };

  // Modificar un nodo específico
  const updateNode = (updatedNode: MinecraftSkillTree) => {
    if (updatedNode.completed) return;
  
    const parentCompleted = nodes.some(
      (node) => node.id === updatedNode.parentId && node.completed
    );
  
    if (!updatedNode.parentId || parentCompleted) {
      play();
      dispatch(changeNode(updatedNode));
    }
  };

  return {
    nodes,
    loading,
    error,
    loadSkillTree,
    updateTree,
    updateNode,
  };
};
