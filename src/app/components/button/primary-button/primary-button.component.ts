import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { Heading } from '@components/text/heading/heading.component';


import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [Heading, MatIconModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PrimaryButton implements OnInit {
  ngOnInit() { }

  @Input() label!: string;
  @Input() leftIcon: string | undefined;
  @Input() rigthIcon: string | undefined;
  @Input() style: 'normal' | 'filled' | undefined;
  @Input() disable: boolean = false;
  @Input() size: 'small' | 'normal' | undefined



  @Output() onClick = new EventEmitter<any>();

  public onAction(event: any) {
    if (!this.disable) this.onClick?.emit(event);
  }
}
