import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import styles from '../styles';

const NewBudgetScreen = () => {
  const [name, setName] = useState('');
  const [plannedAmt, setPlannedAmt] = useState('');
  const [actualAmt, setActualAmt] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Name"
        style={styles.textInput}
        value={name}
        onChange={name => setName(name)}
        autofocus={true}
      />
      <TextInput
        mode="outlined"
        label="Planned Amount"
        right={<TextInput.Icon icon="currency-rupee" />}
        style={styles.textInput}
        keyboardType="numeric"
        selectTextOnFocus={true}
        value={plannedAmt}
        onChange={plannedAmt => setPlannedAmt(plannedAmt)}
        autofocus={true}
      />
      <TextInput
        mode="outlined"
        label="Actual Amount"
        right={<TextInput.Icon icon="currency-rupee" />}
        style={styles.textInput}
        keyboardType="numeric"
        selectTextOnFocus={true}
        value={actualAmt}
        onChange={actualAmt => setActualAmt(actualAmt)}
        autofocus={true}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.button}>
        Add Budget
      </Button>
    </View>
  );
};

export default NewBudgetScreen;
