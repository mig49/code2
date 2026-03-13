"use client";

import { motion } from "framer-motion";
import type { Zone } from "@/lib/scoring";

interface ZoneChartProps {
  percentages: Record<Zone, number>;
}

const zoneConfig: Record<Zone, { label: string; color: string }> = {
  competencia: { label: "Competencia", color: "var(--color-zone-competencia)" },
  excelencia: { label: "Excelencia", color: "var(--color-zone-excelencia)" },
  genialidade: { label: "Genialidade", color: "var(--color-zone-genialidade)" },
};

export default function ZoneChart({ percentages }: ZoneChartProps) {
  const zones: Zone[] = ["competencia", "excelencia", "genialidade"];

  return (
    <div className="w-full max-w-md mx-auto space-y-5">
      {zones.map((zone, index) => (
        <motion.div
          key={zone}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-[var(--color-text)]">
              {zoneConfig[zone].label}
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: zoneConfig[zone].color }}
            >
              {percentages[zone]}%
            </span>
          </div>
          <div className="h-3 bg-[var(--color-border)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: zoneConfig[zone].color }}
              initial={{ width: 0 }}
              animate={{ width: `${percentages[zone]}%` }}
              transition={{
                delay: 0.5 + index * 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
