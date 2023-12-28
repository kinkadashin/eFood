import styled from 'styled-components'
import close from '../../assets/images/trash.svg'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
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

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.salmon};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;

  &.is-closed {
    display: none;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.darkBg};
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.darkBg};
    height: 32px;
    padding: 8px;
    border: none;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: black;

    &.error {
      border: 2px solid red;
      color: red;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.darkBg};
    margin-bottom: 16px;
  }

  .firstButton {
    margin-top: 16px;
  }

  .mensagemFinal {
    font-weight: 400;
    margin-bottom: 24px;
  }

  .errorzin {
    color: ${colors.white};
  }
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.darkBg};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 30px;

  #cardNumber {
    width: 228px;
  }
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
  margin-top: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.white};
  }
`

export const ListCartItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${colors.white};
  padding: 8px 8px 12px;
  position: relative;
  background-color: ${colors.darkBg};
  color: ${colors.salmon};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${colors.darkBg};
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
