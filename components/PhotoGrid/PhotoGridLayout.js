import styled from "styled-components";
import { motion } from "framer-motion";

const PhotoGridLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export default PhotoGridLayout;
