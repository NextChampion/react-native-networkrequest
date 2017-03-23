# react-native-networkrequest
<p>
You can install the latest beta with 
<pre>
npm i react-native-networkrequest --save
</pre>
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
      var url1 = 'http:/*****/tour/getTourList/userName/13269661186/model/1'
      var url = 'http://api.*****.com/media/getnewslist?pageindex=1&pagesize=20'
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

</pre>

<h1>Example</h1>
Check  
<strong>ZCXNetworkRequestDemo</strong>
 folder
