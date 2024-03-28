import { Container, IconContainer, ButtonText } from "./styles";

type Props = {
  type: "primary" | "success";
  text: string;
  icon?: React.ReactNode;
  cartQty?: number;
  onClick: () => void;
};

export function Button({ text, type, icon, onClick, cartQty }: Props) {
  return (
    <Container type={type} onClick={onClick}>
      {icon && (
        <IconContainer>
          {icon} {cartQty}
        </IconContainer>
      )}

      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
