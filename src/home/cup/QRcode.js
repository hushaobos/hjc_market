import React,{PureComponent} from 'react';
import './QRcode.less';

class QRcode extends PureComponent{
  render = () =>{
    return (
      <div className='qr-code-bd'>
        <ul>
          <li>
            <img alt='ios下载二维码' title='ios下载二维码' src='https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/qrcode/download/ios-app-download.png'></img>
            <span>ios下载</span>
          </li>
          <li>
            <img alt='安卓下载二维码' title='安卓下载二维码' src='https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/qrcode/download/android-app-download.png'></img> 
            <span>安卓下载</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default QRcode;