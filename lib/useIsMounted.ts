import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Hook to safely detect if component is mounted on the client,
 * preventing hydration mismatches without triggering cascading renders.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
