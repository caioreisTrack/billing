
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Body } from '@components/text/body/body.component';


@Component({
  selector: 'chip',
  standalone: true,
  imports: [Body, MatIconModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ChipComponent implements OnInit {
  ngOnInit() { }

  @Input() label!: string;
  @Input() icon: string | undefined;
  @Input() style!: 'primary' | 'secundary' | 'tertiary';
  @Input() disable: boolean = false;



  @Output() onClick = new EventEmitter<any>();
  @Output() closeAction = new EventEmitter<any>();

  public onAction(event: any) {
    if (!this.disable) this.onClick?.emit(event);
  }
  public iconAction(event: any) {
    if (!this.disable) this.closeAction?.emit(event)
  }
}

