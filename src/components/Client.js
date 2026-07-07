import React from 'react';
import Avatar from 'react-avatar';

// Cycle through the app's syntax-inspired accent palette so each
// collaborator's avatar ring reads as a distinct "cursor color".
const ACCENT_COLORS = ['#f0a955', '#48d8c0', '#a17fea', '#ef6f6c'];

const getAccentColor = (name = '') => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return ACCENT_COLORS[Math.abs(hash) % ACCENT_COLORS.length];
};

const Client = ({username}) => {
    const accent = getAccentColor(username);

    return (
        <div className="client">
            <Avatar
                name={username}
                size={48}
                round="12px"
                color={accent}
                fgColor="#0b0d13"
                style={{boxShadow: `0 0 0 2px #12141c, 0 0 0 3px ${accent}`}}
            />
            <span className="userName">{username}</span>
        </div>
    );
};

export default Client;
