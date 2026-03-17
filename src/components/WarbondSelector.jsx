import React from 'react';
import { Check, X, Target, Crown } from 'lucide-react';
import '../styles/WarbondSelector.css';

const WarbondSelector = ({ 
  warbonds, 
  selectedWarbonds, 
  onToggle, 
  onSelectAll, 
  onDeselectAll, 
  onSelectBase,
  includeSuperCitizen,
  onToggleSuperCitizen
}) => {
  const getItemCount = (warbond) => {
    let count = 0;
    if (warbond.armasPrincipales) count += warbond.armasPrincipales.length;
    if (warbond.armasSecundarias) count += warbond.armasSecundarias.length;
    if (warbond.granadas) count += warbond.granadas.length;
    if (warbond.armaduras) count += warbond.armaduras.length;
    if (warbond.estratagemas) count += warbond.estratagemas.length;
    if (warbond.mejoras) count += warbond.mejoras.length;
    return count;
  };

  return (
    <div className="selector-container">
      <div className="selector-header">
        <div className="selector-title">
          <Target className="icon" />
          <h2>WARBONDS DISPONIBLES</h2>
        </div>
        <div className="selector-controls">
          <div className="selector-buttons">
            <button onClick={onSelectAll} className="btn btn-success">
              <Check className="icon-small" /> TODOS
            </button>
            <button onClick={onDeselectAll} className="btn btn-danger">
              <X className="icon-small" /> NINGUNO
            </button>
            <button onClick={onSelectBase} className="btn btn-info">
              SOLO BASE
            </button>
          </div>
          <label className="super-citizen-toggle">
            <input
              type="checkbox"
              checked={includeSuperCitizen}
              onChange={onToggleSuperCitizen}
            />
            <Crown className="icon-small" />
            <span>INCLUIR SUPER CIUDADANO</span>
          </label>
        </div>
      </div>

      <div className="warbond-grid">
        {warbonds.map((warbond) => {
          const isSelected = selectedWarbonds[warbond.id];
          const isSuper = warbond.requiereSuperCiudadano;
          
          return (
            <div
              key={warbond.id}
              className={`warbond-card ${isSelected ? 'selected' : ''} ${isSuper ? 'super' : ''}`}
              onClick={() => onToggle(warbond.id)}
            >
              <div className="warbond-color-bar" style={{ backgroundColor: warbond.color }} />
              <div className="warbond-content">
                <div className="warbond-header">
                  <div className="warbond-info">
                    <h3>
                      {warbond.nombre}
                      {isSuper && <Crown className="super-icon" />}
                    </h3>
                    <div className="warbond-date">{warbond.fecha}</div>
                  </div>
                  <div className={`warbond-check ${isSelected ? 'checked' : ''}`}>
                    {isSelected && <Check className="icon-small" />}
                  </div>
                </div>

                <div className="warbond-tags">
                  {warbond.armasPrincipales?.length > 0 && (
                    <span className="warbond-tag primary">🔫 {warbond.armasPrincipales.length}</span>
                  )}
                  {warbond.armasSecundarias?.length > 0 && (
                    <span className="warbond-tag secondary">🔪 {warbond.armasSecundarias.length}</span>
                  )}
                  {warbond.granadas?.length > 0 && (
                    <span className="warbond-tag grenade">💣 {warbond.granadas.length}</span>
                  )}
                  {warbond.armaduras?.length > 0 && (
                    <span className="warbond-tag armor">🛡️ {warbond.armaduras.length}</span>
                  )}
                  {warbond.estratagemas?.length > 0 && (
                    <span className="warbond-tag stratagem">📡 {warbond.estratagemas.length}</span>
                  )}
                  {warbond.mejoras?.length > 0 && (
                    <span className="warbond-tag booster">⚡ {warbond.mejoras.length}</span>
                  )}
                </div>

                <div className="warbond-total">
                  TOTAL: {getItemCount(warbond)} ITEMS
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarbondSelector;