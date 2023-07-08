import {View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../styles';
import {Card, Text, Divider} from 'react-native-paper';

const BudgetListingScreen = () => {
  const budgetsList = useSelector(state => state.budget);
  return (
    <View style={styles.container}>
      <FlatList
        data={budgetsList}
        scrollEnabled={false}
        renderItem={({item}) => {
          const isGreen = parseInt(item.actualAmt) <= parseInt(item.plannedAmt);

          return (
            <Card
              mode="outlined"
              style={{
                backgroundColor: isGreen ? '#B0FFAD' : '#ffb3b3',
                marginBottom: 25,
              }}>
              <Card.Title
                title={item.name}
                titleStyle={{
                  fontSize: 30,
                  paddingTop: 12,
                  color: isGreen ? 'green' : 'red',
                  fontWeight: 'bold',
                }}
              />
              <Divider bold={true} style={{backgroundColor: 'white'}} />
              <Card.Content style={{marginVertical: 5}}>
                <Text variant="titleLarge">
                  Planned Amount : {item.plannedAmt}
                </Text>
                <Text variant="titleLarge">
                  Actual Amount : {item.actualAmt}
                </Text>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default BudgetListingScreen;
