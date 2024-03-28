import { productCartDTO } from "../../dtos/productDTO";
import { UseProducts } from "../../hooks/UseProducts";
import { CartItemQuantity } from "../CartItemQuantity";
import { ThrashIcon } from "../TrashIcon";

import {
  Container,
  Image,
  Content,
  MovieInfoContainer,
  Price,
  Title,
  TopContent,
  RemoveButton,
  BottomContent,
  SubtotalContainer,
  Subtotal,
  RemoveButtonLargeScreen,
} from "./styles";

export function ProductCart({
  image,
  title,
  price,
  quantity,
  id,
}: productCartDTO) {
  const {
    handleRemoveProductInCart,
    handleAddProductInCart,
    handleDeleteProductInCart,
  } = UseProducts();

  return (
    <Container>
      <Content>
        <Image src={image} />

        <MovieInfoContainer>
          <TopContent>
            <Title>{title}</Title>
            <Price>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>

            <RemoveButton onClick={() => handleDeleteProductInCart(id)}>
              <ThrashIcon />
            </RemoveButton>
          </TopContent>

          <BottomContent>
            <CartItemQuantity
              quantity={quantity}
              onIncrement={() => handleAddProductInCart(id)}
              onDecrement={() => handleRemoveProductInCart(id)}
            />

            <SubtotalContainer>
              <Subtotal>Subtotal</Subtotal>

              <Price>
                {(price * quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Price>
            </SubtotalContainer>

            <RemoveButtonLargeScreen
              onClick={() => handleDeleteProductInCart(id)}
            >
              <ThrashIcon />
            </RemoveButtonLargeScreen>
          </BottomContent>
        </MovieInfoContainer>
      </Content>
    </Container>
  );
}
