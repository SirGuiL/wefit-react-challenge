import { AddIcon } from "../AddIcon";
import { DecrementIcon } from "../DecrementIcon";
import { Button, Container, QuantityContainer } from "./styles";

type Props = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function CartItemQuantity({
  quantity,
  onIncrement,
  onDecrement,
}: Props) {
  return (
    <Container>
      <Button onClick={onDecrement}>
        <DecrementIcon />
      </Button>

      <QuantityContainer>
        <span>{quantity}</span>
      </QuantityContainer>

      <Button onClick={onIncrement}>
        <AddIcon />
      </Button>
    </Container>
  );
}
