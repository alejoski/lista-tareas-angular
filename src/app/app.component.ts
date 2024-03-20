import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTareas(this.nuevaTarea);
    this.listaTareas = this._tareasService.getTareas();
    this.nuevaTarea='';
  }

  eliminarTarea(id : number){
    this._tareasService.eliminarTareas(id);
    this.listaTareas = this._tareasService.getTareas();
  }

}
