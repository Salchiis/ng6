import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable()

export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal','Antoher goal']);
  goal = this.goals.asObservable();
  changeGoal(goal){
	  this.goals.next(goal);
  }
  constructor() { }
}
