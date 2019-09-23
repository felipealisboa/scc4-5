import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImportComponent } from "./import.component";
import { users } from '../users';
import {addToImport} from "@angular/core/schematics/migrations/move-document/move-import";

export class ImportDetail implements OnInit {

  constructor(
    private route: ActivatedRoute;
    private importComponent: ImportComponent;
  ) {}

  addToImport(user){
    window.alert('User was been added to the list');
    this.importComponent.addToList(user);
}

}
