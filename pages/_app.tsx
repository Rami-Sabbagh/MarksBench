import '@lib/icons';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';

import { GlobalWorkerOptions } from 'pdfjs-dist';

// TODO: Set the pdf.js workerSrc properly using the router to figure out the baseUrl.
GlobalWorkerOptions.workerSrc = './pdfjs/pdf.worker.min.js';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
