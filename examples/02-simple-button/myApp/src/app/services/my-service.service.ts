import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx'
import { Base64 } from '@ionic-native/base64/ngx';

//import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http: HTTP, private file: File, private base64:Base64) { }

  public callMyService(){
    console.log('callMyService:: invoked.');
  }

   // x
  public async testUint8Array(urlEndPoint:string){
    this.file.readAsArrayBuffer('file:///storage/emulated/0/DCIM/Camera', 'P_20210607_214110.jpg').then((arrbufContent) => {
      console.log('arrbufContent = ' + arrbufContent)
      // debugger;
      // let bufContent:Buffer = Buffer.from(arrbufContent);
      var data = {
        message: 'send from ionic angular android',
        imageFile: new Uint8Array(arrbufContent)
      }
      
  
      var options = {
          //multipart: true,    // must have for sending image.
          //json: true,
          // headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj' }
          headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj', 'Content-Type': 'multipart/form-data'}
          
      }

      // debugger;
      this.http.post(urlEndPoint, data, options.headers).then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
    
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });
    
    });
  }
  // x 
  public async testBASE64(urlEndPoint:string){
    // https://ionicframework.com/docs/native/base64
    let filePath: string = 'file:///storage/emulated/0/DCIM/Camera/P_20210607_214110.jpg';
    this.base64.encodeFile(filePath).then((base64File: string) => {
      console.log(base64File);
      debugger;
      var data = {
        message: 'send from ionic angular android',
        imageFile: base64File
      }
      
  
      var options = {
          //multipart: true,    // must have for sending image.
          //json: true,
          // headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj' }
          // headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj', 'Content-Type': 'application/x-www-form-urlencoded'}
          headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj', 'Content-Type': 'multipart/form-data'}
          
          
      }

      // debugger;
      this.http.post(urlEndPoint, data, options.headers).then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
    
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });
    

    }, (err) => {
      console.log(err);
    });
  }

  public async testArrayBuffer(urlEndPoint:string){
      this.file.readAsArrayBuffer('file:///storage/emulated/0/DCIM/Camera', 'P_20210607_214110.jpg').then((arrbufContent) => {
      console.log('arrbufContent = ' + arrbufContent)
      // debugger;
      // let bufContent:Buffer = Buffer.from(arrbufContent);
      var data = {
        message: 'send from ionic angular android',
        imageFile: arrbufContent
      }
      
  
      var options = {
          //multipart: true,    // must have for sending image.
          //json: true,
          // headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj' }
          headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj'}
          
      }
      // this.http.setDataSerializer("multipart");
      

      // debugger;
      this.http.post(urlEndPoint, data, options.headers).then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
    
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });
    
    });
  }

  public async testFormData(urlEndPoint:string){
    var data = new FormData();
    data.append("message", "send from ionic angular android");
    //data.append("imageFile", "file:///storage/emulated/0/DCIM/Camera/P_20210607_214110.jpg");
    var headers = { 
      'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj',
      "cache-control": "no-cache",   
      'Content-Type': 'application/json',

      // "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    }


    // this.http.post(urlEndPoint, data, headers).then(data => {
    this.http.post(urlEndPoint, JSON.stringify(data), headers).then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });

  }

  public async testArrayBuffer2_new(urlEndPoint:string){
    
    this.file.readAsArrayBuffer('file:///storage/emulated/0/DCIM/Camera', 'P_20210607_214110.jpg').then((arrbufContent) => {
      // var data = new FormData();
      // data.append("message", "send from ionic angular android");

    // console.log('arrbufContent = ' + arrbufContent)
    // // debugger;
    var data = {
      message: 'send from ionic angular android',
      imageFile: arrbufContent // new Uint8Array(arrbufContent) //arrbufContent
    }
    
    

    var options = {
        //multipart: true,    // must have for sending image.
        //json: true,
        // headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj' }
        headers: { 
          'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj',   
          'Content-Type': 'application/json',
        }
        
    }
    this.http.setDataSerializer("urlencoded");  // sned message: x
    

    // debugger;
    this.http.post(urlEndPoint, data, options.headers).then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
  
  });
}
  
  public async sendLineImage(urlEndPoint:string, strMsg:string, strToken:string){
    this.testFormData(urlEndPoint); // testing
    // this.testArrayBuffer2_new(urlEndPoint); // message ok
    // this.testArrayBuffer(urlEndPoint); 
    // this.testUint8Array(urlEndPoint);  // failure, all x
    // this.testBASE64(urlEndPoint);   // failure, message ok

    // test read file: ok
    // let arrbufContent:ArrayBuffer = await this.file.readAsArrayBuffer('file:///storage/emulated/0/DCIM/Camera', 'P_20210607_214110.jpg');
    // console.log('arrbufContent = ' + arrbufContent);



    
    
  }

  public sendLineMessage(urlEndPoint:string, strMsg:string, strToken:string){
    var data = {
      message: 'send from ionic angular android',
      // imageFile: bufContent
    }
    
 
    var options = {
        //multipart: true,    // must have for sending image.
        //json: true,
        headers: { 'Authorization': 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj' }
    }

    // debugger;

    this.http.post(urlEndPoint, data, options.headers).then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });


    // var headers = new HttpHeaders();
    // // headers.append("Accept", 'application/json');
    // // headers.append('Content-Type', 'application/json' );
    // headers.append('Authorization', 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj')
    // // const requestOptions = new RequestOptions({ headers: headers });

    // // No 'Access-Control-Allow-Origin' header is present on the requested resource
    // this.http.post(urlEndPoint, data, {headers: headers})
    //   .subscribe(data => {
    //     console.log(data['_body']);
    //    }, error => {
    //     console.log(error);
    //   });

 
    // needle.post(urlEndPoint, data, options, function(err:any, resp:any) {
    //     if(err){
    //         console.log('Shoot! Something is wrong: ' + err.message);
    //         return;
    //     }
    //     if (resp.statusCode != 200){
    //         console.log('Post not 200. resp = ' + resp.body.toString());
    //         return;
    //     }

    //     console.log('Post OK. resp = ' + resp.body.toString());
    // });

    
    // 
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() { // Call a function when the state changes.
    //   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //       // Request finished. Do processing here.
    //       console.log('LINE notify test ok');
    //   }
    // }

    // xhr.open("POST", urlEndPoint, true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Authorization', 'Bearer eBTHTlHvJJXX8Bc6WsQ8XPs05j75Vbz4rj7FNgrivVj');
    // xhr.send('message='+data.message)

    console.log('ok');
  }


  

}
