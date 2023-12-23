import styled from 'styled-components'
import { colors } from '../../styles'

import closeIcon from '../../assets/images/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.div`
  background-color: ${colors.salmon};
  max-width: 360px;
  padding: 32px 8px 0 8px;
  z-index: 2;
  p {
    color: ${colors.darkBg};
    font-weight: bold;
  }
`

export const CartItem = styled.div`
  display: flex;
  position: relative;
  background-color: ${colors.darkBg};
  margin-bottom: 16px;
  padding: 8px 8px 12px 8px;
  height: 100px;
  color: ${colors.salmon};
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  p {
    margin-top: 16px;
    color: ${colors.salmon};
  }
  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  color: ${colors.darkBg};
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin: 40px 8px 16px 8px;
`

export const DeliverButton = styled.button`
  background-color: ${colors.darkBg};
  color: ${colors.salmon};
  font-size: 14px;
  border: none;
  font-weight: bold;
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
`
