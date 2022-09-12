import React from 'react'
import './HeaderImg.css'

import { motion } from 'framer-motion'

function HeaderImg() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    ></motion.div>
  )
}

export default HeaderImg
