import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
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
