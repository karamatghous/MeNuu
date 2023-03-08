import React, {useState, useEffect} from 'react';
import Navigation from './src/routes/Navigation/Navigation';
import {WithSplashScreen} from './src/screens/SplashScreen';
const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 4000);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Navigation />
    </WithSplashScreen>
  );
};

export default App;
