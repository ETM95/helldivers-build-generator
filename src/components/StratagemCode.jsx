import React from 'react';
import './StratagemCode.css';

// Mapeo de códigos de entrada para estratagemas
const stratagemCodes = {
  // Patriotic Administration Center
  'MG-43': '↓ ↑ ← →',
  'Stalwart': '↓ ↑ ← → ↑',
  'Anti-Material Rifle': '↓ ↓ ↑ →',
  'Expendable Anti-Tank': '↓ ↓ ← ↑ →',
  'Recoilless Rifle': '↓ ← ↓ ↑ →',
  'Flamethrower': '↓ ↑ ← ↓ →',
  'Autocannon': '↓ ← ↓ ↑ → ↓',
  'Railgun': '↓ ↑ ← → ↑',
  'Spear': '↓ ↓ ↑ ↑ →',
  
  // Orbital Cannons
  'Orbital Gatling Barrage': '→ ↓ ↑ ← →',
  'Orbital Airburst Strike': '→ → →',
  'Orbital 120MM HE Barrage': '→ ↓ ← → ↓',
  'Orbital 380MM HE Barrage': '→ ↓ ↑ ↑ → ↓',
  'Orbital Walking Barrage': '→ ↓ ← → ↑',
  'Orbital Laser': '→ ↓ ↑ → ←',
  'Orbital Railcannon Strike': '→ ↑ ↓ ↓ →',
  
  // Hangar
  'Eagle Strafing Run': '↑ → ↓ ←',
  'Eagle Airstrike': '↑ → ↓ ← →',
  'Eagle Cluster Bomb': '↑ → ↓ ← ↑',
  'Eagle Napalm Airstrike': '↑ → ↓ ← ↑ →',
  'Eagle Smoke Strike': '↑ → ↓ ← ↑ ↓',
  'Eagle 110MM Rocket Pods': '↑ → ↓ ← ↑ ↑',
  'Eagle 500KG Bomb': '↑ → ↓ ← ↓ ↓',
  'Jump Pack': '↓ ↑ ↑ ↓',
  
  // Bridge
  'Orbital Precision Strike': '→ → ←',
  'Orbital Gas Strike': '→ → → ←',
  'Orbital EMS Strike': '→ → ↑ ←',
  'Orbital Smoke Strike': '→ → ← ↑',
  'HMG Emplacement': '↓ ↑ ← ↓ →',
  'Shield Generator Relay': '↓ ↓ ← → ↑',
  'Tesla Tower': '↓ ↑ → ↑ ←',
  
  // Engineering Bay
  'Anti-Personnel Minefield': '↓ ← ↑ →',
  'Supply Pack': '↓ ← ↓ ↑ →',
  'Grenade Launcher': '↓ ↑ ← → ↑',
  'Laser Cannon': '↓ ← ↓ ↑ ←',
  'Incendiary Mines': '↓ ← ↑ → ↓',
  'Guard Dog Rover': '↓ ↑ ← ↓ → ↑',
  'Ballistic Shield Backpack': '↓ ← ↑ ↑ →',
  'Arc Thrower': '↓ → ↑ ↓ ←',
  'Shield Generator Pack': '↓ ↑ ← → ←',
  
  // Robotics Workshop
  'Machine Gun Sentry': '↑ ↑ → ←',
  'Gatling Sentry': '↑ ↑ ← →',
  'Mortar Sentry': '↑ → ↑ ←',
  'Guard Dog': '↑ ↑ ↓ →',
  'Autocannon Sentry': '↑ ↑ → → ←',
  'Rocket Sentry': '↑ ↑ → → ↑',
  'EMS Mortar Sentry': '↑ → ↑ ← ↓',
};

const StratagemCode = ({ name }) => {
  const code = stratagemCodes[name];
  
  if (!code) return null;
  
  const directions = code.split(' ');
  
  return (
    <div className="stratagem-code">
      {directions.map((dir, index) => (
        <span key={index} className={`code-arrow code-${dir}`}>
          {dir === '↑' && '⬆️'}
          {dir === '↓' && '⬇️'}
          {dir === '←' && '⬅️'}
          {dir === '→' && '➡️'}
        </span>
      ))}
    </div>
  );
};

export default StratagemCode;