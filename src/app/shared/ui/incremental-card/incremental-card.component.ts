import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryParagraphComponent } from '../typography/primary-paragraph/primary-paragraph.component';

export interface IncrementalCard {
  isThousands?: boolean;
  number: number;
  text: string;
}

@Component({
  selector: 'app-incremental-card',
  standalone: true,
  templateUrl: './incremental-card.component.html',
  styleUrls: ['./incremental-card.component.scss'],
  imports: [CommonModule, PrimaryParagraphComponent],
})
export class IncrementalCardComponent implements OnInit {
  @Input() isThousands: IncrementalCard['isThousands'];
  @Input() number!: IncrementalCard['number'];
  @Input() text!: IncrementalCard['text'];

  incrementNumber(initialNumber: number) {
    if (this.number < initialNumber) {
      this.number++;
      setTimeout(
        this.incrementNumber.bind(this, initialNumber),
        1000 / initialNumber
      );
    }
  }

  ngOnInit() {
    const initialNumber: number = this.number;
    this.number = 0;
    this.incrementNumber(initialNumber);
  }
}
