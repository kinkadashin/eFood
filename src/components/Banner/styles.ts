import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerGlobal = styled.div`
  position: relative;
  margin-bottom: 56px;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 1;
  }
`

export const BannerBg = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
  font-size: 32px;
  color: ${colors.white};
`

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
`

export const BannerTitle = styled.h2`
  font-weight: 900;
  padding-bottom: 32px;
`

export const BannerSubTitle = styled.h3`
  font-weight: 100;
  padding-top: 24px;
  text-transform: capitalize;
`
