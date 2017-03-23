/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as ZCXNetworkRequest from './ZCXNetworkRequest'
var loading = false
var a = 0
var b = 0
export default class ZCXNetworkRequestDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={this.fetch.bind(this)}>
          <View style={{backgroundColor: 'red'}}>
            <Text style={styles.instructions} >
              点击发起网络请求
            </Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  fetch(){
    a++;
    console.log('a==='+a);
    if (!loading) {
      loading = true
      b++;
      console.log('b==='+b);
      var url1 = 'http://192.168.0.125:8080/paike_service/tour/getTourList/userName/13269661186/model/1'
      var url = 'http://api.ycapp.yiche.com/media/getnewslist?pageindex=1&pagesize=20'
      var url2 = 'http://www.baidu.com'
      ZCXNetworkRequest.Post(20000,url1, (res)=>{
        alert('请求成功')
        console.log(res);
        loading = false
      },(a)=>{
        alert(a)
        loading = false
      })
    }

    // ZCXNetworkRequest.Get(20000,url,(res)=>{
    //   alert('请求成功')
    //   console.log(res);
    // },(a)=>{
    //     alert(a)
    // })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ZCXNetworkRequestDemo', () => ZCXNetworkRequestDemo);
