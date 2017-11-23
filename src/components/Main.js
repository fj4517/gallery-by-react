require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片信息
var imagedatas= require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转化为图片URL路径信息
imagedatas=(function getImageUrl(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imagedatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="_controller-nav_">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
