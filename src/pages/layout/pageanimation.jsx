import { AnimatePresence, motion } from "framer-motion"
import { Outlet, useLocation } from "react-router"
export default function PageWrapper(){
  const location=useLocation()
    return(
      <div className="w-full h-full">

        <AnimatePresence mode="wait">
        <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}     // هنگام ورود
        animate={{ opacity: 1, y: 0 }}      // حالت عادی
        exit={{ opacity: 0, y: -20 }}       // هنگام خروج
        transition={{ duration: 0.2 }}
        className="h-full w-full"
        >
        <Outlet/>
        </motion.div>
        </AnimatePresence>
      </div>
        
    )

}