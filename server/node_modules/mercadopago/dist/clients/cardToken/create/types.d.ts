import type { MercadoPagoConfig } from '../../../mercadoPagoConfig';
import { Options } from '../../../types';
export declare type CardTokenCreateClient = {
    body: CardTokenCreateBody;
    config: MercadoPagoConfig;
};
export declare type CardTokenCreateBody = {
    card_id?: string;
    customer_id?: string;
    security_code?: string;
};
export declare type CardTokenCreateData = {
    body: CardTokenCreateBody;
    requestOptions?: Options;
};
