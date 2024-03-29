import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Heading } from '@components/text/heading/heading.component';

@Component({
  selector: 'lettering',
  standalone: true,
  imports: [Heading, MatIconModule],
  templateUrl: './lettering.component.html',
  styleUrl: './lettering.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class Lettering implements OnInit {
  ngOnInit() { }

  @Input() label!: string;
  @Input() icon: 'left' | 'rigth' | undefined;
  @Input() style: 'primary' | 'secundary' | 'tertiary' | 'success' | 'waring' | 'error' | undefined;
  @Input() disable: boolean = false;
  @Input() size: 'small' | 'normal' | undefined



  @Output() onClick = new EventEmitter<any>();

  public onAction(event: any) {
    if (!this.disable) this.onClick?.emit(event);
  }

}
