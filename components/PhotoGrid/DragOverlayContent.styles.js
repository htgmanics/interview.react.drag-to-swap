import styled from "styled-components";
import { motion } from "framer-motion";

export const DragOverlay = styled(motion.div)`
  position: relative;
  overflow: hidden;
  cursor: grabbing;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;
