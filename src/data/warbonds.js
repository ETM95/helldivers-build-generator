// ============================================
// DATOS COMPLETOS DE HELDIVERS 2 - MARZO 2026
// ============================================

// Definición de tipos de estratagemas para validación
export const EstratagemaTipo = {
  MOCHILA: 'mochila',
  APOYO: 'apoyo',
  ARMA_APOYO: 'arma_apoyo', // Nuevo tipo para armas de apoyo
  ORBITAL: 'orbital',
  EAGLE: 'eagle',
  TORRETA: 'torreta',
  DEFENSIVA: 'defensiva',
  EXPLOSIVO: 'explosivo',
  ANTITANQUE: 'antitanque'
};

// 1. HELDIVERS MOBILIZE (Base)
export const warbond_mobilize = {
  id: 'mobilize',
  nombre: 'HELDIVERS MOBILIZE',
  fecha: 'BASE GAME',
  color: '#4ecdc4',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'ar23', nombre: 'AR-23 Liberator', tipo: 'rifle', rareza: 'comun' },
    { id: 'sg225', nombre: 'SG-225 Breaker', tipo: 'escopeta', rareza: 'comun' },
    { id: 'mp98', nombre: 'MP-98 Knight', tipo: 'subfusil', rareza: 'comun' },
    { id: 'r63', nombre: 'R-63 Diligence', tipo: 'rifle', rareza: 'comun' },
    { id: 'r63cs', nombre: 'R-63CS Diligente Counter Sniper', tipo: 'rifle', rareza: 'rara' },
    { id: 'ar23p', nombre: 'AR-23P Liberator Penetrator', tipo: 'rifle', rareza: 'rara' },
    { id: 'sg225sp', nombre: 'SG-225SP Breaker Spray&Pray', tipo: 'escopeta', rareza: 'rara' },
    { id: 'smg37', nombre: 'SMG-37 Defender', tipo: 'subfusil', rareza: 'rara' }
  ],
  armasSecundarias: [
    { id: 'p2', nombre: 'P-2 Peacemaker', tipo: 'pistola', rareza: 'comun' },
    { id: 'p19', nombre: 'P-19 Redeemer', tipo: 'pistola', rareza: 'comun' }
  ],
  granadas: [
    { id: 'g6', nombre: 'G-6 Frag', tipo: 'fragmentacion' },
    { id: 'g12', nombre: 'G-12 High Explosive', tipo: 'explosiva' },
    { id: 'g16', nombre: 'G-16 Impact', tipo: 'impacto' }
  ],
  armaduras: [
    { id: 'b01', nombre: 'B-01 Tactical', pasiva: 'Extra Padding: +50 armadura' },
    { id: 'ph202', nombre: 'PH-202 Twigsnapper', pasiva: 'Engineering Kit: +2 granadas, +30% resistencia retroceso' },
    { id: 'tr9', nombre: 'TR-9 Cavalier of Democracy', pasiva: 'Democracy Protects: 50% sobrevivir golpes mortales' }
  ],
  estratagemas: [
    // Armas de apoyo (solo 1 permitida)
    { id: 'mg', nombre: 'Machine Gun', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'ams', nombre: 'Anti-Material Rifle', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'stalwart', nombre: 'Stalwart', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'expendable', nombre: 'Expendable Anti-Tank', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'recoilless', nombre: 'Recoilless Rifle', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'flamethrower', nombre: 'Flamethrower', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'autocannon', nombre: 'Autocannon', tipo: EstratagemaTipo.ARMA_APOYO, requiereMochila: true },
    { id: 'heavyMg', nombre: 'Heavy Machine Gun', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'airburst', nombre: 'Airburst Rocket Launcher', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'commando', nombre: 'Commando', tipo: EstratagemaTipo.ARMA_APOYO },
    // Mochilas
    { id: 'guardDog', nombre: 'Guard Dog', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'guardDogRover', nombre: 'Guard Dog Rover', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'jumpPack', nombre: 'Jump Pack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'supplyPack', nombre: 'Supply Pack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'shieldPack', nombre: 'Shield Generator Pack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'ballisticShield', nombre: 'Ballistic Shield Backpack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    // Eagle
    { id: 'eagleStrafing', nombre: 'Eagle Strafing Run', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagleAirstrike', nombre: 'Eagle Airstrike', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagleCluster', nombre: 'Eagle Cluster Bomb', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagleNapalm', nombre: 'Eagle Napalm Airstrike', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagleSmoke', nombre: 'Eagle Smoke Strike', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagle110mm', nombre: 'Eagle 110MM Rocket Pods', tipo: EstratagemaTipo.EAGLE },
    { id: 'eagle500kg', nombre: 'Eagle 500KG Bomb', tipo: EstratagemaTipo.EAGLE },
    // Orbital
    { id: 'orbitalGatling', nombre: 'Orbital Gatling Barrage', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalAirburst', nombre: 'Orbital Airburst Strike', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbital120mm', nombre: 'Orbital 120MM HE Barrage', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbital380mm', nombre: 'Orbital 380MM HE Barrage', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalWalking', nombre: 'Orbital Walking Barrage', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalLaser', nombre: 'Orbital Laser', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalRailcannon', nombre: 'Orbital Railcannon Strike', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalSmoke', nombre: 'Orbital Smoke Strike', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalEMS', nombre: 'Orbital EMS Strike', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalGas', nombre: 'Orbital Gas Strike', tipo: EstratagemaTipo.ORBITAL },
    { id: 'orbitalPrecision', nombre: 'Orbital Precision Strike', tipo: EstratagemaTipo.ORBITAL },
    // Torretas
    { id: 'mgSentry', nombre: 'Machine Gun Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'gatlingSentry', nombre: 'Gatling Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'mortarSentry', nombre: 'Mortar Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'emsSentry', nombre: 'EMS Mortar Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'autocannonSentry', nombre: 'Autocannon Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'rocketSentry', nombre: 'Rocket Sentry', tipo: EstratagemaTipo.TORRETA },
    // Defensivas
    { id: 'teslaTower', nombre: 'Tesla Tower', tipo: EstratagemaTipo.DEFENSIVA },
    { id: 'antiPersonnelMines', nombre: 'Anti-Personnel Minefield', tipo: EstratagemaTipo.DEFENSIVA },
    { id: 'incendiaryMines', nombre: 'Incendiary Mines', tipo: EstratagemaTipo.DEFENSIVA },
    { id: 'antiTankMines', nombre: 'Anti-Tank Mines', tipo: EstratagemaTipo.DEFENSIVA },
    // Exos
    { id: 'exo45', nombre: 'EXO-45 Patriot Exosuit', tipo: EstratagemaTipo.APOYO },
    { id: 'exo49', nombre: 'EXO-49 Emancipator Exosuit', tipo: EstratagemaTipo.APOYO }
  ],
  mejoras: [
    'Stamina Booster',
    'Muscle Enhancement',
    'UAV Recon Booster',
    'Hellpod Space Optimization',
    'Vitality Enhancement'
  ]
};

// 2. STEELED VETERANS
export const warbond_steeled = {
  id: 'steeled',
  nombre: 'STEELED VETERANS',
  fecha: 'MAR 2024',
  color: '#ff6b6b',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'jar5', nombre: 'JAR-5 Dominator', tipo: 'rifle', rareza: 'epica' },
    { id: 'sg225ie', nombre: 'SG-225IE Breaker Incendiary', tipo: 'escopeta', rareza: 'epica' },
    { id: 'ar23e', nombre: 'AR-23E Liberator Concussive', tipo: 'rifle', rareza: 'rara' }
  ],
  armasSecundarias: [
    { id: 'p4', nombre: 'P-4 Senator', tipo: 'revolver', rareza: 'epica' }
  ],
  armaduras: [
    { id: 'sa12', nombre: 'SA-12 Servo Assisted', pasiva: 'Servo-Assisted: Mayor fuerza lanzamiento' },
    { id: 'fs05', nombre: 'FS-05 Marksman', pasiva: 'Fortified: +50% resistencia explosiones' },
    { id: 'fs11', nombre: 'FS-11 Executioner', pasiva: 'Fortified: +50% resistencia explosiones' }
  ]
};

// 3. CUTTING EDGE
export const warbond_cutting = {
  id: 'cutting',
  nombre: 'CUTTING EDGE',
  fecha: 'ABR 2024',
  color: '#9b59b6',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'las16', nombre: 'LAS-16 Sickle', tipo: 'laser', rareza: 'epica' },
    { id: 'sg8p', nombre: 'SG-8P Punisher Plasma', tipo: 'plasma', rareza: 'epica' },
    { id: 'arc12', nombre: 'ARC-12 Blitzer', tipo: 'arco', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'las7', nombre: 'LAS-7 Dagger', tipo: 'laser', rareza: 'rara' }
  ],
  granadas: [
    { id: 'g23', nombre: 'G-23 Stun', tipo: 'aturdimiento' }
  ],
  armaduras: [
    { id: 'sc15', nombre: 'SC-15 Drone Master', pasiva: 'Electrical Conduit: 90% resistencia electricidad' },
    { id: 'sc30', nombre: 'SC-30 Trailblazer Scout', pasiva: 'Scout: No apareces en radar' },
    { id: 'sc34', nombre: 'SC-34 Infiltrator', pasiva: 'Scout: No apareces en radar' }
  ],
  mejoras: ['Localization Confusion']
};

