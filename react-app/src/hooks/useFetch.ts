import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for data fetching
 * 
 * This is similar to a Rails service object - it encapsulates
 * reusable logic that can be shared across components.
 * 
 * Rails equivalent might be:
 * 
 * class BookFetcher
 *   def self.call(url)
 *     response = HTTParty.get(url)
 *     { data: response.parsed_response, error: nil }
 *   rescue => e
 *     { data: nil, error: e.message }
 *   end
 * end
 */
export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when URL changes
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        // Don't set error if request was cancelled
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function - cancels request if component unmounts
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
