import React, {useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import RNRestart from 'react-native-restart';
import Grid from './components/Grid';

const TicTacToe = () => {
  const [winner, setWinner] = useState('');

  return (
    <View style={styles.container}>
      <View pointerEvents={winner !== '' ? 'none' : 'auto'}>
        <Grid setWinner={setWinner} />
      </View>
      <Text style={styles.winText}>
        {winner !== '' ? winner.toUpperCase() + ' WON' : ''}
      </Text>
      <Button
        title="Restart"
        onPress={() => {
          RNRestart.Restart();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  winText: {
    color: 'white',
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TicTacToe;
