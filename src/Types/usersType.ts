export type Service = {
    type: string;
    img: {
        src: string;
        alt: string;
    };
    shape?: [string];
    colors: [{ value: string; name: string }];
    price: number;
}