import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-background border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">K</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Kaizen Afrika
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="font-body text-muted-foreground">Support: +254-795-284-028</p>
            <p className="font-body text-muted-foreground">kaizenafrika@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Kaizen Afrika. All rights reserved. Empowering African creators to own their story.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;