import { AnimatePresence } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import {
  SortableContainer,
  SortableImg,
  PreviewOverlay,
} from "./SortableImage.styles";

const SortableImage = ({ url, id, showPreview, previewUrl, isTarget }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.8 : 1,
    cursor: isDragging ? "grabbing" : "grab",
    touchAction: "none",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <SortableContainer
      ref={setNodeRef}
      style={style}
      data-id={id}
      {...attributes}
      {...listeners}
    >
      <SortableImg
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: !isDragging && showPreview ? 0.9 : 1,
          opacity: isTarget ? 0.7 : 1,
        }}
        transition={{ duration: 0.2 }}
        src={url}
        alt={`Image ${id}`}
      />
      <AnimatePresence>
        {showPreview && previewUrl && (
          <PreviewOverlay
            initial={{ clipPath: "circle(30px at center)" }}
            animate={{ clipPath: "circle(150% at center)" }}
            exit={{ clipPath: "circle(30px at center)", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "circInOut",
            }}
          >
            <SortableImg src={previewUrl} alt="Preview Image" />
          </PreviewOverlay>
        )}
      </AnimatePresence>
    </SortableContainer>
  );
};

export default SortableImage;
