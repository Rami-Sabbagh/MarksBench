import '@lib/icons';
import '@styles/globals.scss';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { join } from 'path';

import { GlobalWorkerOptions } from 'pdfjs-dist';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    GlobalWorkerOptions.workerSrc = join(router.basePath, '/pdfjs/pdf.worker.min.js');
  }, [router.basePath]);

  return <Component {...pageProps} />;
}
export default MyApp
