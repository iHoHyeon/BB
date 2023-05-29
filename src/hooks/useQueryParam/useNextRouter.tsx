/** @tossdocs-ignore */
import Router, { useRouter } from 'next/router';

function waitForRouterReady() {
  return new Promise<void>(resolve => {
    Router.ready(resolve);
  });
}

interface Options {
  suspense?: boolean;
}

export function useNextRouter(options: Options = { suspense: true }) {
  const router = useRouter();

  if (options.suspense && !router.isReady) {
    throw waitForRouterReady();
  }

  return router;
}
