import { DragOverlay } from "./DragOverlayContent.styles";

const DragOverlayContent = ({ url }) => {
  return (
    <DragOverlay
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        ease: "circInOut",
      }}
    >
      <img
        src={url}
        alt="drag overlay indicator"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </DragOverlay>
  );
};

export default DragOverlayContent;
