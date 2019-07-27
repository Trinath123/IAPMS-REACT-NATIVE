import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks3 } from '../../constants';
//import console = require('console');

const { width } = Dimensions.get('window');

export default class Browse3 extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }
categoryDetails(id){
  const {  navigation } = this.props;
  
  if(id=="preventivemaintenance")
  {
    console.log(id);
    navigation.navigate('PreventiveMaintenance');
  }
  if(id=="breakdownmaintenace")
  {
    console.log(id);
    navigation.navigate('BreakdownMaintenance');
  }
  if(id=="toolreplacement")
  {
    console.log(id);
    navigation.navigate('ToolReplacement');
  }
}
  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;

    return (
      <Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 3.5}}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
               // onPress={() => navigation.navigate('Production', { category })}
               onPress={() =>this.categoryDetails(category.id)}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={80} color="#ff6c31">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={15}>{category.name}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Browse3.defaultProps = {
  categories: mocks3.categories,
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
    justifyContent:'center'
  },
  category: {
    backgroundColor:'#d3d6d9',
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 1,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 1,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2.5,
  }
})
