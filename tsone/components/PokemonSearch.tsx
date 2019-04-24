import React, { Component } from 'react';
import { Text, TextInput, View, Button, Image } from 'react-native';
import User from '../interfaces/User.interface';

interface SearchState {
    error: boolean,
    pokemon: Pokemon
}

interface Pokemon {
    name: string,
    numAbilities: number,
    baseExp: number,
    imgUrl: string,
}

export class PokemonSearch extends Component<User, SearchState> {
    //pokemonRef: React.RefObject<TextInput>;
    search_text: string;
    constructor(props: User) {
        super(props);
        this.state = {
            error: false,
            pokemon: { // would prefer to init to null here ...
                name: '',
                numAbilities: 0,
                baseExp: 0,
                imgUrl: 'https://pokeapi.co/api/v2/pokemon/'
            }
        }
        //this.pokemonRef = React.createRef();
        this.search_text = 'pikachu';
    }
    onSearchClick = () => {
        //const inputVal = this.pokemonRef;
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.search_text}`)
            .then(res => {
                if(res.status !== 200) {
                    this.setState({ error: true});
                    return;
                }
                res.json().then(data => {
                    this.setState({
                        error: false,
                        pokemon: {
                            name: data.name,
                            numAbilities: data.abilities.length,
                            baseExp: data.base_experience,
                            imgUrl: data.sprites.front_default
                        }
                    })
                })
            })
    }
  render() {
      const {name: userName, numPokemon} = this.props;
      const {error, pokemon} = this.state;

      let resultView;
      if(error) {
          resultView = <Text>Pokemon not found, please try again</Text>     
        } else if (this.state.pokemon) {
            resultView = <View>
                <Image style={{width: 50, height: 50}} source={{uri: pokemon.imgUrl}} accessibilityLabel="Do you want to know more?"/>
                <Text>{pokemon.name} has {pokemon.numAbilities} abilities and {pokemon.baseExp} base experience!</Text>
            </View>
        }
    return (
        <View>
            <Text>{userName} has {numPokemon} Pokemon!</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.pokemon.name}/>
            <Button onPress={this.onSearchClick} title="Search" color="#841584" accessibilityLabel="Do you want to know more?"/>
            {resultView}
        </View>
    )
  }
}

export default PokemonSearch
