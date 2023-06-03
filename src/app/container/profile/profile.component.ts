// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Adresse } from 'src/app/model/adresse';
// import { User, UserRole } from 'src/app/model/user';
// import { UserService } from 'src/app/service/user/user.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: User = {username: '', email: '', adresse: '', phone_number: '', id: 0}
//   adresse: Adresse[] = []

//   constructor(
//     private userService: UserService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//       this.userService.getUserInfo(this.user.id).subscribe(data => { 
//         this.user = data
//         if (data.role === UserRole.ROLE_ADMIN) {
//           this.user.role = 1
//         }
//         else this.user.role = 0
//       })
//       this.userService.getAdresse().subscribe( data => {
//         this.adresse = data
//       })
//   }

//   goToAddingAddress() {
//     this.router.navigate(['/routeAcreer'])
//   }

//   edit(addr: Adresse) {
//     this.router.navigate(['/editAdresse'], { queryParams: {id: addr.id}})
//   }

//   delete(addr: Adresse, index: number) {
//     this.userService.DeleteAdresse(addr.id).subscribe()
//     this.adresse.splice(index, 1)
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/model/user';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {username: '', email: '', adresse: '', phone_number: '', id: 0};

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('UserId');
  
    if (userId) {
      const id = Number(userId);
      this.getUser(id);
    } else {
      console.log('WOW');
    }
  }

  getUser(id: number): void {

    console.log(id)

    this.userService.getUser(id).subscribe(
      {
        next: (user: User) => {
          this.user = user;
          console.log(this.user); // Affiche les données de l'utilisateur dans la console
        },
        error: (error) => {
          console.log(error); // Gère les erreurs en cas de problème de requête
        },
        complete: () => {
          // Optionnel : Gère l'événement de complétion de l'observable
        }
      }
    );
  }

  delete(id: number): void {
    this.userService.DeleteUser(id).subscribe({
      next: () => {
        // La suppression a réussi, effectuez ici les actions nécessaires
        this.router.navigate(['/login'])

      },
      error: (error) => {
        // Gestion des erreurs en cas d'échec de la suppression
        console.error(error);
      }
    });
  }

  RedirectToModifyUser() {
    this.router.navigate(['/updateUser']);
  }

  
}

