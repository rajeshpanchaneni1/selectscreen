import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';


const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
   return (
     <ScrollView>
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>A+
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
       <Text style={textStyle}>A-
       </Text>
   </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
       <Text style={textStyle}>B+
       </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>B-
      </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
     <Text style={textStyle}>AB+
     </Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>AB-
    </Text>
</TouchableOpacity>
<TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>O+
   </Text>
</TouchableOpacity>
<TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>O-
   </Text>
</TouchableOpacity>
   </ScrollView>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 2,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50

  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#ff0000',
    justifyContent: 'flex-start',
    marginTop: 11,
    marginLeft: 50,
    marginRight: 50,
    height: 50

  }
};

export default Button;
