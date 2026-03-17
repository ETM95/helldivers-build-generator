import React from 'react';
import * as Icons from 'lucide-react';

// Mapa de iconos por tipo de arma
export const ArmaIcon = ({ tipo, className = "w-5 h-5" }) => {
  const iconMap = {
    rifle: Icons.Crosshair,
    escopeta: Icons.Bomb,
    subfusil: Icons.Zap,
    laser: Icons.Flashlight,
    plasma: Icons.Flame,
    arco: Icons.Zap,
    explosivo: Icons.Bomb,
    lanzallamas: Icons.Flame,
    pistola: Icons.Crosshair,
    revolver: Icons.Crosshair,
    apoyo: Icons.Heart,
    default: Icons.Sword
  };
  
  const IconComponent = iconMap[tipo] || iconMap.default;
  return <IconComponent className={className} />;
};

export const ArmaduraIcon = ({ className = "w-5 h-5" }) => (
  <Icons.Shield className={className} />
);

export const GranadaIcon = ({ tipo, className = "w-5 h-5" }) => {
  const iconMap = {
    fragmentacion: Icons.Bomb,
    explosiva: Icons.Bomb,
    incendiaria: Icons.Flame,
    gas: Icons.Wind,
    aturdimiento: Icons.Zap,
    termita: Icons.Flame,
    impacto: Icons.Bomb,
    default: Icons.Bomb
  };
  
  const IconComponent = iconMap[tipo] || iconMap.default;
  return <IconComponent className={className} />;
};

export const EstratagemaIcon = ({ tipo, className = "w-5 h-5" }) => {
  const iconMap = {
    orbital: Icons.Satellite,
    eagle: Icons.Bird,
    torreta: Icons.Target,
    defensiva: Icons.Shield,
    apoyo: Icons.Package,
    explosiva: Icons.Bomb,
    trampa: Icons.Skull,
    antitanque: Icons.Crosshair,
    default: Icons.Radio
  };
  
  const IconComponent = iconMap[tipo] || iconMap.default;
  return <IconComponent className={className} />;
};

export const MejoraIcon = ({ className = "w-5 h-5" }) => (
  <Icons.Zap className={className} />
);

export const DemocraciaIcon = ({ className = "w-6 h-6" }) => (
  <Icons.Crown className={className} />
);