import { Component, Inject, OnInit } from '@angular/core';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contact-options-sheet',
  templateUrl: './contact-options-sheet.component.html',
  styleUrls: ['./contact-options-sheet.component.scss']
})
export class ContactOptionsSheetComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ContactOptionsSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }

  openLink(num: any): void {
    this.bottomSheetRef.dismiss(num);
  }
}
