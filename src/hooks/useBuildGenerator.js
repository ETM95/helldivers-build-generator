import { useState } from 'react';
import { warbonds, origenItems, EstratagemaTipo } from '../data/warbonds';

export const useBuildGenerator = () => {
  const [currentBuild, setCurrentBuild] = useState(null);
  const [generationHistory, setGenerationHistory] = useState([]);

  const generarBuild = (selectedWarbonds, noDuplicates, includeSuperCitizen) => {
    if (selectedWarbonds.length === 0) {
      alert('ERROR: No Warbonds selected. Please select at least one.');
      return null;
    }

    // Filtrar por Super Citizen si es necesario
    const warbondsFiltrados = includeSuperCitizen 
      ? selectedWarbonds 
      : selectedWarbonds.filter(wb => !wb.requiereSuperCiudadano);

    if (warbondsFiltrados.length === 0) {
      alert('ERROR: No Warbonds available with current filters.');
      return null;
    }

    // Recopilar elementos disponibles
    const elementos = {
      armasPrincipales: [],
      armasSecundarias: [],
      granadas: [],
      armaduras: [],
      estratagemas: {
        [EstratagemaTipo.ARMA_APOYO]: [],
        [EstratagemaTipo.MOCHILA]: [],
        [EstratagemaTipo.ORBITAL]: [],
        [EstratagemaTipo.EAGLE]: [],
        [EstratagemaTipo.TORRETA]: [],
        [EstratagemaTipo.DEFENSIVA]: [],
        [EstratagemaTipo.EXPLOSIVO]: [],
        [EstratagemaTipo.APOYO]: []
      },
      mejoras: []
    };

    // Mapas para tracking de items ya usados
    const itemsUsados = {
      armaduras: new Set(),
      armasPrincipales: new Set(),
      armasSecundarias: new Set(),
      granadas: new Set(),
      mejoras: new Set()
    };

    warbondsFiltrados.forEach(wb => {
      if (wb.armasPrincipales) elementos.armasPrincipales.push(...wb.armasPrincipales);
      if (wb.armasSecundarias) elementos.armasSecundarias.push(...wb.armasSecundarias);
      if (wb.granadas) elementos.granadas.push(...wb.granadas);
      if (wb.armaduras) elementos.armaduras.push(...wb.armaduras);
      if (wb.mejoras) elementos.mejoras.push(...wb.mejoras);
      
      // Clasificar estratagemas por tipo
      if (wb.estratagemas) {
        wb.estratagemas.forEach(est => {
          if (elementos.estratagemas[est.tipo]) {
            elementos.estratagemas[est.tipo].push(est);
          }
        });
      }
    });

    // Eliminar duplicados
    elementos.armasPrincipales = [...new Map(elementos.armasPrincipales.map(item => [item.id, item])).values()];
    elementos.armasSecundarias = [...new Map(elementos.armasSecundarias.map(item => [item.id, item])).values()];
    elementos.granadas = [...new Map(elementos.granadas.map(item => [item.id, item])).values()];
    elementos.armaduras = [...new Map(elementos.armaduras.map(item => [item.id, item])).values()];
    elementos.mejoras = [...new Set(elementos.mejoras)];

    // Boosters por defecto
    if (elementos.mejoras.length === 0) {
      elementos.mejoras = ["Stamina Booster", "Muscle Enhancement", "UAV Recon Booster"];
    }

    // Seleccionar armadura (sin repetir)
    let armaduraSeleccionada = null;
    if (elementos.armaduras.length > 0) {
      const armadurasDisponibles = elementos.armaduras.filter(a => !itemsUsados.armaduras.has(a.id));
      if (armadurasDisponibles.length > 0) {
        armaduraSeleccionada = armadurasDisponibles[Math.floor(Math.random() * armadurasDisponibles.length)];
        itemsUsados.armaduras.add(armaduraSeleccionada.id);
      }
    }

    // Seleccionar arma principal (sin repetir)
    let armaPrincipalSeleccionada = null;
    if (elementos.armasPrincipales.length > 0) {
      const armasDisponibles = elementos.armasPrincipales.filter(a => !itemsUsados.armasPrincipales.has(a.id));
      if (armasDisponibles.length > 0) {
        armaPrincipalSeleccionada = armasDisponibles[Math.floor(Math.random() * armasDisponibles.length)];
        itemsUsados.armasPrincipales.add(armaPrincipalSeleccionada.id);
      } else {
        itemsUsados.armasPrincipales.clear();
        armaPrincipalSeleccionada = elementos.armasPrincipales[Math.floor(Math.random() * elementos.armasPrincipales.length)];
        itemsUsados.armasPrincipales.add(armaPrincipalSeleccionada.id);
      }
    }

    // Seleccionar arma secundaria (sin repetir)
    let armaSecundariaSeleccionada = null;
    if (elementos.armasSecundarias.length > 0) {
      const armasDisponibles = elementos.armasSecundarias.filter(a => !itemsUsados.armasSecundarias.has(a.id));
      if (armasDisponibles.length > 0) {
        armaSecundariaSeleccionada = armasDisponibles[Math.floor(Math.random() * armasDisponibles.length)];
        itemsUsados.armasSecundarias.add(armaSecundariaSeleccionada.id);
      } else {
        itemsUsados.armasSecundarias.clear();
        armaSecundariaSeleccionada = elementos.armasSecundarias[Math.floor(Math.random() * elementos.armasSecundarias.length)];
        itemsUsados.armasSecundarias.add(armaSecundariaSeleccionada.id);
      }
    }

    // Seleccionar granada (sin repetir)
    let granadaSeleccionada = null;
    if (elementos.granadas.length > 0) {
      const granadasDisponibles = elementos.granadas.filter(g => !itemsUsados.granadas.has(g.id));
      if (granadasDisponibles.length > 0) {
        granadaSeleccionada = granadasDisponibles[Math.floor(Math.random() * granadasDisponibles.length)];
        itemsUsados.granadas.add(granadaSeleccionada.id);
      } else {
        itemsUsados.granadas.clear();
        granadaSeleccionada = elementos.granadas[Math.floor(Math.random() * elementos.granadas.length)];
        itemsUsados.granadas.add(granadaSeleccionada.id);
      }
    }

    // Seleccionar mejora (sin repetir)
    let mejoraSeleccionada = null;
    if (elementos.mejoras.length > 0) {
      const mejorasDisponibles = elementos.mejoras.filter(m => !itemsUsados.mejoras.has(m));
      if (mejorasDisponibles.length > 0) {
        mejoraSeleccionada = mejorasDisponibles[Math.floor(Math.random() * mejorasDisponibles.length)];
        itemsUsados.mejoras.add(mejoraSeleccionada);
      } else {
        itemsUsados.mejoras.clear();
        mejoraSeleccionada = elementos.mejoras[Math.floor(Math.random() * elementos.mejoras.length)];
        itemsUsados.mejoras.add(mejoraSeleccionada);
      }
    }

    // Seleccionar estratagemas (4 espacios)
    let estratagemasSeleccionadas = [];
    let mochilasSeleccionadas = 0;
    let armasApoyoSeleccionadas = 0;

    // Función para verificar compatibilidad
    const verificarCompatibilidad = (candidata) => {
      // Verificar límite de mochilas (incluyendo Portable Hellbomb)
      if (candidata.tipo === EstratagemaTipo.MOCHILA || candidata.requiereMochila) {
        if (mochilasSeleccionadas >= 1) return false;
      }
      
      // Verificar límite de armas de apoyo
      if (candidata.tipo === EstratagemaTipo.ARMA_APOYO) {
        if (armasApoyoSeleccionadas >= 1) return false;
      }
      
      return true;
    };

    // Recopilar todas las estratagemas disponibles
    const todasEstratagemas = [];
    Object.values(elementos.estratagemas).forEach(lista => {
      todasEstratagemas.push(...lista);
    });

    // Añadir estratagemas base si no hay suficientes
    if (todasEstratagemas.length < 4) {
      const baseStratagems = [
        { id: 'mg_base', nombre: 'Machine Gun', tipo: EstratagemaTipo.ARMA_APOYO },
        { id: 'ops_base', nombre: 'Orbital Precision Strike', tipo: EstratagemaTipo.ORBITAL },
        { id: 'eagle_base', nombre: 'Eagle Strafing Run', tipo: EstratagemaTipo.EAGLE },
        { id: 'jump_base', nombre: 'Jump Pack', tipo: EstratagemaTipo.MOCHILA, requiereMochila: true }
      ];
      todasEstratagemas.push(...baseStratagems);
    }

    // Seleccionar 4 estratagemas
    const indicesUsados = new Set();
    let intentos = 0;
    const maxIntentos = 200;

    while (estratagemasSeleccionadas.length < 4 && intentos < maxIntentos) {
      const index = Math.floor(Math.random() * todasEstratagemas.length);
      const candidata = todasEstratagemas[index];
      
      // Verificar duplicados si está activado
      if (noDuplicates && indicesUsados.has(index)) {
        intentos++;
        continue;
      }
      
      // Verificar compatibilidad
      if (!verificarCompatibilidad(candidata)) {
        intentos++;
        continue;
      }
      
      // Añadir la estratagema
      estratagemasSeleccionadas.push(candidata);
      indicesUsados.add(index);
      
      // Actualizar contadores
      if (candidata.tipo === EstratagemaTipo.MOCHILA || candidata.requiereMochila) {
        mochilasSeleccionadas++;
      }
      if (candidata.tipo === EstratagemaTipo.ARMA_APOYO) {
        armasApoyoSeleccionadas++;
      }
    }

    // Si no se completaron 4, llenar con las disponibles que cumplan compatibilidad
    while (estratagemasSeleccionadas.length < 4) {
      for (let i = 0; i < todasEstratagemas.length; i++) {
        if (!indicesUsados.has(i)) {
          const candidata = todasEstratagemas[i];
          if (verificarCompatibilidad(candidata)) {
            estratagemasSeleccionadas.push(candidata);
            indicesUsados.add(i);
            
            if (candidata.tipo === EstratagemaTipo.MOCHILA || candidata.requiereMochila) {
              mochilasSeleccionadas++;
            }
            if (candidata.tipo === EstratagemaTipo.ARMA_APOYO) {
              armasApoyoSeleccionadas++;
            }
            break;
          }
        }
      }
    }

    const build = {
      armadura: armaduraSeleccionada,
      armaPrincipal: armaPrincipalSeleccionada,
      armaSecundaria: armaSecundariaSeleccionada,
      granada: granadaSeleccionada,
      mejora: mejoraSeleccionada,
      estratagemas: estratagemasSeleccionadas.slice(0, 4),
      stats: {
        mochilas: mochilasSeleccionadas,
        armasApoyo: armasApoyoSeleccionadas
      }
    };

    // Guardar en historial
    setGenerationHistory(prev => [...prev, build]);
    setCurrentBuild(build);
    
    return build;
  };

  return {
    currentBuild,
    generationHistory,
    generarBuild
  };
};