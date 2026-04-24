import React from 'react';
import { networkConfig } from '../config/network';
import { useTranslation } from '../i18n';

const TESTNET_PASSPHRASE = "Test SDF Network ; September 2015";

const NetworkBadge: React.FC = () => {
    const { t } = useTranslation();
    const isTestnet = networkConfig.networkPassphrase === TESTNET_PASSPHRASE;

    return (
        <div
            className="glass-panel"
            style={{
                padding: '6px 12px',
                borderRadius: '8px',
                border: isTestnet ? '1px solid var(--accent-amber-dim)' : '1px solid var(--accent-green-dim)',
                backgroundColor: isTestnet ? 'rgba(255, 191, 0, 0.05)' : 'rgba(0, 255, 127, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: isTestnet ? 'var(--accent-amber)' : 'var(--accent-green)',
                boxShadow: isTestnet ? '0 0 10px rgba(255, 191, 0, 0.1)' : '0 0 10px rgba(0, 255, 127, 0.1)',
                minHeight: 'auto',
                minWidth: 'auto',
            }}
            title={networkConfig.networkPassphrase}
        >
            <div 
                style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: isTestnet ? 'var(--accent-amber)' : 'var(--accent-green)',
                    boxShadow: isTestnet ? '0 0 6px var(--accent-amber)' : '0 0 6px var(--accent-green)'
                }} 
            />
            {isTestnet ? t('wallet.testnet') : t('wallet.mainnet')}
        </div>
    );
};

export default NetworkBadge;
