import { useMinecraftSkillTree } from "@/hooks/useMinecraftSkillsTree";
import { useEffect, useState } from "react";
import SkillTree from "@/components/SkillTree";
import { IoSettings } from "react-icons/io5";
import Modal from "@/components/ui/Modal";
import Config from "@/components/Config";

const SkillTreeComponent = () => {
  const { nodes, loading, error, loadSkillTree, updateNode } =
    useMinecraftSkillTree();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadSkillTree();
  }, []);

  const handleUpdateTree = async (url: string) => {
    setIsOpen(false);
    loadSkillTree(url);
  };

  return (
    <div className="flex flex-col justify-center items-center pb-8 bg-[#c6c6c6] w-[870px] h-[500px] border-4 border-black rounded-xl">
      <div className="flex justify-between items-end h-16 w-full rounded-t-lg border-t-2 border-white px-10">
        <h1 className="text-2xl text-center ">Minecraft</h1>
        <div className="text-2xl text-center ">
          <button
            className="text-2xl text-center"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <IoSettings />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Config handleSubmit={handleUpdateTree} />
      </Modal>
      <div
        id="minecraft-main"
        className="w-[800px] h-[400px] border-2 border-black shadow-inner  shadow-black"
      >
        <SkillTree
          nodes={nodes}
          error={error}
          loading={loading}
          updateNode={updateNode}
        />
      </div>
    </div>
  );
};

export default SkillTreeComponent;
