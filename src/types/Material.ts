export interface ItemMaterial {
    nombre: string;
    seccion: string;
    archivo: string;
}

export interface MaterialResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ItemMaterial[];
}