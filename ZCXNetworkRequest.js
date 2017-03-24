
function timeoutPromise(ms, promise, requestTimeout ) {
  return new Promise((resolve, reject) =>{
    const timeoutId = setTimeout(() => {
      requestTimeout('promise timeout')
      reject(new Error("promise timeout"))
    },ms)
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res)
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err)
      }
    )
  })
}

export function post(ms,url,body = null,callback,requestTimeout) {

  return timeoutPromise(ms,fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body:JSON.stringify(body)
  }),requestTimeout)
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }else {
      return response
    }
  })
  .then((responseData) => {
    if (responseData.status&&responseData.status!='200') {
      alert(`网络错误,错误码:${responseData.status}`)
      return
    }
    callback(responseData)
  })
  .catch((error) => {
    // console.error(error);
  })
}

export function get(ms,url,callback, requestTimeout) {
  return timeoutPromise(ms,fetch(url),requestTimeout)
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }else {
      return response
    }
  })
  .then((responseData) => {
    if (responseData.status&&responseData.status!='200') {
      alert(`网络错误,错误码:${responseData.status}`)
      return
    }
    callback(responseData)
  })
  .catch((error) => {
    // console.error(error);
  })
}
