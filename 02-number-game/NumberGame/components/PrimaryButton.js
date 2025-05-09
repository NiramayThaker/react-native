import React, { Children } from 'react';
import { View, Text } from 'react-native';

function PrimaryButton({children}) {
  return (
    <View>
        <Text>
            {children}
        </Text>
    </View>
  )
}

export default PrimaryButton