// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Reveal = ({ children, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={className}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal