import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const SvgWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
//"&:not(:last-child)" adiciona estilização 
//a todos os elementos exceto ao ultimo

export const Svg = styled.svg`
  transform: rotate(90deg);
`

export const Circle = styled.circle`
  transition: stroke-dashoffset 850ms ease;
`

export const CircleBG = styled.circle.attrs({
  fill: 'none'
})``

export const Percentage = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  /* color: ${props => props.color}; */
  color: ${p=> p.theme === 'primary' ? '#09f' : '#274060'};


  font-weight: 900;
  font-size: 1.2em;
`

export const Caption = styled.span`
  font-size: 1em;
  font-weight: 400;
  text-transform: lowercase;
  color: #274060;
`