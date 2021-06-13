import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WhyComponent } from './why/why.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StatsComponent } from './stats/stats.component';
import { NewsCardsComponent } from './news-cards/news-cards.component';
import { TeamCardsComponent } from './team-cards/team-cards.component';
import { PartnersComponent } from './partners/partners.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
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
import { ForgotPasswordPasswordComponent } from './forgot-password-password/forgot-password-password.component';
import { ForgotPasswordProviderComponent } from './forgot-password-provider/forgot-password-provider.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatsCardsComponent } from './chats-cards/chats-cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CtaComponent } from './cta/cta.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendEventsComponent } from './send-events/send-events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { OrdersComponent } from './orders/orders.component';
import { PricingComponent } from './pricing/pricing.component';
import { SmsComponent } from './sms/sms.component';
import { ReviewsComponent } from './reviews/reviews.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    WhyComponent,
    TeamComponent,
    TestimonialsComponent,
    StatsComponent,
    NewsCardsComponent,
    TeamCardsComponent,
    PartnersComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    NewsCardComponent,
    NewsComponent,
    ServiceCardComponent,
    CheckoutComponent,
    LoginAdminComponent,
    LoginUserComponent,
    LoginProviderComponent,
    RegisterAdminComponent,
    RegisterProviderComponent,
    RegisterUserComponent,
    ForgotPasswordAdminComponent,
    ForgotPasswordUserComponent,
    ForgotPasswordPasswordComponent,
    ForgotPasswordProviderComponent,
    ChatsComponent,
    ChatsCardsComponent,
    ContactUsComponent,
    CtaComponent,
    SendEmailComponent,
    SendEventsComponent,
    FaqsComponent,
    OrdersComponent,
    PricingComponent,
    SmsComponent,
    ReviewsComponent,
    SavesComponent,
    OrdersAdminComponent,
    OrdersUserComponent,
    OrdersProviderComponent,
    NotificationsUserComponent,
    NotificationsAdminComponent,
    NotificationsProviderComponent,
    DashboardUserComponent,
    DashboardProviderComponent,
    DashboardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
