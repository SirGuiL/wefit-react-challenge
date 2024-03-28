import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { Container, Title, ButtonContainer, ImageContainer } from "./styles";

import NothingHereImage from "../../assets/nothing-here.svg";
import FinishImage from "../../assets/finish.svg";

type Props = {
  finishScreen?: boolean;
};

export function NothingHere({ finishScreen }: Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (finishScreen) {
      navigate("/");
      return;
    }

    location.reload();
  };

  return (
    <Container>
      <Title>
        {finishScreen
          ? "Compra realizada com sucesso!"
          : "Parece que não há nada por aqui :("}
      </Title>

      <ImageContainer finish={finishScreen}>
        <img src={finishScreen ? FinishImage : NothingHereImage} />
      </ImageContainer>

      <ButtonContainer>
        <Button
          text={finishScreen ? "VOLTAR" : "Recarregar página"}
          type="primary"
          onClick={() => handleBack()}
        />
      </ButtonContainer>
    </Container>
  );
}
