/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';

// const images = [];
// var index = 0;

// images[0] = <img src="../assets/EGS_TheBindingofIsaacRepentance_NicalisIncEdmundMcmillen_S2-1200x1600-eb480826546ffb2ed1560ceec262b615.jpg" />;
// images[1] = <img src="../assets/il_1140xN.3427102381_dbt1.jpg" />;
// images[2] = <img src="../assets/jbareham_191158_ply0958_decade_minecraft.jpg" />;
// index = Math.floor(Math.random() * images.length);
// document.write(images[index]);

import image2 from '../assets/EGS_TheBindingofIsaacRepentance_NicalisIncEdmundMcmillen_S2-1200x1600-eb480826546ffb2ed1560ceec262b615.jpg';
import image3 from '../assets/il_1140xN.3427102381_dbt1.jpg';
import image4 from '../assets/jbareham_191158_ply0958_decade_minecraft.jpg';

const images = [
    image2,
    image3,
    image4,
];

 componentDidMount(); {
    this.changeImage();
}

const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    this.setState({
        currentImageIndex: randomNumber
    });
}

<Image
    source={images[this.state.currentImageIndex]}
  />

export default BG => Image;
