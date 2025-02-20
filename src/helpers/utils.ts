import { SpacingInGraph } from "@/constants/data";
import { MinecraftSkillsTreeMap, MinecraftSkillTree, NodePrimary } from "@/types/global.types";
import {  Node } from "@xyflow/react";
import ELK from 'elkjs/lib/elk.bundled.js';

const elk = new ELK();
// Función para normalizar el árbol
export const normalizeTree = (
  node: NodePrimary,
  parentId: string | null = null,
  list: MinecraftSkillTree[] = [],
  idCounter: { count: number } = { count: 1 }
): MinecraftSkillTree[] => {
  const nodeId = `node-${idCounter.count++}`;

  list.push({
    id: nodeId,
    name: node.name,
    description: node.description,
    image: node.image,
    parentId: parentId,
    completed: false,
  });

  for (const child of (node.children ?? [])) {
    normalizeTree(child, nodeId, list, idCounter);
  }

  return list;
};


export const convertToReactFlowNodes = async (nodes: MinecraftSkillTree[]) => {
  const elk = new ELK();

  const nodeMap: Map<string, MinecraftSkillsTreeMap> = new Map(
    nodes.map(node => [
      node.id,
      { ...node, children: [] as MinecraftSkillTree[], position: { x: 0, y: 0 } } as MinecraftSkillsTreeMap,
    ])
  );

  // Construcción de relaciones padre-hijo
  nodes.forEach(node => {
    if (node.parentId && nodeMap.has(node.parentId)) {
      nodeMap.get(node.parentId)!.children.push(nodeMap.get(node.id)!);
    }
  });

  // Construir el grafo para ELK.js
  const elkGraph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.layered.spacing.nodeNodeBetweenLayers': '50',
      'elk.layered.spacing.nodeNode': '40',
    },
    children: nodes.map(node => ({
      id: node.id,
      width: 60,
      height: 100,
    })),
    edges: nodes
      .filter(node => node.parentId)
      .map(node => ({
        id: `edge-${node.parentId}-${node.id}`,
        sources: [node.parentId!],
        targets: [node.id],
      })),
  };

  // Ejecutar el layout de ELK.js
  const layout = await elk.layout(elkGraph);

  // Asignar posiciones calculadas
  const flowNodes = layout.children!.map(node => ({
    id: node.id,
    data: nodeMap.get(node.id)!,
    position: { x: node.x!, y: node.y! },
    sourcePosition: 'right',
    targetPosition: 'left',
    type: 'custom',
  }));

  // Crear edges de React Flow
  const edges = layout.edges!.map(edge => ({
    id: edge.id,
    source: edge.sources[0],
    target: edge.targets[0],
    type: 'smoothstep',
  }));

  return { flowNodes, edges };
};