import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Output() changeMarkDown:EventEmitter<string> = new EventEmitter<string>()
  @Input() contenidoMarkDown:string = '';
  @Input() placeHolderTextArea:string = 'texto';

  constructor() { }

  ngOnInit(): void {
  }
}
