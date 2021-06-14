import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsComponent } from './news/news.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgotPasswordAdminComponent } from './forgot-password-admin/forgot-password-admin.component';
import { ForgotPasswordUserComponent } from './forgot-password-user/forgot-password-user.component';
import { ForgotPasswordProviderComponent } from './forgot-password-provider/forgot-password-provider.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatsCardsComponent } from './chats-cards/chats-cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';
import { SmsComponent } from './sms/sms.component';
import { SavesComponent } from './saves/saves.component';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { OrdersUserComponent } from './orders-user/orders-user.component';
import { OrdersProviderComponent } from './orders-provider/orders-provider.component';
import { NotificationsUserComponent } from './notifications-user/notifications-user.component';
import { NotificationsAdminComponent } from './notifications-admin/notifications-admin.component';
import { NotificationsProviderComponent } from './notifications-provider/notifications-provider.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { EventsCardsComponent } from './events-cards/events-cards.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileProviderComponent } from './profile-provider/profile-provider.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component:  AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/:id', component: PortfolioDetailComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsCardComponent},
  {path: 'events', component: EventsCardsComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: 'services', component: ServiceCardComponent},
  {path: 'services/:id', component: ServicesDetailsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'sms', component: SmsComponent,canActivate: [AuthGuard]},
  {path: 'email', component: SendEmailComponent,canActivate: [AuthGuard]},
  {path: 'saves', component: SavesComponent,canActivate: [AuthGuard]},
  {path: 'review', component: ReviewFormComponent,canActivate: [AuthGuard]},
  {path: 'orders-admin', component: OrdersAdminComponent,canActivate: [AuthGuard]},
  {path: 'orders-user', component: OrdersUserComponent,canActivate: [AuthGuard]},
  {path: 'orders-provider', component:  OrdersProviderComponent,canActivate: [AuthGuard]},
  {path: 'profile-admin', component: ProfileAdminComponent,canActivate: [AuthGuard]},
  {path: 'profile-user', component: ProfileUserComponent,canActivate: [AuthGuard]},
  {path: 'profile-provider', component:  ProfileProviderComponent,canActivate: [AuthGuard]},
  {path: 'login-admin', component: LoginAdminComponent,canActivate: [AuthGuard]},
  {path: 'login-user', component: LoginUserComponent,canActivate: [AuthGuard]},
  {path: 'login-provider', component:  LoginProviderComponent,canActivate: [AuthGuard]},
  {path: 'register-admin', component: RegisterAdminComponent,canActivate: [AuthGuard]},
  {path: 'register-user', component: RegisterUserComponent,canActivate: [AuthGuard]},
  {path: 'register-provider', component:  RegisterProviderComponent,canActivate: [AuthGuard]},
  {path: 'forgot-password-admin', component: ForgotPasswordAdminComponent,canActivate: [AuthGuard]},
  {path: 'forgot-password-user', component: ForgotPasswordUserComponent,canActivate: [AuthGuard]},
  {path: 'forgot-password-provider', component:  ForgotPasswordProviderComponent,canActivate: [AuthGuard]},
  {path: 'dashboard-admin', component: DashboardAdminComponent,canActivate: [AuthGuard]},
  {path: 'dashboard-user', component: DashboardUserComponent,canActivate: [AuthGuard]},
  {path: 'dashboard-provider', component:  DashboardProviderComponent,canActivate: [AuthGuard]},
  {path: 'notification-admin', component: NotificationsAdminComponent,canActivate: [AuthGuard]},
  {path: 'notification-user', component: NotificationsUserComponent,canActivate: [AuthGuard]},
  {path: 'notification-provider', component:  NotificationsProviderComponent,canActivate: [AuthGuard]},
  {path: 'about-us', component:  AboutComponent,canActivate: [AuthGuard]},
  {path: 'chats', component:  ChatsComponent,canActivate: [AuthGuard]},
  {path: 'chats/:id', component:  ChatsCardsComponent},
  {path: 'checkout', component:  CheckoutComponent,canActivate: [AuthGuard]},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
