import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

let globalTurn = 'x';
const Cell = (props) => {
  const [value, setValue] = useState('');

  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => {
        if (value === '') {
          setValue(globalTurn === 'o' ? 'O' : 'X');

          let tmpGrid = [...props.grid];
          tmpGrid[props.id] = globalTurn;

          props.setGrid([...tmpGrid]);

          switch (globalTurn) {
            case 'x':
              globalTurn = 'o';
              break;
            case 'o':
              globalTurn = 'x';
              break;
          }
        }
      }}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: Dimensions.get('window').width / 3.5,
    height: Dimensions.get('window').width / 3.5,
    margin: '1.5%',
    backgroundColor: 'lightgray',
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Cell;
