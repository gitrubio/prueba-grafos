import { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { createPortal } from "react-dom";
import { MinecraftSkillTree } from "@/types/global.types";
import Popover from './ui/Popover';

const CustomNode = memo(
  ({
    data,
    isConnectable,
  }: {
    data: MinecraftSkillTree;
    isConnectable: boolean;
  }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setPopoverPosition({
        top: rect.top  + 70, 
        left: rect.left - 50,
      });
      setShowDescription(true);
    };

    const handleMouseLeave = () => setShowDescription(false);

    return (
      <>
        <section
          id={data.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`react-flow__node   w-[100%] h-[100%] ${data.completed ? "node-completed" : "" } flex justify-center items-center relative`}
        >
          <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
          <img src={data.image} alt={data.name} className="max-h-10 pointer-events-none" />
          <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
        </section>

        {showDescription &&
          createPortal(
           <Popover title={data.name} description={data.description} popoverPosition={popoverPosition}/>,
            document.body 
          )}
      </>
    );
  }
);

export default CustomNode;
