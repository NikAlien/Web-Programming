import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from '../service/functions.service';
import { Record } from '../models/record';
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { response } from 'express';
import { tap } from 'rxjs';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [FormsModule, NgFor, NgxPaginationModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {

  // docName: string = "";
  // docContent: string = "";
  error: string = "";
  recordList : Record[] = [];
  category: string = 'book';
  currentPage : number = 1;
  totalEntries : number = 1;
  elementsPerPage : number = 3;
  author: string = "";

  constructor(private router: ActivatedRoute, private service: FunctionsService) {
  }

  ngOnInit(): void {
    this.getRecords();
    console.log(this.recordList);
  }

  deleteCategory() : void {
    this.service.delCategory(this.category).subscribe(msg => alert(msg));
    this.getRecords();
  }

  getRecords() : void {
    this.service.getSize(this.category).subscribe(nr => {this.totalEntries = nr});
    this.service.getRecords(this.currentPage, this.elementsPerPage, this.category)
          .subscribe(recs => {this.recordList = recs;});
  }

  updatePage(page : number) : void {
    this.currentPage = page;
    this.getRecords();
  }

  getAuthor(): void {
    // this.service.getAuthor().pipe(tap(rep => this.author = toString(rep.res);));
  }

 // AddNewDocument() : void {
  //   const id = Number(this.router.snapshot.paramMap.get('id'));
  //   console.log(id);
  //   console.log(this.docContent);
  //   console.log(this.docName);
  //   this.service.addDoc(this.docName, this.docContent, id).subscribe(msg => alert(msg));
  // }

  // getMovies() : void {
  //   this.service.getMovies().subscribe(movies => this.movieList = movies);
  // }

}
