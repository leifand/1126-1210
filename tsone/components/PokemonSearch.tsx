import React, { Component } from 'react';
import { Text } from 'react-native';
import User from '../interfaces/User.interface';

export class PokemonSearch extends Component<User> {
  render() {
      const {name, numPokemon} = this.props;
    return (
      <Text>
        {name} has {numPokemon} Pokemon!
      </Text>
    )
  }
}

export default PokemonSearch
