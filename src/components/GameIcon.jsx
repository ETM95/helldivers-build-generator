import React from 'react';
import * as LucideIcons from 'lucide-react';
import './GameIcon.css';

// Mapeo de nombres de iconos a rutas de imágenes
const iconPaths = {
  // Estratagemas - Patrulla
  'MG-43': '/icons/stratagems/mg43.png',
  'Stalwart': '/icons/stratagems/stalwart.png',
  'Anti-Material Rifle': '/icons/stratagems/amr.png',
  'Expendable Anti-Tank': '/icons/stratagems/eat.png',
  'Recoilless Rifle': '/icons/stratagems/recoilless.png',
  'Flamethrower': '/icons/stratagems/flamethrower.png',
  'Autocannon': '/icons/stratagems/autocannon.png',
  'Railgun': '/icons/stratagems/railgun.png',
  'Spear': '/icons/stratagems/spear.png',
  
  // Orbitales
  'Orbital Gatling Barrage': '/icons/stratagems/orbital_gatling.png',
  'Orbital Airburst Strike': '/icons/stratagems/orbital_airburst.png',
  'Orbital 120MM HE Barrage': '/icons/stratagems/orbital_120mm.png',
  'Orbital 380MM HE Barrage': '/icons/stratagems/orbital_380mm.png',
  'Orbital Walking Barrage': '/icons/stratagems/orbital_walking.png',
  'Orbital Laser': '/icons/stratagems/orbital_laser.png',
  'Orbital Railcannon Strike': '/icons/stratagems/orbital_railcannon.png',
  'Orbital Precision Strike': '/icons/stratagems/orbital_precision.png',
  'Orbital Gas Strike': '/icons/stratagems/orbital_gas.png',
  'Orbital EMS Strike': '/icons/stratagems/orbital_ems.png',
  'Orbital Smoke Strike': '/icons/stratagems/orbital_smoke.png',
  
  // Eagle
  'Eagle Strafing Run': '/icons/stratagems/eagle_strafing.png',
  'Eagle Airstrike': '/icons/stratagems/eagle_airstrike.png',
  'Eagle Cluster Bomb': '/icons/stratagems/eagle_cluster.png',
  'Eagle Napalm Airstrike': '/icons/stratagems/eagle_napalm.png',
  'Eagle Smoke Strike': '/icons/stratagems/eagle_smoke.png',
  'Eagle 110MM Rocket Pods': '/icons/stratagems/eagle_rockets.png',
  'Eagle 500KG Bomb': '/icons/stratagems/eagle_500kg.png',
  
  // Sentry
  'Machine Gun Sentry': '/icons/stratagems/sentry_mg.png',
  'Gatling Sentry': '/icons/stratagems/sentry_gatling.png',
  'Mortar Sentry': '/icons/stratagems/sentry_mortar.png',
  'EMS Mortar Sentry': '/icons/stratagems/sentry_ems.png',
  'Autocannon Sentry': '/icons/stratagems/sentry_autocannon.png',
  'Rocket Sentry': '/icons/stratagems/sentry_rocket.png',
  'Tesla Tower': '/icons/stratagems/tesla_tower.png',
  
  // Backpack/Support
  'Guard Dog': '/icons/stratagems/guard_dog.png',
  'Guard Dog Rover': '/icons/stratagems/guard_dog_rover.png',
  'Jump Pack': '/icons/stratagems/jump_pack.png',
  'Supply Pack': '/icons/stratagems/supply_pack.png',
  'Shield Generator Pack': '/icons/stratagems/shield_pack.png',
  'Ballistic Shield Backpack': '/icons/stratagems/ballistic_shield.png',
  'HMG Emplacement': '/icons/stratagems/hmg_emplacement.png',
  
  // Exosuit
  'EXO-45 Patriot Exosuit': '/icons/stratagems/exo45_patriot.png',
  'EXO-49 Emancipator Exosuit': '/icons/stratagems/exo49_emancipator.png',
  
  // Minas
  'Anti-Personnel Minefield': '/icons/stratagems/mines_ap.png',
  'Incendiary Mines': '/icons/stratagems/mines_incendiary.png',
  'Anti-Tank Mines': '/icons/stratagems/mines_at.png',
  
  // Armas Principales
  'AR-23 Liberator': '/icons/weapons/ar23_liberator.png',
  'AR-23P Liberator Penetrator': '/icons/weapons/ar23p_penetrator.png',
  'AR-23C Liberator Concussive': '/icons/weapons/ar23c_concussive.png',
  'SG-225 Breaker': '/icons/weapons/sg225_breaker.png',
  'SG-225SP Breaker Spray&Pray': '/icons/weapons/sg225sp_spray.png',
  'SG-225IE Breaker Incendiary': '/icons/weapons/sg225ie_incendiary.png',
  'JAR-5 Dominator': '/icons/weapons/jar5_dominator.png',
  'R-63 Diligence': '/icons/weapons/r63_diligence.png',
  'R-63CS Diligente Counter Sniper': '/icons/weapons/r63cs_counter.png',
  'LAS-16 Sickle': '/icons/weapons/las16_sickle.png',
  'LAS-5 Scythe': '/icons/weapons/las5_scythe.png',
  'PLAS-1 Scorcher': '/icons/weapons/plas1_scorcher.png',
  'PLAS-39 Accelerator Rifle': '/icons/weapons/plas39_accelerator.png',
  'ARC-12 Blitzer': '/icons/weapons/arc12_blitzer.png',
  'R-36 Eruptor': '/icons/weapons/r36_eruptor.png',
  'CB-9 Exploding Crossbow': '/icons/weapons/cb9_crossbow.png',
  'BR-14 Adjudicator': '/icons/weapons/br14_adjudicator.png',
  'FLAM-66 Torcher': '/icons/weapons/flam66_torcher.png',
  'SG-451 Cookout': '/icons/weapons/sg451_cookout.png',
  
  // Armas Secundarias
  'P-2 Peacemaker': '/icons/weapons/p2_peacemaker.png',
  'P-19 Redeemer': '/icons/weapons/p19_redeemer.png',
  'P-4 Senator': '/icons/weapons/p4_senator.png',
  'P-113 Verdict': '/icons/weapons/p113_verdict.png',
  'PLAS-15 Loyalist': '/icons/weapons/plas15_loyalist.png',
  'GP-31 Grenade Pistol': '/icons/weapons/gp31_grenade.png',
  'GP-31 Ultimatum': '/icons/weapons/gp31_ultimatum.png',
  'LAS-7 Dagger': '/icons/weapons/las7_dagger.png',
  'LAS-58 Talon': '/icons/weapons/las58_talon.png',
  'P-11 Stim Pistol': '/icons/weapons/p11_stim.png',
  'P-72 Crisper': '/icons/weapons/p72_crisper.png',
  'CQC-19 Stun Lance': '/icons/weapons/cqc19_stunlance.png',
  'CQC-30 Stun Baton': '/icons/weapons/cqc30_stunbaton.png',
  'SG-22 Bushwhacker': '/icons/weapons/sg22_bushwhacker.png',
  
  // Granadas
  'G-6 Frag': '/icons/grenades/g6_frag.png',
  'G-12 High Explosive': '/icons/grenades/g12_he.png',
  'G-16 Impact': '/icons/grenades/g16_impact.png',
  'G-10 Incendiary': '/icons/grenades/g10_incendiary.png',
  'G-13 Incendiary Impact': '/icons/grenades/g13_incendiary_impact.png',
  'G-3 Stun': '/icons/grenades/g3_stun.png',
  'G-4 Gas': '/icons/grenades/g4_gas.png',
  'G-23 Stun': '/icons/grenades/g23_stun.png',
  'G-123 Thermite': '/icons/grenades/g123_thermite.png',
  'K-2 Throwing Knife': '/icons/grenades/k2_knife.png',
  
  // Warbonds
  'Helldivers Mobilize': '/icons/warbonds/warbond_mobilize.png',
  'Steeled Veterans': '/icons/warbonds/warbond_steeled.png',
  'Cutting Edge': '/icons/warbonds/warbond_cutting.png',
  'Democratic Detonation': '/icons/warbonds/warbond_demolition.png',
  'Polar Patriots': '/icons/warbonds/warbond_polar.png',
  'Viper Commandos': '/icons/warbonds/warbond_viper.png',
  "Freedom's Flames": '/icons/warbonds/warbond_flames.png',
  'Chemical Agents': '/icons/warbonds/warbond_chemical.png',
  'Truth Enforcers': '/icons/warbonds/warbond_truth.png',
  'Urban Legends': '/icons/warbonds/warbond_urban.png',
  'Servants of Freedom': '/icons/warbonds/warbond_servants.png',
  'Borderline Justice': '/icons/warbonds/warbond_justice.png',
  'Redacted Regiment': '/icons/warbonds/warbond_redacted.png',
  'Siege Breakers': '/icons/warbonds/warbond_siege.png',
  'Entrenched Division': '/icons/warbonds/warbond_entrenched.png',
  
  // Por defecto
  'Reinforce': '/icons/stratagems/reinforce.png',
  'SOS Beacon': '/icons/stratagems/sos_beacon.png',
  'Resupply': '/icons/stratagems/resupply.png',
};

