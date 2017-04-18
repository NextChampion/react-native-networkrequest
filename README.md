# react-native-networkrequest
<p>
You can install the latest beta with 
<pre>
npm i react-native-networkrequest --save
</pre>
This component has the function of the request timeout, and support requests timeout callback, can avoid repeating same requests.
</p>
<h1>Preview</h1>

<h1>Getting start</h1>
<p>
start with 
<pre>npm i react-native-networkrequest --save</pre>
</p>
<h1>Usage</h1>
<pre>
import * as networkRequest from 'react-native-networkrequest'
</pre>

<pre>

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
      var url3 = 'http://192.168.0.125:8080/v1/users/login/SunY/123456/uniway'

      ZCXNetworkRequest.post(20000,url1,null, (res)=>{
        alert('请求成功')
        console.log(res);
        loading = false
      },(timeout)=>{
        alert(timeout)
        loading = false
      },(error)=>{
        loading = false
        console.log(loading);
        alert(`网络错误,错误码:${error.status}`)
      })
    }

    // ZCXNetworkRequest.get(20000,url,(res)=>{
    //   alert('请求成功')
    //   loading = false
    //   console.log(res);
    // },(timeout)=>{
    //   loading = false
    //   console.log(loading);
    //   alert(timeout)
    // },(error)=>{
    //   loading = false
    //   console.log(loading);
    //   alert(`网络错误,错误码:${error.status}`)
    // })

  }

</pre>

<h1>Example</h1>
Check  
<strong>ZCXNetworkRequestDemo</strong>
 folder
