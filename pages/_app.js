import '../styles/globals.css';

import Layout from '../components/Layout';
import Transitiion from '../components/Transition'

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return(
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transitiion />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
