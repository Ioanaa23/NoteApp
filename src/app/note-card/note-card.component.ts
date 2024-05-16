import { NgForOf } from '@angular/common';
import { Component, ElementRef, Input, NgModule, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [RouterModule, NgForOf],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent implements OnInit {

  
  @Input() title!: string;
  @Input() body!: string;
  
  // @ViewChild('noteP', { static: true }) noteP!: ElementRef<HTMLElement>;
  // @ViewChild('truncator') truncator!: ElementRef<HTMLDivElement>;
  // @ViewChild('bodyText') bodyText!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2){}
  
  
  
  ngOnInit(): void {
    //work out if there is a text overflow and if not then hide the truncator

    // let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    // let viewableHeight = parseInt(style.getPropertyValue("height"), 36);

    // if(this.bodyText.nativeElement.scrollHeight > viewableHeight)
    // {
    //   //if there is a text overflow, show the fade out truncator
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display','block');
    // }
    // else
    // {
    //   //else (there is no text overflow) hide the fade out truncator
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    // }

    console.log("avem: ", this.body, this.title);
  } 

}

