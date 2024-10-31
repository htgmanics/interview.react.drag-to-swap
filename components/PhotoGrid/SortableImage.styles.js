import styled from "styled-components";
import { motion } from "framer-motion";

export const SortableContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  touch-action: none;
  display: grid;
  place-items: center;
`;

export const SortableImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

export const PreviewOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background-color: #ffffff;
`;
