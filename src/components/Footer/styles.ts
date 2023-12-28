import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.darkBg};
  height: 298px;
  text-align: center;
  margin-top: 120px;
  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 32.5px;
`

export const Description = styled.p`
  color: ${colors.salmon};
  font-size: 10px;
  max-width: 480px;
  margin: 80px auto 40px;
  font-weight: 400;
`
