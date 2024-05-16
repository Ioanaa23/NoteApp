import { Component, OnInit } from '@angular/core';
import { NoteCardComponent } from "../../note-card/note-card.component";
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.scss',
    imports: [NoteCardComponent, NgFor]
})
export class NotesListComponent implements OnInit {
   
    notes: Note[] = new Array<Note>();


    constructor(private notesService: NotesService){ }

    ngOnInit(): void {
        //we want to retrieve all notes from NotesService
        this.notes = this.notesService.getAll();
    }

}
