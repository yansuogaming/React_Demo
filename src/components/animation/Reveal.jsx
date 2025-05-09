// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Reveal = ({ children, className = '' }) => {
    const ref = useRef()

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className={className}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal