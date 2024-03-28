import { useEffect, useState } from "react";
import { SearchIcon } from "../SearchIcon";
import { Container, SearchInput } from "./styles";
import { UseProducts } from "../../hooks/UseProducts";
import { useLocation } from "react-router-dom";

export function Input() {
  const [search, setSearch] = useState("");

  const { handleSearchMovies } = UseProducts();
  const location = useLocation();

  const handleSearchMovie = () => {
    handleSearchMovies(search);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const param = searchParams.get("search-query");

    if (param) {
      setSearch(param);
    }
  }, []);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar filme pelo nome"
        onBlur={handleSearchMovie}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearchMovie}>
        <SearchIcon />
      </button>
    </Container>
  );
}
