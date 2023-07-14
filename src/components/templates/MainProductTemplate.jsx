import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useState, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../apis/product";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
  const targetRef = useRef(null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (entry.isIntersecting && targetRef.current) {
          fetchNextPage();
        }
      });
    },
    {
      threshold: 1,
    }
  );

  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
    ["products"],
    async ({ pageParam = 0 }) => {
      const response = await fetchProducts(pageParam);
      return { data: response.data.response, page: pageParam };
    },
    {
      staleTime: 300000,
      cacheTime: 0,
      getNextPageParam: (response) => {
        if (response.page === 1) return undefined;

        return response.page + 1;
      },
    }
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isFetching && !isLoading) {
      setProducts((prev) => [...prev, ...Array(9).fill("skeleton")]);
    }
  }, [isFetching, isLoading]);

  useEffect(() => {
    if (data) {
      const combinedData = data.pages.flatMap((page) => page.data);
      setProducts(combinedData);
      if (data.pageParams.length === 1) {
        observer.observe(targetRef.current);
      }
    }
  }, [data]);

  return (
    <Container>
      {isLoading ? <Loader /> : <ProductGrid products={products} />}
      <div ref={targetRef}></div>
    </Container>
  );
};

export default MainProductTemplate;
