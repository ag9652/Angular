import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { HttpErrorResponse }  from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Data';
   uid=" ";
  uname=" ";usal=" ";udept=" ";res;
  constructor (private httpService: HttpClient) { }
  arrEmp;
  ngOnInit () {
    this.httpService.get('./assets/employee.json')
    .subscribe(
      data => {
        this.arrEmp = data as string [];	
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  update(emp: { empId: any; empName:string; empSal:any; empDept: string; })
    {
     this.uid=emp.empId;
     this.uname=emp.empName;
      this.usal=emp.empSal;
     this.udept=emp.empDept;
     this.res=emp;
     
    }
    updateDetails(uid:number,uname:string,usal:number,udept:string)
    {
      this.res.empId=uid;
      this.res.empName=uname;
      this.res.empSal=usal;
      this.res.empDept=udept;
    }
    delete(employees,n:number)
    {
      employees.splice(n,1);
    }
    add(aId:number,aName:string,aSal:number,aDept:string)
    {
      let id1=aId;
      let name1=aName;
      let sal1=aSal;
      let dept1=aDept;
      this.arrEmp.push({empId:id1,empName:name1,empSal:sal1,empDept:dept1});
    }
}

