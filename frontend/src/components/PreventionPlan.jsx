import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Droplets, Apple, HeartPulse, Brain } from 'lucide-react';
import { preventionData } from '../data/preventionData';

export default function PreventionPlan({ riskCategory, avr, fractalDimension, tortuosity }) {
    const categoryTips = preventionData.categories[riskCategory] || preventionData.categories["Moderate"];
    const markerTips = preventionData.getMarkerTips(avr, fractalDimension, tortuosity);
    
    const weeks = [
        {
            title: "Week 1: Foundation",
            icon: <Droplets size={20} color="var(--accent-primary)" />,
            days: 7,
            goals: [
                { icon: <Apple size={16} />, text: categoryTips.diet[0] },
                { icon: <HeartPulse size={16} />, text: categoryTips.exercise[0] || "Light daily stretching." },
                { icon: <Brain size={16} />, text: "Focus on consistent sleep schedules." }
            ]
        },
        {
            title: "Week 2: Dietary Overhaul",
            icon: <Apple size={20} color="var(--success)" />,
            days: 7,
            goals: [
                { icon: <Apple size={16} />, text: categoryTips.diet[1] || "Introduce the Mediterranean diet." },
                { icon: <HeartPulse size={16} />, text: "Increase daily steps to 8,000." },
                { icon: <Brain size={16} />, text: categoryTips.sleep[0] }
            ]
        },
        {
            title: "Week 3: Exercise Ramp-Up",
            icon: <HeartPulse size={20} color="#ffab00" />,
            days: 7,
            goals: [
                { icon: <Apple size={16} />, text: "Strict low sodium (under 2,000mg)." },
                { icon: <HeartPulse size={16} />, text: categoryTips.exercise[1] || "Introduce steady-state cardio." },
                { icon: <Brain size={16} />, text: categoryTips.sleep[1] || "Monitor nightly rest periods." }
            ]
        },
        {
            title: "Week 4: Stress Management",
            icon: <Brain size={20} color="#ff3d00" />,
            days: 9,
            goals: [
                { icon: <Apple size={16} />, text: "Maintain strict dietary habits." },
                { icon: <HeartPulse size={16} />, text: "Consistently hit daily step goals." },
                { icon: <Brain size={16} />, text: categoryTips.medical ? categoryTips.medical[0] : "Schedule clinical checkup." }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                <Calendar size={20} color="var(--accent-primary)" />
                30-Day Personalized Prevention Plan
            </h4>

            {markerTips.length > 0 && (
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,171,0,0.05)', border: '1px solid rgba(255,171,0,0.2)', borderRadius: '12px' }}>
                    <h5 style={{ color: '#ffab00', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Vascular Marker Triggers:</h5>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                        {markerTips.map((tip, idx) => (
                            <li key={idx} style={{ marginBottom: '0.25rem' }}>{tip}</li>
                        ))}
                    </ul>
                </div>
            )}

            <motion.div 
                className="plan-grid" 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}
            >
                {weeks.map((week, index) => (
                    <motion.div 
                        key={index} 
                        className="glass-panel" 
                        variants={cardVariants}
                        style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                {week.icon}
                            </div>
                            <h5 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-vibrant)' }}>{week.title}</h5>
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {week.goals.map((goal, gIdx) => (
                                <div key={gIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                    <div style={{ opacity: 0.6, marginTop: '2px' }}>{goal.icon}</div>
                                    <p style={{ margin: 0, lineHeight: '1.4' }}>{goal.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
