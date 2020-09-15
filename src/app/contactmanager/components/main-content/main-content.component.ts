import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ContactOptionsSheetComponent } from '../contact-options-sheet/contact-options-sheet.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.user = null;

      this.service.users.subscribe(users => {
        if (users.length == 0) return;

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500);
      });

    })

  }

  openBottomSheet(): void {
    let bottomSheetRef = this.bottomSheet.open(ContactOptionsSheetComponent, {
      data: { phoneNumbers : [ '+46711111111', '+46722222222', '+46733333333'] }
    });

    bottomSheetRef.afterDismissed().subscribe((data) => {
      if (data) {
        console.log(data);
      }
    });
  }

}