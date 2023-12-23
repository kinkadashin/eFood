import {
  BannerBg,
  BannerSubTitle,
  BannerTitle,
  BannerContainer,
  BannerGlobal
} from './styles'

type Props = {
  cover: string
  title: string
  type: string
}

const Banner = ({ cover, title, type }: Props) => (
  <BannerGlobal>
    <BannerBg style={{ backgroundImage: `url(${cover})` }}>
      <BannerContainer className="container">
        <BannerSubTitle>{type}</BannerSubTitle>
        <BannerTitle>{title}</BannerTitle>
      </BannerContainer>
    </BannerBg>
  </BannerGlobal>
)

export default Banner
