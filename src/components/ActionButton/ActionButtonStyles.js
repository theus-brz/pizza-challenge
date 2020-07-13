import styled from 'styled-components';

export const ActionButtonWrapper = styled.div``;

export const ActionButtonTouchable = styled.button`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.highEmphasis};
  padding: 7px 20px;
  font-size: 20px;

  &:disabled {
    background-color: ${props => props.theme.colors.surfaceDisabled};
    color: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;
