import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/login';
import Registration from './components/Registration';
import PasswordRecovery from './components/PasswordRecovery';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return (
          <Login 
            onNavigateToRecovery={() => setCurrentPage('PasswordRecovery')} 
            onNavigateToRegistration={() => setCurrentPage('Registration')} 
          />
        );
      case 'Registration':
        return <Registration />;
      case 'PasswordRecovery':
        return <PasswordRecovery onNavigateToLogin={() => setCurrentPage('Login')} />;
      default:
        return <Login />;
    }
  };

  return (
    <View style={styles.container}>
      {renderPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;