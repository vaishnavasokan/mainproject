import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) 
  { 
    
  }


  /*public adduser(item)
  {
    let url="http://localhost:8080/";
    return this.hc.post(url,item);
  }*/

    public logincheck(username,password)
    {
      /*let url="http://localhost:8080/users/login";
      return this.hc.post(url,{email:email,pswd:pswd});*/
      //`${config.apiUrl}/users/login`

      return this.http.post(`http://localhost:8080/users/login`, { username, password });
    }

    public addrecruiter(a,b,c,d,e,f,g,h)
  {
    console.log("service : "+a);
    
    let url="http://localhost:8080/users/recruiterregister";
    return this.http.post(url,{uname:a,email:b,pswd:c,mobno:d,
                        company:e,designation:f,caddress:g,
                      cwebsite:h});
  }

  public viewdata(id)
  {
    let url="http://localhost:8080/users/view/"+id;
    return this.http.get(url);
  }

    
  logout() 
  {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      localStorage.clear();
  }
  /*public getdetails(data)
  {
    let url="http://localhost:8080/users/viewprofile"+data;
    return this.hc.get(url);
  }*/

  
}
