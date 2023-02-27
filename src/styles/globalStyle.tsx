import { createGlobalStyle } from 'styled-components';

// 외부에서 import 할거니까 모듈 내보내자~!

interface GlobalStyleProps {
  height: number;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 html{
  font-size:${(props) => `${((props.height * 0.01) / 84.4) * 100}px`}};
 
`;
