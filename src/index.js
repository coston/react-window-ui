import React from 'react'
import styled from 'styled-components'

const standard = props => `
  padding: ${props.padding || '2.25em .5em .5em .5em'};
  resize: ${(props.resize && 'both') || 'none'};
  min-height: ${props.minHeight || '11em'};
  min-width: ${props.minWidth || '11em'};
  max-height: ${props.maxHeight || null};
  max-width: ${props.maxWidth || '100%'};
  height: ${props.height || null};
  box-shadow: ${props.boxShadow ? props.boxShadow : '0 20px 68px rgba(0, 0, 0, 0.55)'};
  border-radius: 0.5em;
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
      ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92'
      : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b'
  };
}
`

const before = props => `
  content: '${props.topbarTitle || ''}';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
  background-clip: padding-box;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji";
  text-align: center;
`

export const Browser = styled.div`
  border: ${props => props.border || '0.05em solid #AEAEAE'};
  background: ${props => props.background || '#fff'};
  ${standard} &:after {
    top: 0.8em;
    left: 0.8em;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '2em'};
    line-height: ${props => props.barHeight || '2em'};
    border-bottom: ${props => props.divider || '0.05em solid #ccc'};
    background: ${props => props.topbarColor || '#E6E6E6'};
    color: #444;
    ${before};
  }
`

export const Terminal = styled.section`
  border: ${props => props.border || '0.05em solid #000'};
  background: ${props => props.background || '#000'};
  color: white;
  ${standard} &:after {
    top: 0.8em;
    left: 0.8em;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '2em'};
    line-height: ${props => props.barHeight || '2em'};
    background: ${props => props.background || '#000'};
    border-bottom: ${props => props.divider || '0.05em solid #000'};
    background: ${props => props.topbarColor || '#000'};
    color: #ccc;
    ${before};
  }
`

export const MacTerminal = styled.section`
  border: ${props => props.border || '0.0em solid #1D1F21'};
  background: ${props => props.background || '#000'};
  color: white;
  ${standard} &:after {
    top: 0.5em;
    left: 0.6em;
    ${after};
  }
  &:before {
    height: ${props => props.barHeight || '1.4em'};
    line-height: ${props => props.barHeight || '1.4em'};
    border-bottom: ${props => props.divider || '0.05em solid #1D1F21'};
    background: ${props => props.topbarColor || '#E6E6E6'};
    color: #444;
    ${before};
  }
`