// 4. DEMOCRATIC DETONATION
export const warbond_demolition = {
  id: 'demolition',
  nombre: 'DEMOCRATIC DETONATION',
  fecha: 'MAY 2024',
  color: '#ff9f43',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'r36', nombre: 'R-36 Eruptor', tipo: 'explosivo', rareza: 'epica' },
    { id: 'cb9', nombre: 'CB-9 Exploding Crossbow', tipo: 'explosivo', rareza: 'epica' },
    { id: 'br14', nombre: 'BR-14 Adjudicator', tipo: 'rifle', rareza: 'rara' }
  ],
  granadas: [
    { id: 'g123', nombre: 'G-123 Thermite', tipo: 'termita' }
  ],
  armaduras: [
    { id: 'ce07', nombre: 'CE-07 Demolition Specialist', pasiva: 'Engineering Kit: +2 granadas' },
    { id: 'ce27', nombre: 'CE-27 Ground Breaker', pasiva: 'Engineering Kit: +2 granadas' },
    { id: 'ce35', nombre: 'CE-35 Trench Engineer', pasiva: 'Engineering Kit: +2 granadas' }
  ]
};

// 5. POLAR PATRIOTS
export const warbond_polar = {
  id: 'polar',
  nombre: 'POLAR PATRIOTS',
  fecha: 'JUN 2024',
  color: '#3498db',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'ar61', nombre: 'AR-61 Tenderizer', tipo: 'rifle', rareza: 'rara' },
    { id: 'smg72', nombre: 'SMG-72 Pummeler', tipo: 'subfusil', rareza: 'rara' },
    { id: 'plas1', nombre: 'PLAS-1 Scorcher', tipo: 'plasma', rareza: 'epica' }
  ],
  granadas: [
    { id: 'g13', nombre: 'G-13 Incendiary Impact', tipo: 'incendiaria' }
  ],
  armaduras: [
    { id: 'cw22', nombre: 'CW-22 Kodiak', pasiva: 'Fortified: Resistencia explosiones' },
    { id: 'cw36', nombre: 'CW-36 Winter Warrior', pasiva: 'Advanced Filtration: Inmunidad gas' },
    { id: 'cw09', nombre: 'CW-09 Arctic Ranger', pasiva: 'Scout: No apareces en radar' }
  ]
};

