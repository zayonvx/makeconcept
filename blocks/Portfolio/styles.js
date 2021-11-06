import styled from "styled-components";

export const SwiperWrapper = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  margin: 0 auto;
  
`

export const ThumbsWrapper = styled.div`
  width: 100%;
  max-height: 100px;
  overflow: hidden;
  margin: 0 auto;
`

export const GalleryPopup = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(68,68,68,.9);
  width: 100vw;
  height: 100vh;
  display: ${props => props.fullView ? "flex" : "none"};
`