import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Cell from './Cell';

let lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function isArrayInArray(source, search) {
  for (var i = 0, len = source.length; i < len; i++) {
    if (source[i][0] === search[0] && source[i][1] === search[1]) {
      return true;
    }
  }
  return false;
}

const Grid = ({setWinner}) => {
  const [grid, setGrid] = useState(Array(9).fill(''));

  useEffect(() => {
    //console.log('grid changed');

    let x_current = [];
    let o_current = [];

    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === 'x') {
        x_current = [...x_current, i];
      }
      if (grid[i] === 'o') {
        o_current = [...o_current, i];
      }
    }
    //console.log(`Xs: ${x_current}, Os: ${o_current}`);

    for (let i = 0; i < lines.length; i++) {
      if (
        lines.some((d) => d.every((item) => x_current.indexOf(item) !== -1))
      ) {
        setWinner('x');
      }
      if (
        lines.some((d) => d.every((item) => o_current.indexOf(item) !== -1))
      ) {
        setWinner('o');
      }
    }
  }, [grid]);

  return (
    <View>
      <View style={styles.grid}>
        <Cell id={0} grid={grid} setGrid={setGrid} />
        <Cell id={1} grid={grid} setGrid={setGrid} />
        <Cell id={2} grid={grid} setGrid={setGrid} />
        <Cell id={3} grid={grid} setGrid={setGrid} />
        <Cell id={4} grid={grid} setGrid={setGrid} />
        <Cell id={5} grid={grid} setGrid={setGrid} />
        <Cell id={6} grid={grid} setGrid={setGrid} />
        <Cell id={7} grid={grid} setGrid={setGrid} />
        <Cell id={8} grid={grid} setGrid={setGrid} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Grid;
