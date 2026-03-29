import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock } from 'lucide-react';

export default function RiskReversalTimeline({ riskCategory }) {
    const milestones = [
        {
            time: "Week 1",
            desc: "Blood pressure begins stabilizing with sodium reduction.",
        },
        {
            time: "Month 1",
            desc: "AVR improvement possible with consistent dietary changes.",
        },
        {
            time: "Month 3",
            desc: "Vascular inflammation visibly reduces on new scans.",
        },
        {
            time: "Month 6",
            desc: "Risk category may drop by one level (e.g., High to Moderate).",
        },
        {
            time: "Year 1",
            desc: "Significant cardiovascular health improvement achievable.",
        }
    ];

    const getColor = (category) => {
        switch (category) {
            case 'Severe': return '#ff0000';
            case 'High': return '#ff3d00';
            case 'Moderate': return '#ffab00';
            case 'Mild': return '#fcc000';
            default: return 'var(--success)';
        }
    };

    const riskColor = getColor(riskCategory);

    return (
        <div style={{ marginTop: '3rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '1.25rem' }}>
                <TrendingDown size={20} color={riskColor} />
                Projected Risk Reversal Timeline
            </h4>

            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ position: 'absolute', top: '50%', left: '0', height: '2px', background: `linear-gradient(90deg, var(--accent-primary), ${riskColor})`, zIndex: 1 }}
                ></motion.div>

                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                    {milestones.map((ms, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '18%', textAlign: 'center' }}
                        >
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: index === milestones.length - 1 ? 'var(--success)' : riskColor, boxShadow: `0 0 10px ${riskColor}`, marginBottom: '1rem' }}></div>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-vibrant)', marginBottom: '0.25rem' }}>{ms.time}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: '1.3' }}>{ms.desc}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
