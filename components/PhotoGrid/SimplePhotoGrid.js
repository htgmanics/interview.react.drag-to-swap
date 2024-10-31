import PhotoGridLayout from "./PhotoGridLayout";
import { SortableImg } from "./SortableImage.styles";

const SimplePhotoGrid = ({ images }) => {
  return (
    <PhotoGridLayout>
      {images.map((image) => (
        <SortableImg src={image.url} alt={`Image ${image.id}`} />
      ))}
    </PhotoGridLayout>
  );
};

export default SimplePhotoGrid;
