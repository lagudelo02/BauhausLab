/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AgeComponent } from './age.component';

describe('Component: Age', () => {
  it('should create an instance', () => {
    let component = new AgeComponent();
    expect(component).toBeTruthy();
  });
});
