import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;

  @media (max-width: 924px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const Label = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: ${({ theme }) => theme.colors.formLabelColor};
`;

export const MileageBox = styled.div`
  position: relative;
`;

export const LeftInput = styled.input`
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  padding: 14px 24px 14px 70px;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  border-radius: 14px 0px 0px 14px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

export const LeftInputText = styled.p`
  position: absolute;
  top: 14px;
  left: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const RightInput = styled.input`
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  padding: 14px 24px 14px 34px;
  border-radius: 0px 14px 14px 0px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

export const RightInputText = styled.p`
  position: absolute;
  right: 130px;
  top: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Button = styled.button`
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
