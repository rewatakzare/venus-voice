import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Background() {
        return (
          <div className="fixed inset-0 z-0 overflow-hidden bg-navy-blue">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-UrC3FhWezd7J98nMwc5IPiX295cjhB.svg"
                alt=""
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        )
      }      