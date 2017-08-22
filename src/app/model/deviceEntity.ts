/**
 * 端末管理さんAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface DeviceEntity {
    userName?: string;

    mailAddress?: string;

    deviceName?: string;

    deviceId?: string;

    returnDate?: string;

    status?: DeviceEntity.StatusEnum;

}
export namespace DeviceEntity {
    export enum StatusEnum {
        Using = <any> 'using',
        Free = <any> 'free'
    }
}