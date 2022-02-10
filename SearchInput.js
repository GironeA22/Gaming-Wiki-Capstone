/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import { MCItems } from './utils/api';

// export default class SearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//   }

//   handleChangeText = text => {
//     this.setState({text});
//   };

//   handleSubmitEditing = () => {
//     const {onSubmit} = this.props;
//     const {text} = this.state;

//     if (!text) {
//       return;
//     }

//     // onSubmit.text;
//     this.setState({text: ''});
//   };

//   render() {
//     const {placeholder} = this.props;
//     const {text} = this.state;

//     return (
//       <View style={styles.container}>
//         <TextInput
//           autoCorrect={false}
//           value={text}
//           placeholder={placeholder}
//           placeholderTextColor="gray"
//           underlineColorAndroid="transparent"
//           textAlign="center"
//           style={styles.textInput}
//           clearButtonMode="always"
//           onChangeText={this.handleChangeText}
//           onSubmitEditing={this.handleSubmitEditing}
//         />
//       </View>
//     );
//   }
// }

// // SearchInput.propTypes = {
// //   onSubmit: PropTypes.func.isRequired,
// //   placeholder: PropTypes.string,
// // };

// SearchInput.defaultProps = {
//   placeholder: '',
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 60,
//     marginTop: 20,
//     backgroundColor: 'rgba(255,255,255,0.5)',
//     marginHorizontal: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   textInput: {
//     flex: 1,
//     fontSize: 20,
//     color: '#222',
//   },
// });

// export default function SearchInput() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const handleChange = e => {
//     setSearchTerm(e.target.value);
//   };
//   useEffect(() => {
//     const results = MCItems.filter(item =>
//       item.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
// }
