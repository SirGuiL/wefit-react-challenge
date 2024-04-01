import { useState } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NothingHere } from "../../components/NothingHere";
import { ProductCart } from "../../components/ProductCart";

import { UseProducts } from "../../hooks/UseProducts";

import {
  Container,
  Separator,
  TotalContainer,
  TotalPrice,
  ButtonContainer,
  CartHeader,
  CartHeaderItem,
  IconSpace,
  Footer,
} from "./styles";

export function Cart() {
  const [isFinished, setIsFinished] = useState(false);

  const { cart, handleClearCart } = UseProducts();

  const handleFinishOrder = () => {
    setIsFinished(true);
    handleClearCart();
  };

  return (
    <>
      <Header />

      <Container>
        {cart.length > 0 ? (
          <>
            <CartHeader>
              <CartHeaderItem>
                <span>PRODUTO</span>
              </CartHeaderItem>

              <CartHeaderItem>
                <span>QTD</span>
              </CartHeaderItem>
              
              <CartHeaderItem>
                <span>SUBTOTAL</span>
              </CartHeaderItem>

              <IconSpace />
            </CartHeader>

            {cart.map((product) => (
              <ProductCart
                image={product.image}
                price={product.price}
                title={product.title}
                id={product.id}
                quantity={product.quantity}
                key={product.id}
              />
            ))}

            <Separator />

            <Footer>
              <TotalContainer>
                <span>TOTAL</span>

                <TotalPrice>
                  {cart
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </TotalPrice>
              </TotalContainer>

              <ButtonContainer>
                <Button
                  text="FINALIZAR PEDIDO"
                  type="primary"
                  onClick={() => handleFinishOrder()}
                />
              </ButtonContainer>
            </Footer>
          </>
        ) : isFinished ? (
          <NothingHere finishScreen />
        ) : (
          <NothingHere />
        )}
      </Container>
    </>
  );
}
