import { Http, Response } from '@angular/http';
import { Injectable }     from '@angular/core';

// Tratando erros
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()

export class LearningObservables {

  public constructor (private http: Http) {

    // Objeto Observador
    let observer = {
      next: function(newData) {
        console.log("Called NEXT method and pass as parameter the 'newData' => ", newData)
      },
      error: function(errorData) {
        console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData)
      },
      complete: function() {
        console.log('Called COMPLETE method and finish')
      }
    };

    // Objeto Observador (utilizando arrow functions)
    // let arrowobserver = {
    //   next: (newData) => {
    //     console.log("Called NEXT method and pass as parameter the 'newData' => ", newData)
    //   },
    //   error: (errorData) => {
    //     console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData)
    //   },
    //   complete: () => {
    //     console.log('Called COMPLETE method and finish')
    //   }
    // };

    // Objeto Observado e passando observador como parâmetro
    // this.http.get("api/tasks")
    //   .subscribe(observer);



    // Objeto Observado e criando um observador como parâmetro
    // this.http.get("api/tasks")
    //   .subscribe({
    //   next: function(newData) {
    //     console.log("Called NEXT method and pass as parameter the 'newData' => ", newData)
    //   },
    //   error: function(errorData) {
    //     console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData)
    //   },
    //   complete: function() {
    //     console.log('Called COMPLETE method and finish')
    //   }
    // });

    // // Passando os metods netxt, error and complete diretamente como parametro
    // this.http.get("api/tasks")
    //   .subscribe(
    //     function(newData) {
    //       console.log("Called NEXT method and pass as parameter the 'newData' => ", newData)
    //     },
    //     function(errorData) {
    //       console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData)
    //     },
    //     function() {
    //       console.log('Called COMPLETE method and finish')
    //     }
    //   );

    // // Passando os metods netxt, error and complete diretamente como parametro (usando arrow functions)
    // this.http.get("api/tasks")
    //   .subscribe(
    //     newData   => console.log("Called NEXT method and pass as parameter the 'newData' => ", newData),
    //     errorData => console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData),
    //     ()        => console.log('Called COMPLETE method and finish')
    //   );

    // Passando apenas o metodo next diretamente como parametro (usando arrow functions)
    this.http.get("api/taskass")
      .catch(this.handleErrors)
      .subscribe({
        next: function(newData) {
          console.log("Called NEXT method and pass as parameter the 'newData' => ", newData)
        },
        error: function(errorData) {
          // console.log("Called ERROR method and pass as parameter the 'errorData' => ", errorData)
          alert("Ocorreu um erro no servidor, por favor tente mais tarde.")
        },
        complete: function() {
          console.log('Called COMPLETE method and finish')
        }
      });


  }

  public handleErrors(error: Response) {
    console.log("Saving error in database for the developer => ", error);
    return Observable.throw(error);
  }

}
