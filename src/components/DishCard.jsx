import styled from '@emotion/styled';

const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 9.8em;
  height: 13.3em;
  background-color: #FFFFFF;
  border-radius: 1.9em;
  margin: 3.6em 1.3em;
`;
const StyledImg = styled.img`
  position: relative;
  top: -2.4em;
  border-radius: 50%;
  width: 8.1em;
  height: 8.1em;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const StyledName = styled.p`
  position: relative;
  top: -0.8em;
  font-weight: 600;
  font-size: 1.30em;
  font-style: normal;
  line-height: 1.7em;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const StyledPrice = styled.p`
  position: relative;
  color: #FA4A0C;
  top: -0.8em;
  font-weight: 600;
  font-size: 1.30em;
  font-style: normal;
  line-height: 1.7em;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;  
`;
const StyledLinkContainer = styled.div`
  position: relative;
  top: -0.8em;
`;

const StyledAnchor = styled.a`
  margin: 0 1.9em;
`;

const DishCard = ( {product} ) => {
  const title = product
    .name
    .split(" ")
    .map((word) => word.substring(0,1).toUpperCase() + word.substring(1))
    .join(" ");


  return (
    <DishCardContainer>
      <StyledImg src={product.picture_url} alt="Image of dish" />
      <InfoContainer>
        <StyledName>{title}</StyledName>
        <StyledPrice>${product.price / 100}</StyledPrice>
        <StyledLinkContainer>
          <StyledAnchor>
            <img src="src/assets/editIco.svg" alt="" />
          </StyledAnchor>
          <StyledAnchor>
            <img src="src/assets/deleteIco.svg" alt="" />
          </StyledAnchor>
        </StyledLinkContainer>
      </InfoContainer>
    </DishCardContainer>
  )
}

export default DishCard