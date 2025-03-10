
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm",
        "hover:shadow-md hover:bg-card/70 transition-all duration-300",
        "flex flex-col gap-4",
        className
      )}
    >
      <div className="p-2 rounded-lg bg-primary/10 w-fit">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-medium text-xl tracking-tight">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
