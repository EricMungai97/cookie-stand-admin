import '@/styles/globals.css';
import { AuthProvider } from '../pages/contexts/auth.js';
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
export default MyApp;
