import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ToastrModule, provideToastr } from "ngx-toastr";
import { NgxUiLoaderConfig, NgxUiLoaderModule } from "ngx-ui-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "#5b73e8",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "#5b73e8",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "square-loader",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#5b73e8",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
  };
@NgModule({
    imports: [
      HttpClientModule,
      NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
      TranslateModule.forRoot({
        defaultLanguage:'en',
        loader: {
          provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      })
    ],
    providers: [
    ],
    exports:[TranslateModule,NgxUiLoaderModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class SharedModule { }
  