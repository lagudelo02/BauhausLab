/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DudeComponent } from './dude.component';

describe('Component: Dude', () => {
  it('should create an instance', () => {
    let component = new DudeComponent();
    expect(component).toBeTruthy();
  });
});
