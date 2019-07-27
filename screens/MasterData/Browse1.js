import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks1 } from '../../constants';
//import console = require('console');

const { width } = Dimensions.get('window');

export default class Browse1 extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }
categoryDetails(id){
  const {  navigation } = this.props;
  
  if(id=="usercategory")
  {
    console.log(id);
    navigation.navigate('UserCategory');
  }
  if(id=="userroles")
  {
    console.log(id);
    navigation.navigate('UserRoles');
  }
  if(id=="emailnotification")
  {
    console.log(id);
    navigation.navigate('EmailNotification');
  }
  if(id=="featuresgroup")
  {
    console.log(id);
    navigation.navigate('FeaturesGroup');
  }
  if(id=="pageaccess")
  {
    console.log(id);
    navigation.navigate('PageAccess');
  }
  if(id=="controlelements")
  {
    console.log(id);
    navigation.navigate('ControlElement');
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
                  <Badge margin={[0, 0, 15]} size={80} color="#90db3a">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20} style={styles.text}>{category.name}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Browse1.defaultProps = {
  categories: mocks1.categories,
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
    paddingHorizontal: theme.sizes.base * 3,
    marginBottom: theme.sizes.base * 4.5,
  },
  category: {
    backgroundColor:'#d3d6d9',
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2.5,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2.5,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2.5,
  },
  text:{
    //backgroundColor:'blue',
    fontSize:11,
    width:"100%",
    justifyContent: 'center',
    alignItems:'center',
    


  }
})
