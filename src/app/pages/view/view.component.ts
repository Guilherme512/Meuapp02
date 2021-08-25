import { Component, OnInit } from '@angular/core';

// Importa dependências
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  // Armazena o ID do artigo a ser visualizado
  id: string;

  // Armazena o artigo completo
  item: any;

  constructor(
    // Injeta dependência
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Obtém o ID do artigo da URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');


    // Obtém dados documeto
    this.afs.firestore.doc(`articles/${this.id}`).get()
    .then(
      (aData) => {

        // Armazena dados em "item"
        this.item = aData.data();

        // Se artigo não existe, mostra a página de erro 404
        if (!this.item) this.router.navigate(['/e404']);
      }
    )
    .catch(
      (error) => {
        console.error(`Erro: ${error}`);
      }
    )



  }
}