// 6. VIPER COMMANDOS
export const warbond_viper = {
  id: 'viper',
  nombre: 'VIPER COMMANDOS',
  fecha: 'JUL 2024',
  color: '#2ecc71',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'ar23a', nombre: 'AR-23A Liberator Carbine', tipo: 'rifle', rareza: 'rara' },
    { id: 'sg22', nombre: 'SG-22 Bushwhacker', tipo: 'escopeta', rareza: 'epica' }
  ],
  granadas: [
    { id: 'k2', nombre: 'K-2 Throwing Knife', tipo: 'cuerpo a cuerpo' }
  ],
  armaduras: [
    { id: 'ph9', nombre: 'PH-9 Predator', pasiva: 'Peak Physique: Mejor manejo armas' },
    { id: 'ph56', nombre: 'PH-56 Jaguar', pasiva: 'Peak Physique: Mejor manejo armas' }
  ],
  mejoras: ['Experimental Infusion']
};

// 7. FREEDOM'S FLAMES
export const warbond_flames = {
  id: 'flames',
  nombre: "FREEDOM'S FLAMES",
  fecha: 'AGO 2024',
  color: '#e74c3c',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'flam66', nombre: 'FLAM-66 Torcher', tipo: 'lanzallamas', rareza: 'epica' },
    { id: 'sg451', nombre: 'SG-451 Cookout', tipo: 'escopeta', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'p72', nombre: 'P-72 Crisper', tipo: 'lanzallamas', rareza: 'epica' }
  ],
  armaduras: [
    { id: 'i09', nombre: 'I-09 Heatseeker', pasiva: 'Flame Resistance: 75% resistencia fuego' },
    { id: 'i102', nombre: 'I-102 Dragon', pasiva: 'Flame Resistance: 75% resistencia fuego' },
    { id: 'i44', nombre: 'I-44 Salamander', pasiva: 'Flame Resistance: 75% resistencia fuego' }
  ],
  mejoras: ['Dead Sprint']
};

// 8. CHEMICAL AGENTS
export const warbond_chemical = {
  id: 'chemical',
  nombre: 'CHEMICAL AGENTS',
  fecha: 'SEP 2024',
  color: '#1abc9c',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'plas39', nombre: 'PLAS-39 Accelerator Rifle', tipo: 'plasma', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'p11', nombre: 'P-11 Stim Pistol', tipo: 'apoyo', rareza: 'epica' }
  ],
  granadas: [
    { id: 'g4', nombre: 'G-4 Gas', tipo: 'gas' }
  ],
  armaduras: [
    { id: 'af02', nombre: 'AF-02 Haz-Master', pasiva: 'Advanced Filtration: Inmunidad gas' },
    { id: 'af07', nombre: 'AF-07 Haz-Master', pasiva: 'Advanced Filtration: Inmunidad gas' },
    { id: 'af91', nombre: 'AF-91 Haz-Master', pasiva: 'Advanced Filtration: Inmunidad gas' }
  ]
};

// 9. TRUTH ENFORCERS
export const warbond_truth = {
  id: 'truth',
  nombre: 'TRUTH ENFORCERS',
  fecha: 'OCT 2024',
  color: '#8e44ad',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'smg32', nombre: 'SMG-32 Reprimand', tipo: 'subfusil', rareza: 'rara' },
    { id: 'sg20', nombre: 'SG-20 Halt', tipo: 'escopeta', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'plas15', nombre: 'PLAS-15 Loyalist', tipo: 'plasma', rareza: 'rara' }
  ],
  armaduras: [
    { id: 'tr62', nombre: 'TR-62 Enforcer', pasiva: 'Democracy Protects: 50% supervivencia' },
    { id: 'tr73', nombre: 'TR-73 Truthseeker', pasiva: 'Democracy Protects: 50% supervivencia' },
    { id: 'tr117', nombre: 'TR-117 Interrogator', pasiva: 'Democracy Protects: 50% supervivencia' }
  ],
  mejoras: ['Motivational Shocks']
};

// 10. URBAN LEGENDS
export const warbond_urban = {
  id: 'urban',
  nombre: 'URBAN LEGENDS',
  fecha: 'NOV 2024',
  color: '#95a5a6',
  requiereSuperCiudadano: false,
  armasSecundarias: [
    { id: 'cqc19', nombre: 'CQC-19 Stun Lance', tipo: 'cuerpo a cuerpo', rareza: 'epica' }
  ],
  estratagemas: [
    { id: 'antiTankEmplacement', nombre: 'Anti-Tank Emplacement', tipo: EstratagemaTipo.DEFENSIVA },
    { id: 'flameSentry', nombre: 'Flame Sentry', tipo: EstratagemaTipo.TORRETA },
    { id: 'directionalShield', nombre: 'Directional Shield', tipo: EstratagemaTipo.DEFENSIVA }
  ],
  armaduras: [
    { id: 'sr24', nombre: 'SR-24 Street Scout', pasiva: 'Scout: No apareces en radar' },
    { id: 'sr32', nombre: 'SR-32 Urban Ranger', pasiva: 'Scout: No apareces en radar' }
  ]
};

// 11. SERVANTS OF FREEDOM
export const warbond_servants = {
  id: 'servants',
  nombre: 'SERVANTS OF FREEDOM',
  fecha: 'DIC 2024',
  color: '#f1c40f',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'las17', nombre: 'LAS-17 Double Edged Sickle', tipo: 'laser', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'gp31', nombre: 'GP-31 Ultimatum', tipo: 'explosivo', rareza: 'epica' }
  ],
  estratagemas: [
    { id: 'portableHellbomb', nombre: 'Portable Hellbomb', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true }
  ],
  armaduras: [
    { id: 'se01', nombre: 'SE-01 Martyr', pasiva: 'Democracy Protects: 50% supervivencia' },
    { id: 'se03', nombre: 'SE-03 Zealot', pasiva: 'Democracy Protects: 50% supervivencia' }
  ]
};

// 12. BORDERLINE JUSTICE
export const warbond_justice = {
  id: 'justice',
  nombre: 'BORDERLINE JUSTICE',
  fecha: 'ENE 2025',
  color: '#d35400',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'r6', nombre: 'R-6 Deadeye', tipo: 'rifle', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'las58', nombre: 'LAS-58 Talon', tipo: 'laser', rareza: 'rara' }
  ],
  granadas: [
    { id: 'ted63', nombre: 'TED-63 Dynamite', tipo: 'explosiva' }
  ],
  armaduras: [
    { id: 'bw34', nombre: 'BW-34 Outrider', pasiva: 'Peak Physique: Mejor manejo armas' },
    { id: 'bw56', nombre: 'BW-56 Lawman', pasiva: 'Peak Physique: Mejor manejo armas' }
  ]
};

// 13. DUST DEVILS
export const warbond_dust = {
  id: 'dust',
  nombre: 'DUST DEVILS',
  fecha: '2025',
  color: '#bdc3c7',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'sta52', nombre: 'StA-52 Assault Rifle', tipo: 'rifle', rareza: 'rara' },
    { id: 'sta11', nombre: 'StA-11 SMG', tipo: 'subfusil', rareza: 'rara' }
  ],
  armaduras: [
    { id: 'dd01', nombre: 'DD-01 Dust Devil', pasiva: 'Sandstorm Resistance' },
    { id: 'dd02', nombre: 'DD-02 Sand Raider', pasiva: 'Sandstorm Resistance' }
  ]
};

// 14. CONTROL GROUP
export const warbond_control = {
  id: 'control',
  nombre: 'CONTROL GROUP',
  fecha: '2025',
  color: '#7f8c8d',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'r2124', nombre: 'R-2124 Constitution', tipo: 'rifle', rareza: 'rara' }
  ]
};

// 15. MASTERS OF CEREMONY
export const warbond_masters = {
  id: 'masters',
  nombre: 'MASTERS OF CEREMONY',
  fecha: '2025',
  color: '#f39c12',
  requiereSuperCiudadano: false,
  armaduras: [
    { id: 'mc01', nombre: 'MC-01 Ceremonial', pasiva: 'Extra Padding' }
  ]
};

// 16. REDACTED REGIMENT (Enero 2026)
export const warbond_redacted = {
  id: 'redacted',
  nombre: 'REDACTED REGIMENT',
  fecha: 'ENE 2026',
  color: '#c0392b',
  requiereSuperCiudadano: true,
  armasPrincipales: [
    { id: 'r72', nombre: 'R-72 Censor', tipo: 'rifle', rareza: 'epica' },
    { id: 'ar59', nombre: 'AR-59 Suppressor', tipo: 'rifle', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'p35', nombre: 'P-35 Re-Educator', tipo: 'pistola', rareza: 'epica' }
  ],
  estratagemas: [
    { id: 'c4pack', nombre: 'B/MD C4 Pack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true },
    { id: 'lureMine', nombre: 'TM-1 Lure Mine', tipo: EstratagemaTipo.TORRETA }
  ],
  armaduras: [
    { id: 'rs89', nombre: 'RS-89 Shadow Paragon', pasiva: 'Firma Reducida: Menor deteccion' },
    { id: 'rs67', nombre: 'RS-67 Null Cipher', pasiva: 'Firma Reducida: Menor deteccion' }
  ],
  mejoras: ['Insercion Oculta']
};

// 17. SIEGE BREAKERS (Febrero 2026)
export const warbond_siege = {
  id: 'siege',
  nombre: 'SIEGE BREAKERS',
  fecha: 'FEB 2026',
  color: '#7f8c8d',
  requiereSuperCiudadano: true,
  armasPrincipales: [
    { id: 'las16trident', nombre: 'LAS-16 Trident', tipo: 'laser', rareza: 'epica' }
  ],
  estratagemas: [
    { id: 'breachingHammer', nombre: 'CQC-20 Breaching Hammer', tipo: EstratagemaTipo.ARMA_APOYO, requiereMochila: true },
    { id: 'beltFed', nombre: 'GL-28 Belt-Fed Grenade Launcher', tipo: EstratagemaTipo.ARMA_APOYO, requiereMochila: true },
    { id: 'eat411', nombre: 'EAT-411 Leveller', tipo: EstratagemaTipo.ARMA_APOYO },
    { id: 'shield', nombre: 'G/SH-39 Shield', tipo: EstratagemaTipo.DEFENSIVA }
  ],
  armaduras: [
    { id: 'sa8', nombre: 'SA-8 Ram', pasiva: 'Adrenalina Complementaria' },
    { id: 'sa7', nombre: 'SA-7 Headfirst', pasiva: 'Adrenalina Complementaria' }
  ]
};

// 18. ENTRENCHED DIVISION (Marzo 2026)
export const warbond_entrenched = {
  id: 'entrenched',
  nombre: 'ENTRENCHED DIVISION',
  fecha: 'MAR 2026',
  color: '#27ae60',
  requiereSuperCiudadano: true,
  armasPrincipales: [
    { id: 'smgflam34', nombre: 'SMG/FLAM-34 Stoker', tipo: 'lanzallamas', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'p69', nombre: 'P-69 Veto', tipo: 'pistola', rareza: 'rara' },
    { id: 'cqc73', nombre: 'CQC-73 Entrenchment Tool', tipo: 'cuerpo a cuerpo', rareza: 'rara' }
  ],
  granadas: [
    { id: 'g48', nombre: 'G-48 Giga Grenade', tipo: 'explosiva' }
  ],
  estratagemas: [
    { id: 'cremator', nombre: 'B/FLAM-80 Cremator', tipo: EstratagemaTipo.ARMA_APOYO, requiereMochila: true },
    { id: 'gasMortar', nombre: 'A/GM-17 Gas Mortar Sentry', tipo: EstratagemaTipo.TORRETA }
  ],
  armaduras: [
    { id: 'cpg48', nombre: 'CPG-48 Sapper', pasiva: 'Granadero: +2 granadas' },
    { id: 'cph26', nombre: 'CPH-26 Commandant', pasiva: 'Materiales Peligrosos' }
  ]
};

// 19. SUPER CITIZEN EDITION
export const warbond_super = {
  id: 'super',
  nombre: 'SUPER CITIZEN EDITION',
  fecha: 'EXCLUSIVO',
  color: '#f1c40f',
  requiereSuperCiudadano: true,
  armasPrincipales: [
    { id: 'r2124super', nombre: 'R-2124 Constitution (Super)', tipo: 'rifle', rareza: 'legendaria' }
  ],
  armaduras: [
    { id: 'sc01', nombre: 'SC-01 Super Citizen', pasiva: 'Democracy Protects: 50% supervivencia' }
  ],
  capas: ['Cape of Freedom', 'Cape of Liberty']
};

// 20. KILLZONE COLLABORATION (Nuevo)
export const warbond_killzone = {
  id: 'killzone',
  nombre: 'KILLZONE COLLABORATION',
  fecha: '2024',
  color: '#d43f3f',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'sta52', nombre: 'StA-52 Assault Rifle', tipo: 'rifle', rareza: 'epica' },
    { id: 'sta11', nombre: 'StA-11 SMG', tipo: 'subfusil', rareza: 'epica' }
  ],
  armaduras: [
    { id: 'kz01', nombre: 'KZ-01 Helghast', pasiva: 'Extra Padding' },
    { id: 'kz02', nombre: 'KZ-02 Helghast Officer', pasiva: 'Fortified' }
  ]
};

// 21. HALO COLLABORATION (Nuevo)
export const warbond_halo = {
  id: 'halo',
  nombre: 'HALO COLLABORATION',
  fecha: '2024',
  color: '#4a90e2',
  requiereSuperCiudadano: false,
  armasPrincipales: [
    { id: 'ma5', nombre: 'MA5 Assault Rifle', tipo: 'rifle', rareza: 'epica' },
    { id: 'br55', nombre: 'BR55 Battle Rifle', tipo: 'rifle', rareza: 'epica' }
  ],
  armasSecundarias: [
    { id: 'm6', nombre: 'M6 Pistol', tipo: 'pistola', rareza: 'epica' }
  ],
  granadas: [
    { id: 'plasma', nombre: 'Plasma Grenade', tipo: 'explosiva' }
  ],
  armaduras: [
    { id: 'hl01', nombre: 'HL-01 Spartan', pasiva: 'Peak Physique' },
    { id: 'hl02', nombre: 'HL-02 ODST', pasiva: 'Scout' }
  ],
  estratagemas: [
    { id: 'pelican', nombre: 'Pelican Drop', tipo: EstratagemaTipo.APOYO },
    { id: 'ghost', nombre: 'Ghost', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true }
  ]
};

// Lista completa de todos los warbonds
export const warbonds = [
  warbond_mobilize,
  warbond_steeled,
  warbond_cutting,
  warbond_demolition,
  warbond_polar,
  warbond_viper,
  warbond_flames,
  warbond_chemical,
  warbond_truth,
  warbond_urban,
  warbond_servants,
  warbond_justice,
  warbond_dust,
  warbond_control,
  warbond_masters,
  warbond_redacted,
  warbond_siege,
  warbond_entrenched,
  warbond_super,
  warbond_killzone,
  warbond_halo
];

// Estratagemas por defecto
export const estratagemasDefecto = ["REINFORCE", "SOS BEACON", "RESUPPLY"];

// Mapa de origen para cada tipo de item
export const origenItems = {};

// Función para construir mapa de origen
export const construirMapaOrigen = () => {
  warbonds.forEach(wb => {
    // Armas principales
    (wb.armasPrincipales || []).forEach(item => {
      origenItems[item.id] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'armaPrincipal'
      };
    });
    
    // Armas secundarias
    (wb.armasSecundarias || []).forEach(item => {
      origenItems[item.id] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'armaSecundaria'
      };
    });
    
    // Granadas
    (wb.granadas || []).forEach(item => {
      origenItems[item.id] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'granada'
      };
    });
    
    // Armaduras
    (wb.armaduras || []).forEach(item => {
      origenItems[item.id] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'armadura'
      };
    });
    
    // Estratagemas
    (wb.estratagemas || []).forEach(item => {
      origenItems[item.id] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'estratagema'
      };
    });
    
    // Mejoras
    (wb.mejoras || []).forEach(item => {
      origenItems[item] = {
        warbondId: wb.id,
        warbondNombre: wb.nombre,
        tipo: 'mejora'
      };
    });
  });
};

// Construir mapa de origen
construirMapaOrigen();