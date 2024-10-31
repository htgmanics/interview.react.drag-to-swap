import { useState } from "react";

import SimplePhotoGrid from "./SimplePhotoGrid";
import DraggablePhotoGrid from "./DraggablePhotoGrid";

const PhotosGrid = ({ layoutId, data }) => {
  const [images, setImages] = useState(
    data.images.map((image, index) => ({ id: `${index}`, url: image }))
  );

  if (images.length === 1) {
    return <SimplePhotoGrid images={images} />;
  }

  return (
    <DraggablePhotoGrid
      layoutId={layoutId}
      images={images}
      setImages={setImages}
    />
  );
};

export default PhotosGrid;
