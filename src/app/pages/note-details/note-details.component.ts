import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import {  ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent implements OnInit{
  
  note!: Note
  noteId!: number;
  new!: boolean;
  
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    //we want to find out if we are creating a new note or editing an existing one
    this.route.params.subscribe((params: Params) => {
      
      if(params['id']){
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      }
      else{
        this.new = true;
      } 
    });
    
    this.note = new Note();
  }

  onSubmit(form: NgForm){
    if(this.new){
      //save the note
      this.notesService.add(form.value);
      this.router.navigateByUrl('/');
    }
    else{
      //update the note
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
   
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
