import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { serverHealthQueryOptions } from "./useServerHealth";

const COLD_START_DELAY = 5000;

export function useColdStartToast() {
  const { isLoading } = useQuery(serverHealthQueryOptions());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isLoading) {
      timerRef.current = setTimeout(() => {
        toast("Server is waking up…", {
          description: "Hosted on a free server — this may take a moment.",
        });
      }, COLD_START_DELAY);
    } else {
      clearTimeout(timerRef.current!);
      timerRef.current = null;
    }

    return () => clearTimeout(timerRef.current!);
  }, [isLoading]);
}
