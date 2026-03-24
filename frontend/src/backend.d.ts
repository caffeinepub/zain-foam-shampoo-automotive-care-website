import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DealerInquiry {
    id: bigint;
    name: string;
    email: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getDealerInquiries(): Promise<Array<DealerInquiry>>;
    submitDealerInquiry(name: string, email: string, phone: string): Promise<void>;
}
