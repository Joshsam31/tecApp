export type ScreenName = 'Home' | 'Politica' | 'Alcance' | 'Resultados' | 'Consumo' | 'Splash' | 'Video';

export interface ScreenProps {
  onNavigate: (screen: ScreenName) => void;
  goBack: () => void;
}