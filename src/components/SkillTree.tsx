import {  ReactFlow } from "@xyflow/react";
import { convertToReactFlowNodes } from "@/helpers/utils";
import { MinecraftSkillTree } from "@/types/global.types";
import CustomNode from "@/components/CustomNode";
import Loader from "./ui/Loader";
import Error from "./Error";
import { useEffect, useState } from "react";

const nodeTypes = { 
    custom: CustomNode
}
interface SkillTreeProps {
    nodes: MinecraftSkillTree[];
    loading: boolean;
    error: string | null;
    updateNode: (updatedNode: MinecraftSkillTree) => void;
}

const SkillTree = ({nodes,error,loading,updateNode}: SkillTreeProps) => {

  const [flowData, setFlowData] = useState<{ flowNodes: any[]; edges: any[] }>({
    edges: [],
    flowNodes: [],
  });

    useEffect(() => {
        if (nodes.length > 0 && !loading && !error) {
            convertToReactFlowNodes(nodes).then(setFlowData);
        }
    }, [nodes, loading, error]); 

  if (loading) return <Loader/>;
  if (error) return <Error message={error} />;

  return (
      <ReactFlow
        width={800}
        height={400}
        nodes={flowData.flowNodes}
        edges={flowData.edges}
        nodeTypes={nodeTypes}
        fitView
        contentEditable={false} 
        nodesConnectable={false}
        edgesFocusable={false}
        edgesReconnectable={false}
        nodesDraggable={false}
        panOnScroll={false} 
        panOnDrag={false}    
        zoomOnScroll={false} 
        zoomOnDoubleClick={false}
        attributionPosition="bottom-right"
        onNodeClick={(_, element) => {
          updateNode((element.data as unknown) as MinecraftSkillTree);
        }}
      >
      </ReactFlow>
  );
};

export default SkillTree;
