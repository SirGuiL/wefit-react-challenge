import { UseProducts } from "../../hooks/UseProducts";

import { Input } from "../../components/Input";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ProductCard } from "../../components/ProductCard";

import { CardsContainer, Container, SpinnerContainer } from "./styles";
import { Header } from "../../components/Header";
import { NothingHere } from "../../components/NothingHere";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const { products, isLoading, getProducts } = UseProducts();
  const location = useLocation();

  const handleGetProducts = async () => {
    const searchParams = new URLSearchParams(location.search);
    const param = searchParams.get("search-query");

    await getProducts(param || "");
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      <Header />

      <Container>
        {isLoading ? (
          <SpinnerContainer>
            <LoadingSpinner />
          </SpinnerContainer>
        ) : products.length > 0 ? (
          <>
            <Input />

            <CardsContainer>
              {products.map((product) => (
                <ProductCard
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </CardsContainer>
          </>
        ) : (
          <NothingHere />
        )}
      </Container>
    </>
  );
}
