import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry-container',
  templateUrl: './entry-container.component.html',
  styleUrls: ['./entry-container.component.scss'],
})
export class EntryContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}


  user = 'Dev';
  entryDate = new Date().toLocaleDateString();
  prompt = 'What are you happy about?';
  streak = 3;

}
