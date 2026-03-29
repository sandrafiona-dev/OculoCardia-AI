import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
    ShieldCheck, 
    TrendingUp, 
    Calendar, 
    ArrowLeft,
    Heart,
    Activity,
    AlertCircle
} from 'lucide-react';
import PreventionPlan from '../components/PreventionPlan';
import RiskReversalTimeline from '../components/RiskReversalTimeline';

const Prevention = ({ data, inline, risk }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const prediction = location.state?.prediction;
    const riskLevel = risk || prediction?.risk_category || prediction?.hypertensionRisk || location.state?.riskLevel;

    useEffect(() => {
        if (!prediction && !inline) {
            navigate('/dashboard');
        }
    }, [prediction, navigate, inline]);

    if (!prediction && !inline) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="prevention-page"
            style={inline ? { padding: 0 } : {}}
        >
            {!inline && (
                <div className="app-header" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className="minimize-btn"
                            style={{ width: '40px', height: '40px' }}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 className="gradient-text font-heading" style={{ fontSize: '2rem' }}>Prevention & Lifestyle Roadmap</h2>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Personalized Intervention Strategy based on AI Clinical Findings</p>
                        </div>
                    </div>
                    
                    <div className={`glass-panel risk-summary-badge ${riskLevel}`}>
                        <ShieldCheck size={18} />
                        <span>Clinical Risk: {riskLevel}</span>
                    </div>
                </div>
            )}

            <div className="prevention-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Hero Section */}
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)' }}>
                    <div className="logo-badge" style={{ width: 80, height: 80, margin: '0 auto 1.5rem' }}>
                        <Heart size={40} className="pulse-animation" />
                    </div>
                    <h3 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Targeted Cardiovascular Reversal</h3>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                        Based on your retinal vascular biomarkers, we have developed a specialized roadmap to mitigate 
                        systemic risk and improve your micro-circulatory health.
                    </p>
                </div>

                <PreventionPlan 
                    riskCategory={riskLevel || "Moderate"} 
                    avr={prediction?.avr || 0} 
                    fractalDimension={prediction?.fractalDimension || prediction?.fractal_dimension || 0} 
                    tortuosity={prediction?.tortuosity || 0} 
                />
                <RiskReversalTimeline 
                    riskCategory={riskLevel || "Moderate"} 
                />


            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .risk-summary-badge {
                    padding: 0.5rem 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                .risk-summary-badge.Low { color: var(--success); border-color: var(--success); }
                .risk-summary-badge.Medium { color: #ffab00; border-color: #ffab00; }
                .risk-summary-badge.High { color: #ff3d00; border-color: #ff3d00; }

                .step-count {
                    width: 32px;
                    height: 32px;
                    background: var(--accent-primary);
                    color: black;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }

                .pulse-animation {
                    color: var(--accent-primary);
                    animation: pulse-glow 2s infinite;
                }

                .timeline-banner {
                    padding: 2rem;
                    background: rgba(0, 242, 254, 0.05);
                    border-radius: 16px;
                    border: 1px dashed rgba(0, 242, 254, 0.3);
                    text-align: center;
                `
            }} />
        </motion.div>
    );
};

export default Prevention;
