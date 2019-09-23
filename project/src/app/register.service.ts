import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uid;

  constructor(private http:HttpClient) 
  { 
    
  }

  addjob(data) : Observable<any> {
    return this.http.post<any>(`http://localhost:8080/users/postjob`, data)
  }


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
    //console.log("service editprofile"+id);
    
    let url="http://localhost:8080/users/view/"+id;
    return this.http.get(url);
  }

  public viewrecruiter(id)
  {
    //console.log("service rec editprofile"+id);
    
    let url="http://localhost:8080/users/viewrecruiter/"+id;
    return this.http.get(url);
  }

  getProfile(id): Observable<any>
  {
    return this.http.get<any>(`http://localhost:8080/users/fetchuser/`+id)
  }

  getjobs()
  {
    let url="http://localhost:8080/users/viewjobs";
    return this.http.get(url);
  }

  updatedata1(id)
  {

    this.uid=id;
    //console.log("service update"+this.uid);
    let url="http://localhost:8080/users/updateuser/"+this.uid;
    return this.http.get(url);

    //return this.http.get(url,{uname:a,email:b,mobno:c,presentAddress:d,location:e});
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
