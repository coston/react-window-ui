import React from 'react'
import styled from 'styled-components'

export const Browser = styled.section`
  position: relative;
  border: ${props => props.border || '0.05rem solid #AEAEAE'};
  border-radius: 0.5rem;
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  background: ${props => props.background || '#fff'};
  max-width: 100%;
  min-height: 22rem;
  z-index: 2;
  padding: ${props => props.padding || '2.25rem .5rem .5rem .5rem'};
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 0.8rem;
    left: 0.8rem;
    z-index: 2;
    border-radius: 50%;
    background: ${props => (props.grayscale ? '#8D8D92' : '#f85955')};
    box-shadow: ${props =>
      props.grayscale
        ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92'
        : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b'};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.barHeight || '2rem'};
    border-bottom: ${props => props.divider || '0.05rem solid #ccc'};
    z-index: 1;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    background-clip: padding-box;
    background: ${props => props.topbarColor || '#E6E6E6'};
  }
`

export const Terminal = styled.section`
  position: relative;
  border: ${props => props.border || '0.05rem solid #000'};
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  background: ${props => props.background || '#000'};
  max-width: 100%;
  min-height: 22rem;
  z-index: 2;
  padding: ${props => props.padding || '2.25rem .5rem .5rem .5rem'};
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 0.8rem;
    left: 0.8rem;
    z-index: 2;
    border-radius: 50%;
    background: ${props => (props.grayscale ? '#8D8D92' : '#f85955')};
    box-shadow: ${props =>
      props.grayscale
        ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92'
        : '0 0 0 0.2em #f85955,  1.1em 0 0 0.2em #fbbe3f, 2.2em 0 0 0.2em #45cc4b'};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.barHeight || '2rem'};
    background: ${props => props.background || '#000'};
    border-bottom: ${props => props.divider || '0.05rem solid #000'};
    z-index: 1;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    background-clip: padding-box;
    background: ${props => props.topbarColor || '#000'};
  }
`

export const MacTerminal = styled.section`
  position: relative;
  border: ${props => props.border || '0.0rem solid #1D1F21'};
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  background: ${props => props.background || '#000'};
  max-width: 100%;
  min-height: 22rem;
  z-index: 2;
  padding: ${props => props.padding || '2.25rem .5rem .5rem .5rem'};
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 0.5rem;
    left: 0.6rem;
    z-index: 2;
    border-radius: 50%;
    background: #f85955;
    background: ${props => (props.grayscale ? '#8D8D92' : '#f85955')};
    box-shadow: ${props =>
      props.grayscale
        ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2rem #8D8D92, 2.2em 0 0 0.2rem #8D8D92'
        : '0 0 0 0.2rem #f85955,  1.1rem 0 0 0.2rem #fbbe3f, 2.2rem 0 0 0.2rem #45cc4b'};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 5em;
    width: 100%;
    height: ${props => props.barHeight || '1.4rem'};
    border-bottom: ${props => props.divider || '0.05rem solid #1D1F21'};
    z-index: 1;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    background-clip: padding-box;
    background: ${props => props.topbarColor || '#E6E6E6'};
  }
`
