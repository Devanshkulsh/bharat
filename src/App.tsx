import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
// import About from '@/pages/About';
import Home from '@/pages/Home';
// import PlaceholderPage from '@/pages/PlaceholderPage';
// import Programs from '@/pages/Programs';

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/programs" element={<Programs />} /> */}
          {/* <Route path="/hospital" element={<PlaceholderPage title="Hospital" />} /> */}
          {/* <Route path="/research" element={<PlaceholderPage title="Research" />} /> */}
          {/* <Route path="/admissions" element={<PlaceholderPage title="Admissions" />} /> */}
          {/* <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} /> */}
          {/* <Route path="/contact" element={<PlaceholderPage title="Contact" showContact />} /> */}
          {/* <Route path="/alumni" element={<PlaceholderPage title="Alumni" />} /> */}
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
