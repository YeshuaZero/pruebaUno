import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies : Movie[];
  inputEntrada: FormControl;

  ngOnInit() {
    this.inputEntrada = new FormControl({ value: null, required: true }, [Validators.pattern(/^\d+$/)]);
  }

  search(value){
    if(value && parseInt(value,0)){
      fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${parseInt(value, 0)}`)
      .then((result:any)=>result.json())
      .then((json)=>{
        console.log('json:', json)
        this.movies = json.data;
    })
    }

  }

}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
