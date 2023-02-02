import { useState } from 'react';
import './App.css';
import TrinaryNavigation from './components/navigation';
import TrinaryPage from './components/page';
import TrinaryFooter from './components/footer';

function TrinaryApp() {
  const [viewing, setViewing] = useState('home');
  const random_branding = Date.now() % 3;
  const [branding, setBranding] = useState(random_branding);
  let callbacks = [];
  callbacks.push(setViewing);
  callbacks.push(setBranding);
  console.log("branding version: " + branding);

  let styled_classes = [];
    let logo_art = null;
    if (!branding) {
        styled_classes.push('earth-tones');
        styled_classes.push('soft-borders');
        styled_classes.push('elegant-text');
        logo_art = '/art/trident.png';
    } else if (branding === 1) {
        styled_classes.push('esteemed-hues');
        styled_classes.push('harsh-geometry');
        styled_classes.push('minimalist-design');
        logo_art = '/art/shield.png';
    } else {
        styled_classes.push('punk-scheme');
        styled_classes.push('glitch-text');
        styled_classes.push('pixelized-status');
        logo_art = '/art/crown.png';
    }
    let art_class = styled_classes.join(" ");

  return (
    <div className="App">
      <TrinaryNavigation branding={branding} viewing={viewing} callbacks={callbacks} art_class={art_class} logo_art={logo_art}/>
      <TrinaryPage branding={branding} viewing={viewing} callbacks={callbacks} art_class={art_class}/>
      <TrinaryFooter branding={branding} callbacks={callbacks} art_class={art_class} logo_art={logo_art}/>
    </div>
  );
}

export default TrinaryApp;
