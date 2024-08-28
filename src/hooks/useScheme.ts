import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useCallback } from "react";
import { queryKey } from "src/constants/queryKey";

type Scheme = "light" | "dark";
type SetScheme = (scheme: Scheme) => void;

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
    initialData: "light",
  });

  const scheme = data === "light" ? "light" : "dark";

  // Memoize setScheme with useCallback
  const setScheme = useCallback((scheme: Scheme) => {
    setCookie("scheme", scheme);
    queryClient.setQueryData(queryKey.scheme(), scheme);
  }, [queryClient]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedScheme = getCookie("scheme") as Scheme;
    setScheme(savedScheme === "light" ? "light" : "dark");
  }, [setScheme]); // Add setScheme to the dependency array

  return [scheme, setScheme];
};

export default useScheme;
