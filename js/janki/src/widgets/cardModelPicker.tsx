// Copyright (c) 2021 University System of Georgia and janki contributors
// Distributed under the terms of the BSD-3-Clause License.

import { VDomRenderer } from '@jupyterlab/apputils';
import { HTMLSelect } from '@jupyterlab/ui-components';
import * as React from 'react';

import * as SCHEMA from '../_schema';
import { INewCardModel, CSS } from '../tokens';

export class CardModelPicker extends VDomRenderer<INewCardModel> {
  constructor(model: INewCardModel) {
    super(model);
    this.addClass(CSS.picker);
  }

  protected render() {
    const { models } = this.model;
    // const defaultValue = card.mid ? `${card.mid}` : '';

    return [
      <label key="label">Model</label>,
      <HTMLSelect
        key="select"
        onInput={this.onChange}
        // defaultValue={defaultValue}
        aria-label="Model"
        title="Select Model"
      >
        {models.map(this.renderOption)}
      </HTMLSelect>,
    ];
  }

  protected renderOption = (model: SCHEMA.Model) => {
    return (
      <option key={model.id} value={model.id}>
        {model.name}
      </option>
    );
  };

  protected onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.model.modelId = parseInt(evt.currentTarget.value);
  };
}
