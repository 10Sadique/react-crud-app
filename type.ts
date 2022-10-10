export type UserType = {
    name: string;
    email: string;
    id: number;
    phone: string;
    username: string;
    website: string;
    address: Address;
    company: Company;
};

type Address = {
    street: string;
    city: string;
    suite: string;
    zipcode: string;
    geo: Geo;
};

type Geo = {
    lat: string;
    lng: string;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};
