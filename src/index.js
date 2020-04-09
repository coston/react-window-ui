import React from 'react'
import styled from 'styled-components'

const standard = props => `
  padding-left: ${props.padding || '.5rem'};
  padding-right: ${props.padding || '.5rem'};
  padding-bottom: ${props.padding || '.5rem'};
  resize: ${(props.resize && 'both') || 'none'};
  min-height: ${props.minHeight || '11rem'};
  min-width: ${props.minWidth || '11rem'};
  max-height: ${props.maxHeight || null};
  max-width: ${props.maxWidth || '100%'};
  height: ${props.height || null};
  box-shadow: ${props.boxShadow ? props.boxShadow : '0 20px 68px rgba(0, 0, 0, 0.55)'};
  border-radius: 0.5rem;
  position: relative;
  overflow: auto;
  z-index: 2;
`
const after = props => `
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  z-index: 2;
  border-radius: 50%;
  background: ${props.grayscale ? '#8D8D92' : '#f85955'};
  box-shadow: ${
    props.grayscale
      ? '0 0 0 0.2rem #8D8D92,  1.1rem 0 0 0.2rem #8D8D92, 2.2rem 0 0 0.2rem #8D8D92'
      : '0 0 0 0.2rem #f85955,  1.2rem 0 0 0.2rem #fbbe3f, 2.3rem 0 0 0.2rem #45cc4b'
  };
}
`

const before = () => `
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
z-index: 1;
border-top-left-radius: 0.4rem;
border-top-right-radius: 0.4rem;
background-clip: padding-box;
`

const getPaddingTop = props => (props.padding === '0' ? '0px' : props.padding) || '.5rem';

export const Browser = styled.div`
  border: ${props => props.border || '0.05rem solid #AEAEAE'};
  background: ${props => props.background || '#fff'};
  padding-top: calc(${getPaddingTop} + ${props => props => props.barHeight || '2rem'});
  ${standard} &:after {
    top: 0.8rem;
    left: 0.8rem;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '2rem'};
    border-bottom: ${props => props.divider || '0.05rem solid #ccc'};
    background: ${props => props.topbarColor || '#E6E6E6'};
    ${before};
  }
`

export const Terminal = styled.section`
  border: ${props => props.border || '0.05rem solid #000'};
  background: ${props => props.background || '#000'};
  color: white;
  padding-top: calc(${getPaddingTop} + ${props => props => props.barHeight || '2rem'});
  ${standard} &:after {
    top: 0.8rem;
    left: 0.8rem;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '2rem'};
    background: ${props => props.background || '#000'};
    border-bottom: ${props => props.divider || '0.05rem solid #000'};
    background: ${props => props.topbarColor || '#000'};
    ${before};
  }
`

export const MacTerminal = styled.section`
  border: ${props => props.border || '0.0rem solid #1D1F21'};
  background: ${props => props.background || '#000'};
  color: white;
  padding-top: calc(${getPaddingTop} + ${props => props => props.barHeight || '1.4rem'});
  ${standard} &:after {
    top: 0.5rem;
    left: 0.6rem;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '1.4rem'};
    border-bottom: ${props => props.divider || '0.05rem solid #1D1F21'};
    background: ${props => props.topbarColor || '#E6E6E6'};
    ${before};
  }
`