// Iconos por tipo (fallback con Lucide)
const getFallbackIcon = (tipo) => {
  const fallbackMap = {
    'rifle': LucideIcons.Crosshair,
    'escopeta': LucideIcons.Bomb,
    'subfusil': LucideIcons.Zap,
    'laser': LucideIcons.Flashlight,
    'plasma': LucideIcons.Flame,
    'explosivo': LucideIcons.Bomb,
    'lanzallamas': LucideIcons.Flame,
    'pistola': LucideIcons.Crosshair,
    'orbital': LucideIcons.Satellite,
    'eagle': LucideIcons.Bird,
    'torreta': LucideIcons.Target,
    'defensiva': LucideIcons.Shield,
    'apoyo': LucideIcons.Package,
    'default': LucideIcons.HelpCircle
  };
  return fallbackMap[tipo] || fallbackMap.default;
};

const GameIcon = ({ 
  name, 
  tipo = 'default', 
  size = 'medium',
  className = '',
  fallback = true
}) => {
  const [imageError, setImageError] = React.useState(false);
  const iconPath = iconPaths[name];
  
  const sizeClass = {
    small: 'game-icon-small',
    medium: 'game-icon-medium',
    large: 'game-icon-large',
  }[size] || 'game-icon-medium';
  
  // Si hay imagen y no ha dado error, mostrar imagen
  if (iconPath && !imageError && fallback) {
    return (
      <div className={`game-icon-container ${sizeClass} ${className}`}>
        <img
          src={iconPath}
          alt={name}
          className="game-icon-image"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
    );
  }
  
  // Fallback a Lucide icon
  const FallbackIcon = getFallbackIcon(tipo);
  return (
    <div className={`game-icon-container ${sizeClass} ${className}`}>
      <FallbackIcon className="game-icon-fallback" />
    </div>
  );
};

export default GameIcon;