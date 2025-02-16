import { SpacingInGraph } from "@/constants/data";
import { MinecraftSkillsTreeMap, MinecraftSkillTree, NodePrimary } from "@/types/global.types";
import {  Node } from "@xyflow/react";

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


export const convertToReactFlowNodes = (nodes: MinecraftSkillTree[]) => {
  const nodeMap: Map<string, MinecraftSkillsTreeMap> = new Map(
    nodes.map(node => [node.id, { ...node, children: [] as MinecraftSkillTree[], position: { x: 0, y: 0 } } as MinecraftSkillsTreeMap])
  );

  // Construcción de relaciones padre-hijo
  nodes.forEach(node => {
    if (node.parentId && nodeMap.has(node.parentId)) {
      nodeMap.get(node.parentId)!.children.push(nodeMap.get(node.id)!);
    }
  });

  // Encontrar nodos raíz (sin parentId)
  const rootNodes = nodes.filter(node => !node.parentId);

  const levelSpacing = SpacingInGraph.Y; // Espaciado horizontal entre niveles
  const nodeSpacing = SpacingInGraph.X; // Espaciado vertical entre nodos

  // Función para posicionar los nodos
  const positionNodes = (node: MinecraftSkillsTreeMap, depth: number, yOffset: number): number => {
    let childYOffset = yOffset;

    // Posicionar recursivamente los hijos
    node.children.forEach(child => {
      childYOffset = positionNodes(child, depth + 1, childYOffset);
    });

    if (node.children.length > 0) {
      // Centrar el padre entre sus hijos
      const minY = Math.min(...node.children.map(child => child.position!.y));
      const maxY = Math.max(...node.children.map(child => child.position!.y));
      node.position = { x: depth * levelSpacing, y: (minY + maxY) / 2 };
    } else {
      // Asignar posición a nodos hoja
      node.position = { x: depth * levelSpacing, y: yOffset * nodeSpacing };
      childYOffset++;
    }

    return childYOffset;
  };

  // Asignar posiciones a los nodos raíz
  let yOffset = 0;
  rootNodes.forEach(root => {
    yOffset = positionNodes(nodeMap.get(root.id)!, 0, yOffset);
  });

  // Convertir nodos a formato de React Flow
  const flowNodes = Array.from(nodeMap.values()).map(node => ({
    id: node.id,
    data: {
      id: node.id,
      name: node.name,
      description: node.description,
      image: node.image,
      parentId: node.parentId,
      completed: node.completed
    },
    position: node.position,
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    completed: node.completed,
  } as Node));

  // Crear edges de React Flow
  const edges = nodes
    .filter(node => node.parentId)
    .map(node => ({
      id: `edge-${node.parentId}-${node.id}`,
      source: node.parentId!,
      target: node.id,
      type: "smoothstep",
      completed: node.completed,
    }));

  return { flowNodes, edges };
};