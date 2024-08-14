import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, AppRegistry } from 'react-native';
import Home from './src/components/Home';
import Politica from './src/components/Politica';
import Alcance from './src/components/Alcance';
import Resultados from './src/components/Resultados';
import Consumo from './src/components/Consumo';
import Splash from './src/components/Splash';
import Video from './src/components/Video';
import { ScreenProps } from './src/types';
import 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';


type ScreenName = 'Home' | 'Politica' | 'Alcance' | 'Resultados' | 'Consumo' | 'Splash' | 'Video';

const App: React.FC = () => {
  const [history, setHistory] = useState<ScreenName[]>(['Splash']);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Home'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []); 

  const navigate = (screen: ScreenName) => {
    setHistory([...history, screen]);
  };

  const goBack = () => {
    setHistory(history.slice(0, -1));
  };

  const currentScreen = history[history.length - 1];
  let ScreenComponent: React.ComponentType<ScreenProps> = Splash;

  switch (currentScreen) {
    case 'Home':
      ScreenComponent = Home;
      break;
    case 'Politica':
      ScreenComponent = Politica;
      break;
    case 'Alcance':
      ScreenComponent = Alcance;
      break;
    case 'Resultados':
      ScreenComponent = Resultados;
      break;
    case 'Consumo':
      ScreenComponent = Consumo;
      break;
    case 'Video':
      ScreenComponent = Video;
      break;
    default:
      ScreenComponent = Splash;
      break;
    
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScreenComponent onNavigate={navigate} goBack={goBack} />
    </View>
  );
};

export default App;
