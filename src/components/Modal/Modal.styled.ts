import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  backdrop-filter: blur(1px);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 24px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`;

export const CloseIcon = styled.svg`
  stroke: ${({ theme }) => theme.colors.primaryBlack};
`;
