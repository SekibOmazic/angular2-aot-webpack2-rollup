/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/flug/flug.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from '../../../app/flug/services/flug.service';
import * as import9 from '@angular/core/src/di/injector';
import * as import10 from './flug-buchen/flug-buchen.component.ngfactory';
import * as import11 from './flug-suchen/flug-suchen.component.ngfactory';
import * as import12 from './passagier-suchen/passagier.suchen.component.ngfactory';
import * as import13 from './flug-edit/flug-edit.component.ngfactory';
import * as import14 from '../../../app/flug/flug-buchen/flug-buchen.component';
import * as import15 from '../../../app/flug/flug-suchen/flug-suchen.component';
import * as import16 from '../../../app/flug/passagier-suchen/passagier.suchen.component';
import * as import17 from '../../../app/flug/flug-edit/flug-edit.component';
import * as import18 from '@angular/http/src/http';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from '@angular/router/src/router_config_loader';
class FlugModuleInjector extends import0.NgModuleInjector<import1.FlugModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _RouterModule_3:import5.RouterModule;
  _FlugModule_4:import1.FlugModule;
  __LOCALE_ID_5:any;
  __NgLocalization_6:import6.NgLocaleLocalization;
  __RadioControlRegistry_7:import7.RadioControlRegistry;
  __ROUTES_8:any[];
  __FlugService_9:import8.FlugService;
  __TRANSLATIONS_FORMAT_10:any;
  constructor(parent:import9.Injector) {
    super(parent,[
      import10.FlugBuchenComponentNgFactory,
      import11.FlugSuchenComponentNgFactory,
      import12.PassagierSuchenComponentNgFactory,
      import13.FlugEditComponentNgFactory
    ]
    ,[]);
  }
  get _LOCALE_ID_5():any {
    if ((this.__LOCALE_ID_5 == (null as any))) { (this.__LOCALE_ID_5 = 'en-US'); }
    return this.__LOCALE_ID_5;
  }
  get _NgLocalization_6():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == (null as any))) { (this.__NgLocalization_6 = new import6.NgLocaleLocalization(this._LOCALE_ID_5)); }
    return this.__NgLocalization_6;
  }
  get _RadioControlRegistry_7():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == (null as any))) { (this.__RadioControlRegistry_7 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _ROUTES_8():any[] {
        if ((this.__ROUTES_8 == (null as any))) { (this.__ROUTES_8 = [[{
          path: 'flug-buchen',
          component: import14.FlugBuchenComponent,
          children: [
            {
              path: 'flug-suchen',
              component: import15.FlugSuchenComponent
            }
            ,
            {
              path: 'passagier-suchen',
              component: import16.PassagierSuchenComponent
            }
            ,
            {
              path: 'flug-edit/:id',
              component: import17.FlugEditComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_8;
  }
  get _FlugService_9():import8.FlugService {
    if ((this.__FlugService_9 == (null as any))) { (this.__FlugService_9 = new import8.FlugService(this.parent.get(import18.Http))); }
    return this.__FlugService_9;
  }
  get _TRANSLATIONS_FORMAT_10():any {
    if ((this.__TRANSLATIONS_FORMAT_10 == (null as any))) { (this.__TRANSLATIONS_FORMAT_10 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_10;
  }
  createInternal():import1.FlugModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._FlugModule_4 = new import1.FlugModule();
    return this._FlugModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import1.FlugModule)) { return this._FlugModule_4; }
    if ((token === import19.LOCALE_ID)) { return this._LOCALE_ID_5; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import20.ROUTES)) { return this._ROUTES_8; }
    if ((token === import8.FlugService)) { return this._FlugService_9; }
    if ((token === import19.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const FlugModuleNgFactory:import0.NgModuleFactory<import1.FlugModule> = new import0.NgModuleFactory(FlugModuleInjector,import1.FlugModule);