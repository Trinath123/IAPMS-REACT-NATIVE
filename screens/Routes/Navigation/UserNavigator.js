import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import AddEdit1 from '../../Admin/AddEdit1';
import AddEdit2 from '../../Admin/AddEdit2';
import Edituser from '../../Admin/Edituser';

//import TabBarIcon from '../TabBarIcon';

export const UserNavigator= createBottomTabNavigator({
  AddEdit1:{
    screen:AddEdit1,
  },
  AddEdit2:{
    screen:AddEdit2,
  },
  Edituser:{
    screen:Edituser,
  }
});
export default createAppContainer(UserNavigator);