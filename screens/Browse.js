import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';
//import console = require('console');

const { width } = Dimensions.get('window');

export default class Browse extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }
  categoryDetails(id) {
    const { navigation } = this.props;

    if (id == "masterdata") {
      console.log(id);
      navigation.navigate('Masterdata');
    }
    if (id == "user") {
      console.log(id);
      navigation.navigate('UserManagement');
    }
    if (id == "dashboard") {
      console.log(id);
      navigation.navigate('Dashboard');
    }
    if (id == "production") {
      console.log(id);
      navigation.navigate('Production');
    }
    if (id == "tool") {
      console.log(id);
      navigation.navigate('ToolMaintenance');
    }
    if (id == "dispatch") {
      console.log(id);
      navigation.navigate('Dispatch');
    }
  }
  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;

    return (
      <Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 3.5 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                // onPress={() => navigation.navigate('Production', { category })}
                onPress={() => this.categoryDetails(category.id)}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={80} color="rgba(41,216,143,0.20)">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>{category.name}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Browse.defaultProps = {
  categories: mocks.categories,
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
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  }
})
