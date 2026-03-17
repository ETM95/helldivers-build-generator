import React, { useState } from 'react';
import { 
  ArmaIcon, 
  ArmaduraIcon, 
  GranadaIcon, 
  EstratagemaIcon, 
  MejoraIcon,
  DemocraciaIcon 
} from '../icons/GameIcons';
import { Copy, Check, Package, AlertCircle, Shield, Zap } from 'lucide-react';
import { origenItems, EstratagemaTipo } from '../data/warbonds';
import '../styles/BuildDisplay.css';

const BuildDisplay = ({ build, selectedWarbonds, estratagemasDefecto }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = formatBuildText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatBuildText = () => {
    let text = "=".repeat(60) + "\n";
    text += "               BUILD GENERADA\n";
    text += "=".repeat(60) + "\n\n";
    
    text += "WARBONDS INCLUIDOS:\n";
    selectedWarbonds.forEach(wb => {
      text += `  - ${wb.nombre} (${wb.fecha})\n`;
    });
    text += "\n";
    
    if (build.armadura) {
      text += "ARMADURA:\n";
      text += `  * ${build.armadura.nombre}\n`;
      text += `    ${build.armadura.pasiva}\n`;
      const origen = origenItems[build.armadura.id];
      if (origen) text += `    [${origen.warbondNombre}]\n`;
      text += "\n";
    }
    
    if (build.armaPrincipal) {
      text += "ARMA PRINCIPAL:\n";
      text += `  * ${build.armaPrincipal.nombre}\n`;
      const origen = origenItems[build.armaPrincipal.id];
      if (origen) text += `    [${origen.warbondNombre}]\n`;
      text += "\n";
    }
    
    if (build.armaSecundaria) {
      text += "ARMA SECUNDARIA:\n";
      text += `  * ${build.armaSecundaria.nombre}\n`;
      const origen = origenItems[build.armaSecundaria.id];
      if (origen) text += `    [${origen.warbondNombre}]\n`;
      text += "\n";
    }
    
    if (build.granada) {
      text += "GRANADA:\n";
      text += `  * ${build.granada.nombre}\n`;
      const origen = origenItems[build.granada.id];
      if (origen) text += `    [${origen.warbondNombre}]\n`;
      text += "\n";
    }
    
    text += "MEJORA (Booster):\n";
    text += `  * ${build.mejora}\n`;
    const origenMejora = origenItems[build.mejora];
    if (origenMejora) text += `    [${origenMejora.warbondNombre}]\n`;
    text += "\n";
    
    text += "ESTRATAGEMAS (4 espacios):\n";
    build.estratagemas.forEach((est, index) => {
      text += `  ${index + 1}. [${est.tipo.toUpperCase()}] ${est.nombre}`;
      if (est.requiereMochila || est.tipo === EstratagemaTipo.MOCHILA) text += " [REQUIERE MOCHILA]";
      if (est.tipo === EstratagemaTipo.ARMA_APOYO) text += " [ARMA DE APOYO]";
      const origen = origenItems[est.id];
      if (origen) text += ` - ${origen.warbondNombre}`;
      text += "\n";
    });
    
    text += "\n" + "-".repeat(60) + "\n";
    text += "ESTRATAGEMAS POR DEFECTO:\n";
    text += `  ${estratagemasDefecto.join(' - ')}\n`;
    
    text += "\n" + "=".repeat(60) + "\n";
    text += "COMPATIBILIDAD:\n";
    text += `  Mochilas: ${build.stats.mochilas}/1\n`;
    text += `  Armas de Apoyo: ${build.stats.armasApoyo}/1\n`;
    
    return text;
  };

  const tieneProblemasCompatibilidad = build.stats.mochilas > 1 || build.stats.armasApoyo > 1;

  return (
    <div className="build-container">
      <div className="build-header">
        <div className="build-title">
          <DemocraciaIcon className="icon-title" />
          <h2>BUILD GENERADA</h2>
        </div>
        <button onClick={copyToClipboard} className="btn-copy">
          {copied ? (
            <>
              <Check className="icon-small" />
              <span>COPIADO</span>
            </>
          ) : (
            <>
              <Copy className="icon-small" />
              <span>COPIAR BUILD</span>
            </>
          )}
        </button>
      </div>

      <div className="warbonds-section">
        <div className="section-label">WARBONDS INCLUIDOS</div>
        <div className="warbond-mini-tags">
          {selectedWarbonds.map(wb => (
            <span
              key={wb.id}
              className="warbond-mini-tag"
              style={{ borderColor: wb.color, color: wb.color }}
            >
              {wb.nombre}
            </span>
          ))}
        </div>
      </div>

      <div className="compatibility-stats">
        <div className={`compatibility-item ${build.stats.mochilas <= 1 ? 'valid' : 'invalid'}`}>
          <Package className="stat-icon" />
          <span>Mochilas: {build.stats.mochilas}/1</span>
        </div>
        <div className={`compatibility-item ${build.stats.armasApoyo <= 1 ? 'valid' : 'invalid'}`}>
          <Zap className="stat-icon" />
          <span>Armas de Apoyo: {build.stats.armasApoyo}/1</span>
        </div>
      </div>

      {tieneProblemasCompatibilidad && (
        <div className="warning-section">
          <AlertCircle className="warning-icon" />
          <span>ADVERTENCIA: LÍMITES DE COMPATIBILIDAD EXCEDIDOS</span>
        </div>
      )}

      <div className="build-grid">
        {build.armadura && (
          <div className="build-card armadura full-width">
            <div className="build-card-header">
              <ArmaduraIcon className="card-icon" />
              <h3>ARMADURA</h3>
            </div>
            <div className="build-card-content">
              <div className="item-name">{build.armadura.nombre}</div>
              <div className="item-desc">{build.armadura.pasiva}</div>
              <div className="item-origin">
                {origenItems[build.armadura.id]?.warbondNombre}
              </div>
            </div>
          </div>
        )}

        {build.armaPrincipal && (
          <div className="build-card principal">
            <div className="build-card-header">
              <ArmaIcon tipo={build.armaPrincipal.tipo} className="card-icon" />
              <h3>ARMA PRINCIPAL</h3>
            </div>
            <div className="build-card-content">
              <div className="item-name">{build.armaPrincipal.nombre}</div>
              <div className="item-type">{build.armaPrincipal.tipo}</div>
              <div className="item-origin">
                {origenItems[build.armaPrincipal.id]?.warbondNombre}
              </div>
            </div>
          </div>
        )}

        {build.armaSecundaria && (
          <div className="build-card secundaria">
            <div className="build-card-header">
              <ArmaIcon tipo={build.armaSecundaria.tipo} className="card-icon" />
              <h3>ARMA SECUNDARIA</h3>
            </div>
            <div className="build-card-content">
              <div className="item-name">{build.armaSecundaria.nombre}</div>
              <div className="item-type">{build.armaSecundaria.tipo}</div>
              <div className="item-origin">
                {origenItems[build.armaSecundaria.id]?.warbondNombre}
              </div>
            </div>
          </div>
        )}

        {build.granada && (
          <div className="build-card granada">
            <div className="build-card-header">
              <GranadaIcon tipo={build.granada.tipo} className="card-icon" />
              <h3>GRANADA</h3>
            </div>
            <div className="build-card-content">
              <div className="item-name">{build.granada.nombre}</div>
              <div className="item-type">{build.granada.tipo}</div>
              <div className="item-origin">
                {origenItems[build.granada.id]?.warbondNombre}
              </div>
            </div>
          </div>
        )}

        <div className="build-card mejora">
          <div className="build-card-header">
            <MejoraIcon className="card-icon" />
            <h3>MEJORA (BOOSTER)</h3>
          </div>
          <div className="build-card-content">
            <div className="item-name">{build.mejora}</div>
            <div className="item-origin">
              {origenItems[build.mejora]?.warbondNombre}
            </div>
          </div>
        </div>

        <div className="build-card estratagemas full-width">
          <div className="build-card-header">
            <EstratagemaIcon className="card-icon" />
            <h3>ESTRATAGEMAS (4 ESPACIOS)</h3>
          </div>
          <div className="estratagemas-grid">
            {build.estratagemas.map((est, index) => (
              <div 
                key={index} 
                className={`estratagema-item 
                  ${est.requiereMochila || est.tipo === EstratagemaTipo.MOCHILA ? 'requires-backpack' : ''}
                  ${est.tipo === EstratagemaTipo.ARMA_APOYO ? 'support-weapon' : ''}`}
              >
                <div className="estratagema-header">
                  <EstratagemaIcon tipo={est.tipo} className="icon-small" />
                  <span className="est-index">{index + 1}</span>
                </div>
                <div className="est-nombre">{est.nombre}</div>
                <div className="est-tipo">{est.tipo.replace('_', ' ')}</div>
                {(est.requiereMochila || est.tipo === EstratagemaTipo.MOCHILA) && (
                  <div className="est-backpack">
                    <Package className="icon-micro" />
                    <span>MOCHILA</span>
                  </div>
                )}
                {est.tipo === EstratagemaTipo.ARMA_APOYO && (
                  <div className="est-support">
                    <Zap className="icon-micro" />
                    <span>APOYO</span>
                  </div>
                )}
                <div className="est-origen">
                  {origenItems[est.id]?.warbondNombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="defecto-section">
        <div className="defecto-title">
          <span>ESTRATAGEMAS POR DEFECTO</span>
        </div>
        <div className="defecto-tags">
          {estratagemasDefecto.map((e, i) => (
            <span key={i} className="defecto-tag">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildDisplay;