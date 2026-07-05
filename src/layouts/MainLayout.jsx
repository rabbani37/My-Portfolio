import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SpaceBackground from '../components/SpaceBackground'

function MainLayout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      {/* আগে এখানে {isPrimary && <SpaceBackground />} ছিল।
          isPrimary ক্যালকুলেট হতে সময় লাগত (MutationObserver + useEffect এর জন্য),
          তাই প্রথম render এ background দেখা যেত না — শুধু reload/re-render হলে দেখা যেত।
          এখন conditional বাদ দিয়ে সবসময় render করা হচ্ছে, তাই কোনো theme-dependent delay থাকবে না। */}
      <SpaceBackground />

      <Navbar />
      <main className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout