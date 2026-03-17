# 🎮 Iconos para Helldivers Build Generator

Para obtener los iconos oficiales, sigue estas instrucciones:

## 📥 Descargar iconos desde la Helldivers Wiki

1. Visita la [Helldivers 2 Wiki - Stratagems](https://helldivers.fandom.com/wiki/Stratagems_(Helldivers_2))
2. Cada estratagema tiene su propio icono
3. Haz clic derecho en cada icono → "Guardar imagen como..."
4. Guarda los archivos en las carpetas correspondientes con estos nombres:

## 📁 Estructura de archivos:

### Estratagemas - `public/icons/stratagems/`
- `mg43.png` - MG-43 Machine Gun
- `stalwart.png` - Stalwart
- `amr.png` - Anti-Material Rifle
- `eat.png` - Expendable Anti-Tank
- `recoilless.png` - Recoilless Rifle
- `flamethrower.png` - Flamethrower
- `autocannon.png` - Autocannon
- `railgun.png` - Railgun
- `spear.png` - SPEAR
- `orbital_gatling.png` - Orbital Gatling Barrage
- `orbital_airburst.png` - Orbital Airburst Strike
- `orbital_120mm.png` - Orbital 120MM HE Barrage
- `orbital_380mm.png` - Orbital 380MM HE Barrage
- `orbital_walking.png` - Orbital Walking Barrage
- `orbital_laser.png` - Orbital Laser
- `orbital_railcannon.png` - Orbital Railcannon Strike
- `orbital_precision.png` - Orbital Precision Strike
- `eagle_strafing.png` - Eagle Strafing Run
- `eagle_airstrike.png` - Eagle Airstrike
- `eagle_cluster.png` - Eagle Cluster Bomb
- `eagle_napalm.png` - Eagle Napalm Airstrike
- `eagle_500kg.png` - Eagle 500KG Bomb
- `sentry_mg.png` - Machine Gun Sentry
- `sentry_gatling.png` - Gatling Sentry
- `sentry_mortar.png` - Mortar Sentry
- `sentry_autocannon.png` - Autocannon Sentry
- `jump_pack.png` - Jump Pack
- `shield_pack.png` - Shield Generator Pack
- `supply_pack.png` - Supply Pack
- `guard_dog.png` - Guard Dog
- `reinforce.png` - Reinforce
- `sos_beacon.png` - SOS Beacon
- `resupply.png` - Resupply

### Armas Principales - `public/icons/weapons/`
- `ar23_liberator.png` - AR-23 Liberator
- `ar23p_penetrator.png` - AR-23P Liberator Penetrator
- `ar23c_concussive.png` - AR-23C Liberator Concussive
- `sg225_breaker.png` - SG-225 Breaker
- `sg225sp_spray.png` - SG-225SP Breaker Spray&Pray
- `sg225ie_incendiary.png` - SG-225IE Breaker Incendiary
- `jar5_dominator.png` - JAR-5 Dominator
- `r63_diligence.png` - R-63 Diligence
- `r63cs_counter.png` - R-63CS Diligente Counter Sniper
- `las16_sickle.png` - LAS-16 Sickle
- `las5_scythe.png` - LAS-5 Scythe
- `plas1_scorcher.png` - PLAS-1 Scorcher
- `plas39_accelerator.png` - PLAS-39 Accelerator Rifle
- `arc12_blitzer.png` - ARC-12 Blitzer
- `r36_eruptor.png` - R-36 Eruptor
- `cb9_crossbow.png` - CB-9 Exploding Crossbow
- `br14_adjudicator.png` - BR-14 Adjudicator
- `flam66_torcher.png` - FLAM-66 Torcher
- `sg451_cookout.png` - SG-451 Cookout

### Armas Secundarias - `public/icons/weapons/` (misma carpeta)
- `p2_peacemaker.png` - P-2 Peacemaker
- `p19_redeemer.png` - P-19 Redeemer
- `p4_senator.png` - P-4 Senator
- `p113_verdict.png` - P-113 Verdict
- `plas15_loyalist.png` - PLAS-15 Loyalist
- `gp31_grenade.png` - GP-31 Grenade Pistol
- `las7_dagger.png` - LAS-7 Dagger
- `p11_stim.png` - P-11 Stim Pistol
- `p72_crisper.png` - P-72 Crisper
- `cqc19_stunlance.png` - CQC-19 Stun Lance
- `sg22_bushwhacker.png` - SG-22 Bushwhacker

### Granadas - `public/icons/grenades/`
- `g6_frag.png` - G-6 Frag
- `g12_he.png` - G-12 High Explosive
- `g16_impact.png` - G-16 Impact
- `g10_incendiary.png` - G-10 Incendiary
- `g13_incendiary_impact.png` - G-13 Incendiary Impact
- `g3_stun.png` - G-3 Stun
- `g4_gas.png` - G-4 Gas
- `g23_stun.png` - G-23 Stun
- `g123_thermite.png` - G-123 Thermite
- `k2_knife.png` - K-2 Throwing Knife

### Warbonds - `public/icons/warbonds/`
- `warbond_mobilize.png` - Helldivers Mobilize
- `warbond_steeled.png` - Steeled Veterans
- `warbond_cutting.png` - Cutting Edge
- `warbond_demolition.png` - Democratic Detonation
- `warbond_polar.png` - Polar Patriots
- `warbond_viper.png` - Viper Commandos
- `warbond_flames.png` - Freedom's Flames
- `warbond_chemical.png` - Chemical Agents
- `warbond_truth.png` - Truth Enforcers
- `warbond_urban.png` - Urban Legends
- `warbond_servants.png` - Servants of Freedom
- `warbond_justice.png` - Borderline Justice
- `warbond_redacted.png` - Redacted Regiment
- `warbond_siege.png` - Siege Breakers
- `warbond_entrenched.png` - Entrenched Division

## 🔧 Script de ayuda

Puedes usar este script para crear los archivos placeholder mientras consigues los iconos reales:

```bash
node scripts/create-placeholders.js
```

## 📝 Notas

- Los iconos deben ser PNG con fondo transparente
- Tamaño recomendado: 64x64 píxeles
- Si no se encuentra un icono, se usará automáticamente un fallback de Lucide React
