export interface ICreateForms {
    nameFormGroup?: string,
    elementsForms?: IInfoCreateElementsForm[],
    grid?: ICreateTemplate,
    labelButton?: string,
    brandCar?: any
    modelCar?:any
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
