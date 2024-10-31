import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  pointerWithin,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { snapCenterToCursor } from "@dnd-kit/modifiers";

import DragOverlayContent from "./DragOverlayContent";
import PhotoGridLayout from "./PhotoGridLayout";
import SortableImage from "./SortableImage";

const DraggablePhotoGrid = ({ layoutId, images, setImages }) => {
  const [activeId, setActiveId] = useState(null);
  const [targetId, setTargetId] = useState(null);
  const [dragStatus, setDragStatus] = useState("idle");
  const [showPreview, setShowPreview] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const resetDragStates = () => {
    setActiveId(null);
    setTargetId(null);
    setDragStatus("idle");
    setShowPreview(false);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    setDragStatus("dragging");
    setShowPreview(false);
  };

  const handleDragOver = (event) => {
    const { over } = event;
    setTargetId(over?.id || null);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setDragStatus("dropping");
      setShowPreview(true);

      // wait for animation to complete
      await new Promise((resolve) => setTimeout(resolve, 300));

      setImages((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        const newItems = [...items];
        const temp = newItems[activeIndex];
        newItems[activeIndex] = newItems[overIndex];
        newItems[overIndex] = temp;

        return newItems;
      });

      resetDragStates();
    } else {
      resetDragStates();
    }
  };

  const handleDragCancel = () => {
    resetDragStates();
  };

  // get the active image
  const activeImage = activeId
    ? images.find((img) => img.id === activeId)
    : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext
        items={images.map((img) => img.id)}
        strategy={rectSortingStrategy}
      >
        <PhotoGridLayout>
          {images.map((image) => (
            <SortableImage
              key={image.id}
              {...image}
              showPreview={showPreview && targetId === image.id}
              previewUrl={activeImage?.url}
              isTarget={targetId === image.id && dragStatus === "dragging"}
            />
          ))}
        </PhotoGridLayout>
      </SortableContext>

      <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]}>
        {activeImage && dragStatus === "dragging" ? (
          <DragOverlayContent url={activeImage.url} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggablePhotoGrid;
