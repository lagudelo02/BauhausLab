/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CitiesComponent } from './cities.component';

describe('Component: Cities', () => {
  it('should create an instance', () => {
    let component = new CitiesComponent();
    expect(component).toBeTruthy();
  });
});
