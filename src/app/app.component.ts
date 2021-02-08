import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car, People } from "./resources";
import { Observable } from "rxjs";
import { DeserializeArray, JsonArray } from "cerializr";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // cars$: Observable<Car[]>;

  people$: Observable<People[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.cars$ = this.http.get("/assets/car.json").pipe(
    //   map((res: JsonArray) => DeserializeArray(res, Car)),
    //   tap(res => console.log(res))
    // );

    this.people$ = this.http.get("/assets/people.json").pipe(
      map((res: JsonArray) => DeserializeArray(res, People)),
      tap(res => console.log(res))
    );
  }
}
