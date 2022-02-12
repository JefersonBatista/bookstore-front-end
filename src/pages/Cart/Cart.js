import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import CartsProducts from "./components/CartsProducts.js";
import Summary from "./components/Summary";

export default function Cart() {
  return (
    <div>
      <TopBar />
      <StyledContainer>
        <CartsProducts />
        <Summary />
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  margin-top: 88px;
  width: 100%;
  padding: 8px 120px;
  section:first-child {
    width: 75%;
  }
`;
