export interface ICreateForms {
    nameFormGroup?: string,
    elementsForms?: IInfoCreateElementsForm[],
    grid?: ICreateTemplate,
    labelButton?: string
}

export interface ICreateTemplate {
    columns: number,
    rows: number
}

export interface IInfoCreateElementsForm {
    type: string,
    start: number,
    name: string,
    nameField: string,
    rowUbication: number
}
