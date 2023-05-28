import { EvilIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string;
};

const IconButton = ({ icon, text }: IconButtonProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <EvilIcons name={icon} size={22} color="grey" />
    <Text style={{ fontSize: 12, color: 'grey' }}>{text}</Text>
  </View>
);

export default IconButton;
