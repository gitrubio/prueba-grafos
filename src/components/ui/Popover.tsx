
interface PopoverProps {
    popoverPosition: { top: number; left: number };
    title: string
    description: string 
}

export default function Popover({title,description,popoverPosition}: PopoverProps) {
  return (
    <section
    id="description"
    style={{
      position: "absolute",
      top: popoverPosition.top,
      left: popoverPosition.left,
    }}
    className="text-white  rounded-md z-[9999] w-[150px] shadow-lg border-2 border-black"
  >
    <div className="bg-[#006c9a] rounded-t-md border-x-2 border-t-2 border-[#008cc6] p-1">
      {title}
    </div>
    <p className="bg-[#212121] rounded-b-md border-x-2 border-b-2 border-[#555] p-1 text-[#00ff26]">
      {description}
    </p>
  </section>
  )
}
