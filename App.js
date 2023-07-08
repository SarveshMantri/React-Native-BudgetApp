import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';

// Screens
import NavigatorHeader from './src/components/NavigatorHeader';
import BudgetListingScreen from './src/screens/BudgetListingScreen';
import NewBudgetScreen from './src/screens/NewBudgetScreen';

const App = () => {
  const [onBudgets, setOnBudgets] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <NavigatorHeader setOnBudgets={setOnBudgets} />
        {onBudgets ? (
          <BudgetListingScreen />
        ) : (
          <NewBudgetScreen setOnBudgets={setOnBudgets} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
