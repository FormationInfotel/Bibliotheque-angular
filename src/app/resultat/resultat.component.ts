import {Component, OnInit} from '@angular/core';
import {BookVM} from '../models/bookVM';
import {ResearchVM} from '../models/researchVM';
import {BackendService} from '../service/backend.service';
import {DatashareService} from '../service/datashare.service';
import {MessageService} from '../service/message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  keyword: ResearchVM = {
    keyword: ''
  };

  listeLivresRech: any;
  sub: any;
  compteur: number;



  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.keyword.keyword = params.keyword;
      });

    this.listeLivresRech = this.getBooksByKeyword(this.keyword.keyword);

    console.log('liste' + this.listeLivresRech);
    console.log(this.getBooksByKeyword(this.keyword.keyword));

  }

  getBooksByKeyword(keyword): any {

    this.backService.getBooksByKeyword(keyword).subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.backService.handleData(data);
        if (data.payload) {
          this.listeLivresRech = data.payload;
          this.compteur = this.listeLivresRech.length;
          console.log('cpt' + this.compteur);
          return this.listeLivresRech;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        this.messageService.displayErrorMessage(error.message);
      }
    );

  }

}
