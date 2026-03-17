import React, { useState } from 'react';
import { warbonds, estratagemasDefecto } from './data/warbonds';
import { useBuildGenerator } from './hooks/useBuildGenerator';
import WarbondSelector from './components/WarbondSelector';
import BuildDisplay from './components/BuildDisplay';
import { DemocraciaIcon } from './icons/GameIcons';
import { Shield, AlertTriangle, Globe, RefreshCw } from 'lucide-react';
import './styles/global.css';
import './styles/App.css';

function App() {
  const [selectedWarbonds, setSelectedWarbonds] = useState(() => {
    const initial = {};
    warbonds.forEach((wb, index) => {
      initial[wb.id] = index === 0;
    });
    return initial;
  });
  
  const [includeSuperCitizen, setIncludeSuperCitizen] = useState(false);
  const [noDuplicates, setNoDuplicates] = useState(true);
  const { currentBuild, generarBuild } = useBuildGenerator();

  const toggleWarbond = (warbondId) => {
    setSelectedWarbonds(prev => ({
      ...prev,
      [warbondId]: !prev[warbondId]
    }));
  };

  const selectAll = () => {
    const all = {};
    warbonds.forEach(wb => {
      all[wb.id] = true;
    });
    setSelectedWarbonds(all);
  };

  const deselectAll = () => {
    const none = {};
    warbonds.forEach(wb => {
      none[wb.id] = false;
    });
    setSelectedWarbonds(none);
  };

  const selectBaseOnly = () => {
    const base = {};
    warbonds.forEach((wb, index) => {
      base[wb.id] = index === 0;
    });
    setSelectedWarbonds(base);
  };

  const getSelectedWarbonds = () => {
    return warbonds.filter(wb => selectedWarbonds[wb.id]);
  };

  const handleGenerateBuild = () => {
    generarBuild(
      getSelectedWarbonds(),
      noDuplicates,
      includeSuperCitizen
    );
  };

  const selectedCount = getSelectedWarbonds().length;
  const superCount = getSelectedWarbonds().filter(wb => wb.requiereSuperCiudadano).length;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <div className="title-container">
            <DemocraciaIcon className="title-icon" />
            <h1>HELLDIVERS<br/>TACTICAL ASSET DEPLOYER</h1>
            <DemocraciaIcon className="title-icon" />
          </div>
          
          <div className="war-stats">
            <div className="war-stat">
              <Shield className="war-stat-icon" />
              <span>WARBONDS: <span className="war-stat-value">{warbonds.length}</span></span>
            </div>
            <div className="war-stat">
              <Globe className="war-stat-icon" />
              <span>SELECCIONADOS: <span className="war-stat-value">{selectedCount}</span></span>
            </div>
            <div className="war-stat">
              <AlertTriangle className="war-stat-icon" />
              <span>SUPER: <span className="war-stat-value">{superCount}</span></span>
            </div>
          </div>
        </header>

        <WarbondSelector
          warbonds={warbonds}
          selectedWarbonds={selectedWarbonds}
          onToggle={toggleWarbond}
          onSelectAll={selectAll}
          onDeselectAll={deselectAll}
          onSelectBase={selectBaseOnly}
          includeSuperCitizen={includeSuperCitizen}
          onToggleSuperCitizen={() => setIncludeSuperCitizen(!includeSuperCitizen)}
        />

        <div className="generate-section">
          <div className="terminal-line">{'>_'} DEPLOYMENT READY</div>
          <button onClick={handleGenerateBuild} className="btn-generate">
            <span>INITIATE ASSIGNMENT</span>
            <RefreshCw className="btn-icon-right" />
          </button>
          <div className="terminal-line secondary">SELECTED WARBONDS: {selectedCount}</div>
        </div>

        <div className="options-section">
          <label className="terminal-checkbox">
            <input
              type="checkbox"
              checked={noDuplicates}
              onChange={(e) => setNoDuplicates(e.target.checked)}
            />
            <span>EVITAR ESTRATAGEMAS DUPLICADAS</span>
          </label>
          
          <div className="compatibility-note">
            <span>LIMITES: 1 MOCHILA | 1 ARMA DE APOYO</span>
          </div>
        </div>

        {currentBuild && (
          <BuildDisplay
            build={currentBuild}
            selectedWarbonds={getSelectedWarbonds()}
            estratagemasDefecto={estratagemasDefecto}
          />
        )}

        <footer className="app-footer">
          <div className="democracy-message">
            <span>///</span> FOR SUPER EARTH <span>\\\\</span>
          </div>
          <div>TERMINAL v3.0 - LIBERTY DATABASE ACCESS</div>
        </footer>
      </div>
    </div>
  );
}

export default App;