import React from "react";

export function useFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Error " + response.status);
        const data = (await response.json()) as T;
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, options]);

  return { data, loading, error };
}
