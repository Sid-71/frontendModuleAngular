import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { CurrencyComponent } from './currency/currency.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'todo', component: TodoComponent, canActivate:[AuthGuard] },
{path : 'currency',component : CurrencyComponent, canActivate:[AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
