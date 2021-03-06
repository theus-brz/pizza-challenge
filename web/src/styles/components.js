import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  padding: 25px;
  background-color: ${props => props.theme.colors.background};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  padding-top: 15px;
`;

export const InputField = styled.input`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.highEmphasis};
  font-family: ${props => props.theme.fonts.paragraph};
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
`;

export const Container = styled.div`
  transition: all 0.35s ease-in-out 0s;
  max-width: 600px;
  width: 100%;
`;
