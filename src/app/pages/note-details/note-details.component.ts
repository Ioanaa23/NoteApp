import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent implements OnInit{
  
  note!: Note

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm){
    //save the note
    this.notesService.add(form.value);
  }

}
