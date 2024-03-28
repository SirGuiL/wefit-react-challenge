import axios from "axios";
import { ReactNode, createContext, useState } from "react";

import { productCartDTO, productDTO } from "../dtos/productDTO";

export type ProductsContextProps = {
  products: productDTO[];
  cart: productCartDTO[];
  isLoading: boolean;
  handleAddProductInCart: (id: number) => void;
  handleRemoveProductInCart: (id: number) => void;
  handleDeleteProductInCart: (id: number) => void;
  handleClearCart: () => void;
  handleSearchMovies: (name: string) => void;
  getProducts: (param?: string) => void;
};

type ProductsContextProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export function HistoryContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [allProducts, setAllProducts] = useState<productDTO[]>([]);
  const [products, setProducts] = useState<productDTO[]>([]);
  const [cart, setCart] = useState<productCartDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async (param?: string) => {
    try {
      const response = await axios.get("http://localhost:3000/products");

      setProducts(response.data);
      setAllProducts(response.data);

      if (param) {
        await handleSearchMovies(param, response.data);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProductInCart = (id: number) => {
    const product = products.find((product) => product.id === id);

    if (!product) {
      return;
    }

    const productAlreadyInCart = cart.find((item) => item.id == id);

    if (!productAlreadyInCart) {
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ]);
      return;
    }

    setCart(() =>
      cart.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveProductInCart = (id: number) => {
    setCart(() =>
      cart
        .map((item) =>
          item.id == id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDeleteProductInCart = (id: number) => {
    setCart(() => cart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSearchMovies = (name: string, products?: productDTO[]) => {
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.set("search-query", name);

    const newUrl = "/search?" + urlParams.toString();

    window.history.pushState({ path: newUrl }, "", newUrl);

    setIsLoading(true);

    if (!name || name.trim().length == 0) {
      if (products) {
        setProducts(products);
        setIsLoading(false);

        return;
      }

      setProducts(allProducts);
      setIsLoading(false);
      return;
    }

    if (products) {
      setProducts(() =>
        products.filter((product) =>
          product.title.toLowerCase().includes(name.toLowerCase())
        )
      );

      return;
    }

    setProducts(() =>
      allProducts.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      )
    );

    setIsLoading(false);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        handleAddProductInCart,
        isLoading,
        handleRemoveProductInCart,
        handleDeleteProductInCart,
        handleClearCart,
        handleSearchMovies,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
