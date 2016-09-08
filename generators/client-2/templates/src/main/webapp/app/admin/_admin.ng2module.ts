import { XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuditsService } from './audits/audits.service';
import { <%=jhiPrefixCapitalized%>ConfigurationService } from './configuration/configuration.service';
import { <%=jhiPrefixCapitalized%>HealthService } from './health/health.service';
import { LogsService } from './logs/logs.service';
import { ParseLinks } from "../components/util/parse-links.service";

import { FilterPipe } from "../shared/filter.pipe";
import { OrderByPipe } from "../shared/order-by.pipe";
import { TranslatePipe } from '../shared/translate.pipe';
import { AuditsComponent } from './audits/audits.component';
import { <%=jhiPrefixCapitalized%>ConfigurationComponent } from './configuration/configuration.component';
import { <%=jhiPrefixCapitalized%>HealthCheckComponent } from './health/health.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        FilterPipe,
        OrderByPipe,
        TranslatePipe,
        AuditsComponent,
        <%=jhiPrefixCapitalized%>ConfigurationComponent,
        <%=jhiPrefixCapitalized%>HealthCheckComponent,
        LogsComponent
    ],
    providers: [
        AuditsService,
        <%=jhiPrefixCapitalized%>ConfigurationService,
        <%=jhiPrefixCapitalized%>HealthService,
        LogsService,
        ParseLinks,
        {
            provide: XSRFStrategy,
            useValue:  new CookieXSRFStrategy('CSRF-TOKEN', 'X-CSRF-TOKEN')
        }
    ]
})
export class <%=angular2AppName%>AdminModule {}